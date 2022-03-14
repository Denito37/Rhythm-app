const clueHoldTime = 1000;
const cluePauseTime = 333;
const nextClueWaitTime = 1000;


var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;

function randomPattern(){
  for(let i = 0; i <8; i++){
  var random = Math.floor(Math.random() * 6) + 1;//returns random number from 1-6
    pattern.push(random);
  }
}
function startGame(){
  randomPattern();
  progress = 0;
  guessCounter = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}
function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}
// Sound Synthesis Functions, numbers represent sound pitch
const freqMap = {
  1: 211.6,
  2: 269.6,
  3: 292,
  4: 346.2,
  5: 390.5,
  6: 431.6
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}
                          
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime,btn);
  }
}
function playClueSequence(){
  context.resume()
  var guessCounter = 0;
  let delay = nextClueWaitTime;
  for(let i=0; i<=progress;i++){
    console.log("play single clue: "+pattern[i]+" in "+ delay + "ms")
    setTimeout(playSingleClue, delay, pattern[i])
    delay += clueHoldTime
    delay += cluePauseTime;
  }
}
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Game Over. You Won!")
}

function guess(btn){
  console.log("user guessed: " + btn);
  console.log("counter: " + guessCounter);
  console.log("progress: " + progress);
  
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        //guessCounter++;//problem: only last button counts as right guess
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;//problem only last two button counts as right guess
    }
  }else{
        loseGame();
      }
}  
// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
