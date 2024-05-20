# How did I design TetroRhythm

---

## Background
Before I rambling about how I made the game, we need to talk about why and what has motivated me to started this project in the first place. I was a competitive Tetris player and played a ton of Tetris. This game becomes a little dull for my liking and I want to spice up the game a little. At the same time, I also came across a quite interesting [Gameplay by Doremy](https://youtu.be/RJm-89wa7OM?si=94VcGgm8v3kKFUHB), in which he was playing Tetris 99 to the beat. It seems like a great concept as a game. I jumped right into making this game, and everything starts taking shape from there.

## 1st Attempt

1st attempt?!? Wait, there are multiple attempts? Short answer yes.

So, what does it look like? It looks the exact same way as someone would expect when I mention "Playing Tetris to the beat" would look like. It's a plain old tetris game with a beat bar.

![TetroRhythm - Attempt 1](/images/TetroRhythm-attempt1.gif)

Unfortunately, it's a bit too clunky in my opinion. Let's analyze it a bit closer and see what has gone wrong with this control? In Tetris, there's a concept called [Finesse](https://four.lol/mid-game/finesse), to refer to the concept of placing Tetris pieces in the most optimize way (aka requires the least number of keypresses). This technique states that all placement on the board requires no more than 3 taps (+ 1 hard drop). As you can see, to play the game you would need 3 intermediate taps for a total of 4 taps per beat. That's an insane number!!! Keep in mind you need to practice this Finesse technique to ensure a smooth gameplay like Doremy.

* Side note: There's a way more polished game called [Chextris](https://chemicalex.itch.io/chextris) that has taken this approach more seriously than I have, if you are interested in playing.

So now what?

## 2nd Attempt

According to the Finesse technique mentioned above, it will take 2 taps to move 1 piece. What if I simplify this process a bit by utilizing the mouse? This helps a little with reducing number of key presses but the eyes and mouse disaasociation was really distracting. I also had some troubles with accuracy because the center is not consistent accross tetrominos. Ultimately, it created more problems than it has solved. I has also eliminated gravity, reduced the board size, introduced "auto-snapping" feature, trying to mitigate the speed problem, but I got no luck.

![TetroRhythm - Attempt 2](/images/TetroRhythm-attempt2.gif)

While I have reduced the number of taps per beat to 3, but many user experience issues remained. This is really not the way to go. :\(\(\(

## 3rd Attempt

This project doesn't feel like it's going anywhere. I was on the edge to give up at this point. What should I do now? In the back of my mind, I knew there must be some way to to make this better. How do I transfer the image of the piece in my mind on to the board as quickly as possible? What about swipe controls? But how?

I realized there are 4 orientations for each pieces but there are also 4 directions (left, right, up, down). What if I utilize that properties to this game?. Introducing a new swipe controls for tetris!!!

![TetroRhythm - Instructions](/images/TetroRhythm-instructions.png)

The position of each pieces is determined by the starting point of the gesture and the direction of the it determines the orientation of the block.

The final result: [TetroRhythm](https://youtu.be/MbGwEet1NWU)

![TetroRhythm - Final](/images/TetroRhythm-final.gif)

This is signigicantly reduced number of intermediate steps and manage to let the user place a block by just a single swipe!!! While it has a learning curve to this due to the fact that players now need to the memorize the graph of gesture and orientation, but I believe it's an easy system to remember due to its logical nature of it.