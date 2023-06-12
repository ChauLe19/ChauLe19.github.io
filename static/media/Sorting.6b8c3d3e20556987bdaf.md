# Sorting

## Insertion Sort
| ![Insertion Sort Gif](/images/Insertion_Sort.gif) |
|:-------------:|
> $Θ(n)$ best case cost makes it useful when we have reason to expect the input to be nearly sorted.

## Bubble Sort
| ![Bubble Sort Gif](/images/Bubble_Sort.gif) |
|:-------------:|
> Even an optimized version will normally run slower than insertion sort

## Selection Sort
| ![Bubble Sort Gif](/images/Selection_Sort.gif) |
|:-------------:|
> $Θ(n^2)$ time in the best, average, and worst cases but only requires Θ(n) swap operations
>
> Thus, it does relatively well in applications where swaps are expensive. It can be viewed as an optimization on bubble sort, where a swap is deferred until the end of each iteration.

## Shell Sort (Diminishing increment sort)
| ![Shell Sort Gif](/images/Shell_Sort.gif) |
|:-------------:|
> Sort each sublist with decrementing the space between each element. (Gif starts with index 0 and 5-elem apart from each element)

Possible implementation includes I = power of 2 less than n

## Merge Sort
| ![Merge Sort Gif](https://willrosenbaum.com/assets/img/2022f-cosc-311/merge-sort.gif) |
|:-------------:|

## Quick Sort
| ![Quick Sort Gif](https://www.tutorialspoint.com/data_structures_algorithms/images/quick_sort_partition_animation.gif) |
|:-------------:|

## Heap Sort
| ![Heap Sort Gif](https://miro.medium.com/v2/resize:fit:798/0*hVi2iYTIVkrm9ODv.gif) |
|:-------------:|

## Radix Sort
| ![Radix Sort Gif](https://assets.digitalocean.com/articles/alligator/js/radix-sort/radix-sort-animation-o.gif) |
|:-------------:|

## Cost of sorting

| | Insertion | Bubble | Selection | Shell | Merge | Quick |
| ----: | :---: | :----: | :-----:| :-----: | :-----: | :-----: |
| _Comparisons_ |  | |  |  | | |
| Best Case | $Ω(n)$ | $Ω(n^2)$| $Ω(n^2)$ | $Ω(nlog(n))$ | $Ω(nlog(n))$ | $Ω(nlog(n))$ |
| Average Case | $Θ(n^2)$ | $Θ(n^2)$| $Θ(n^2)$ | $Θ(nlog(n)^2)$ | $Θ(nlog(n))$ | $Θ(nlog(n))$ |
| Worst Case | $O(n^2)$ | $O(n^2)$| $O(n^2)$ | $O(nlog(n)^2)$ | $O(nlog(n))$ | $O(n^2)$ |
| _Swaps_ |  | |  | | | |
| Best Case | $0$ | $0$ | $Ω(n)$ | | | |
| Average Case | $Θ(n^2)$ | $Θ(n^2)$| $Θ(n)$ |  | | |
| Worst Case | $O(n^2)$ | $O(n^2)$| $O(n)$ | | | |

Any algorithm which limits comparisons to adjacent items will cost at least:
> $$
> \frac{n(n-1)}{4} = Ω(n^2)
> $$