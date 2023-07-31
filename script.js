// sound play function.
const PlaySound = (event) => {
    // dom element selection.
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    // sound play condition.
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    
    // css effect condition.
    key.classList.add("playing");
    setTimeout(() => {
        key.classList.remove("playing"); 
    }, 2000);
}
 // css effect condition.
// const removeTransition = (event) => {
//     if (event.propertyName !== "transform") return;
//     this.classList.remove("playing");
// }

// const keys = document.querySelectorAll(".key");
// keys.forEach( key => key.addEventListener("transitionend",removeTransition));

// event on fire.
window.addEventListener("keydown",PlaySound);

