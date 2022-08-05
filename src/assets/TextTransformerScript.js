const cb1 = document.getElementById('clipboard-button-1');
const cb2 = document.getElementById('clipboard-button-2');
var clipboardTimeout1;
var clipboardTimeout2;
const functionSelect = document.getElementById('func-select');
function populateFunctionOptions() {
    functionSelect.innerHTML = ""
    for (const key of Object.keys(localStorage)) {
        const dropdownItem = document.createElement("option");
        dropdownItem.value = key;
        dropdownItem.innerText = key;
        functionSelect.append(dropdownItem)
    }
}
populateFunctionOptions();
var codeEditor1 = document.getElementById('codeEditor1');
var lineCounter1 = document.getElementById('lineCounter1');
var codeEditor2 = document.getElementById('codeEditor2');
var lineCounter2 = document.getElementById('lineCounter2');
var codeEditor3 = document.getElementById('codeEditor3');
var lineCounter3 = document.getElementById('lineCounter3');
codeEditor3.value = "return text"
if (Object.keys(localStorage).length > 0) {
    codeEditor3.value = localStorage.getItem(functionSelect.options[0].value)
}

functionSelect.onchange = function () {
    codeEditor3.value = localStorage.getItem(this.options[this.selectedIndex].value)
    line_counter(codeEditor3, lineCounter3)
}
line_counter(codeEditor3, lineCounter3)
addTextareaEvents(codeEditor1, lineCounter1);
addTextareaEvents(codeEditor2, lineCounter2);
addTextareaEvents(codeEditor3, lineCounter3);
function addTextareaEvents(codeEditor, lineCounter) {
    codeEditor.addEventListener('scroll', () => {
        lineCounter.scrollTop = codeEditor.scrollTop;
        lineCounter.scrollLeft = codeEditor.scrollLeft;
    });

    codeEditor.addEventListener('keydown', (e) => {
        let { keyCode } = e;
        let { value, selectionStart, selectionEnd } = codeEditor; if (keyCode === 9) {  // TAB = 9
            e.preventDefault();
            codeEditor.value = value.slice(0, selectionStart) + '\t' + value.slice(selectionEnd);
            codeEditor.setSelectionRange(selectionStart + 2, selectionStart + 2)
        }
    });

    var lineCountCache = 0;
    codeEditor.addEventListener('input', () => {
        line_counter(codeEditor, lineCounter, lineCountCache);
    });
}
function line_counter(codeEditor, lineCounter, lineCountCache) {
    const lineCount = codeEditor.value.split('\n').length;
    var outarr = new Array();
    if (lineCountCache != lineCount) {
        for (var x = 0; x < lineCount; x++) {
            outarr[x] = (x + 1) + '.';
        }
        lineCounter.value = outarr.join('\n');
    }
    lineCountCache = lineCount;
}

cb1.onclick = () => {
    copy2Clipboard(cb1, codeEditor1, clipboardTimeout1);
}
cb2.onclick = () => {
    copy2Clipboard(cb2, codeEditor2, clipboardTimeout2);
}
function copy2Clipboard(cb, codeEditor, clipboardTimeout) {
    navigator.clipboard.writeText(codeEditor.value);
    cb.innerText = 'Copied!'
    clearTimeout(clipboardTimeout)
    clipboardTimeout = setTimeout(() => cb.innerText = 'Copy to clipboard', 3000);
}

function transform() {
    const fn = new Function(['text'], codeEditor3.value)
    result = fn(codeEditor1.value);
    codeEditor2.value = typeof result === 'object' ? JSON.stringify(result) : result
}

function save() {
    let cacheName;
    let name = prompt("Please enter the transformation name: ");
    if (name == null || name == "") {
    } else {
        if (localStorage.getItem(name)) {
            alert("This name already exists! Please change its name or delete the existing one and try again.");
        }
        else {
            localStorage.setItem(name, codeEditor3.value);
            alert("Saved!");
            populateFunctionOptions();
        }
    }
}