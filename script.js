// const arrayOfDrums = document.getElementById('drumsparent');

// arrayOfDrums.addEventListener("click", (e)=>{
//     let target = e.target.innerHTML;
//     createSound(target);
//     buttonAnimation(target);
// });

// arrayOfDrums.addEventListener("keydown", (e)=>{
//     let target = e.key;
//     let array = ["w","a","d","j","k","l","s"];
//     if(array.includes(target)=== false ) {
//         alert("Wrong Key Press");
//         return;
//     }

//     createSound(target);
//     buttonAnimation(target);


// });

// const createSound = (key) =>{
//     let sound = new Audio(`assets/sounds/${key}.mp3`);
//     sound.play();
// }

// const buttonAnimation = (key) =>{
//     let active = document.querySelector(`.${key}`);
//     active.classList.add("pressed");

//     setTimeout(()=>{
//         active.classList.remove("pressed");
//     },100)
// }


// // const drumsParent = document.getElementById("drumsParent");

// // drumsParent.addEventListener("click", (e) => {
// //   let target = e.target.innerHTML;
// //   createSound(target); // for creating sound
// //   buttonAnimation(target); // for animating drums
// // });

// // drumsParent.addEventListener("keydown", (e) => {
// //   let target = e.key;
// //   let array = ["w", "a", "d", "j", "k", "l", "s"]; //if key pressed is apart from this array then alert will be shown
// //   if (!array.includes(target)) {
// //     alert("Wrong Key Press");
// //     return;
// //   }
// //   createSound(target);
// //   buttonAnimation(target);
// // });

// // const createSound = (key) => {
// //   let sound = new Audio(`sounds/${key}.mp3`); //dynamically updating the sound
// //   sound.play();
// // };

// // const buttonAnimation = (key) => {
// //   let active = document.querySelector(`.${key}`);
// //   active.classList.add("pressed");

// //   setTimeout(() => {
// //     active.classList.remove("pressed");
// //   }, 100);
// // };

const arrayOfDrums = document.getElementById('parent');

arrayOfDrums.addEventListener('click', (e)=>{
    let target = e.target.innerHTML;
    createSound(target);
    buttonAnimation(target);
});

arrayOfDrums.addEventListener('keydown', (e)=>{
    let target = e.key;
    let array = ['w','a','d','j','k','l','s'];
    if(array.includes(target)===false){
        alert("Wrong Key Press");
        return;
    }

    createSound(target);
    buttonAnimation(target);


});

const createSound = (key) =>{
    let sound = new Audio(`assets/sounds/${key}.mp3`);
    sound.play();
}

const buttonAnimation = (key) =>{
    let active = document.querySelector(`.${key}`);
    active.classList.add('pressed');

    setTimeout(()=>{
        active.classList.remove('pressed');
    },100)
}