const clueHoldTime = 1000;
const cluePauseTime = 333;
const nextClueWaitTime = 750;


var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;

//key controls
document.addEventListener("keydown",keyControls => {
  if(keyControls.key === "q"){
    startTone(1);
    guess(1);
    lightButton(1);
  }
  if(keyControls.key === "w"){
    startTone(2);
    guess(2);
    lightButton(2);
  }
  if(keyControls.key === "e"){
    startTone(3);
    guess(3);
    lightButton(3);
  }
  if(keyControls.key === "a"){
    startTone(4);
    guess(4);
    lightButton(4);
  }
  if(keyControls.key === "s"){
    startTone(5);
    guess(5);
    lightButton(5);
  }
  if(keyControls.key === "d"){
    startTone(6);
    guess(6);
    lightButton(6);
  }
});
document.addEventListener("keyup", keys =>{
  stopTone();
  clearButton(1);
  clearButton(2);
  clearButton(3);
  clearButton(4);
  clearButton(5);
  clearButton(6);
});

//creates new patterns
function randomPattern(){
  for(let i = 0; i <8; i++){
  var random = Math.floor(Math.random() * 6) + 1;//returns random number from 1-6
    pattern.push(random);
  }
}
function startGame(){
  randomPattern();
  progress = 0;
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
  guessCounter = 0;
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
    if(guessCounter == progress){
      if(progress == pattern.length - 1){winGame();}
      else{
        progress++;
        playClueSequence();
      }
    }else{guessCounter++;}
  }else{loseGame();}
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
