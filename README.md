
# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Dennes Lopez**

Time spent: **6** hours spent in total

Link to project: (https://glitch.com/edit/#!/ebony-elemental-guitar?path=README.md%3A11%3A0)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [Added keyboard controls, used css grid to postion buttons in a 2 * 3 array on landscape
 tablet screens and larger.] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![win](https://cdn.glitch.global/497827cb-a3b3-46f1-bd3f-3862b3fa073e/win.gif?v=1647802405097)
![lost](https://cdn.glitch.global/497827cb-a3b3-46f1-bd3f-3862b3fa073e/lost.gif?v=1647802414695)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[I used https://freshman.tech/css-grid-calculator/ , 
 https://www.youtube.com/watch?v=lNJMDTSkNXo - for keyboard controls,
 W3Schools and my notes in my notion account which I made based on information on W3Schools.]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[A Challenge I encountered was making css grid do what i wanted without drawbacks.
My goal was to make the six buttons stay on a 2*3 array, using the regular css
grid column function made the 2*3 array but the buttons were too far apart 
as each column was set to take 1/3 of the width of the website. At first
I tried to fix this with setting the maximum width of the grid container to fit
just the 3 buttons and the 2 gaps which made the buttons closer together
but when the window was expanded they would shift to the left of the screen 
leaving a massive blank space to the right.I couldn't think of a way to move
the container to start in the middle of the screen so I did some research and
found out you can position buttons somewhat independently with the function
place-self:, after playing around with this function I was able to set the buttons
 all in good spots. Since I made the choice of making this button array with 
 larger screens in mind I set a min screen width to the suggessted width of
 tablets in landscaped mode with the @media container.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[
 -  What is the usual process of bringing up a new feature you want to an app to the team
    and if the feature is complex and needs multiple people to develop in a reasonable time
    how would the proposal of the feature be handled as opposed to a proposal for a simple
    feature you can complete yourself?
  - How often are completely new projects developed as opposed to managing an existing project?]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[ 
  - I would add pre-set  remixed melodies based on know music used in piano apps with the user
    being able to select it with a button that changes the pattern and frequency map values to match the piano keys needed.
  - I would also like to make another version of this website with the set of buttons mimicing
    the Ocarina from the legend of Zelda. Hitting the start button would randomly give you an Ocarina song from the game to repeat as done in the game. 
 - I would then make this website work with mobile phones by using  @media to set the buttons 
   to be smaller to fit all six buttons in 3 rows and 2 columns. 
 - With an optimized mobile phone app of this website and pre-set songs it could be a fun time-burner app
   to play while waiting for anything. Since I also enjoy a good challenge in games
   for the desktop version I would make challenging remixes that play faster and have
   a time limit to press each button(~ 3 seconds), the addition of key bindings would 
   allow faster inputs from the user making these challenges to be doable after a few tries.]



## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/365adb668acf4b4eaefa7557f24fa0f1)


## License

    Copyright [Dennes Lopez]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.