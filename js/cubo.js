let cube1 = document.querySelector('.cube-1');
let cube2 = document.querySelector('.cube-2');
let cube3 = document.querySelector('.cube-3');
let rightArrow = document.querySelector('.right-arrow');
let leftArrow = document.querySelector('.left-arrow');

let pausa = document.querySelector('.play-pause');

let pos = 0;

rightArrow.addEventListener("click", () => {
    pos += 90;
    cube1.style.transform = `rotateY(${pos}deg)`;
    cube2.style.transform = `rotateY(${pos}deg)`;
    cube3.style.transform = `rotateY(${pos}deg)`;
});

leftArrow.addEventListener("click", () => {
    pos -= 90;
    cube1.style.transform = `rotateY(${pos}deg)`;
    cube2.style.transform = `rotateY(${pos}deg)`;
    cube3.style.transform = `rotateY(${pos}deg)`;
});

rightArrow.addEventListener("mouseover", () => {
    pos += 25;
    cube1.style.transform = `rotateY(${pos}deg)`;
    cube2.style.transform = `rotateY(${pos}deg)`;
    cube3.style.transform = `rotateY(${pos}deg)`;
});

leftArrow.addEventListener("mouseover", () => {
    pos -= 25;
    cube1.style.transform = `rotateY(${pos}deg)`;
    cube2.style.transform = `rotateY(${pos}deg)`;
    cube3.style.transform = `rotateY(${pos}deg)`;
});

rightArrow.addEventListener("mouseout", () => {
    pos -= 25;
    cube1.style.transform = `rotateY(${pos}deg)`;
    cube2.style.transform = `rotateY(${pos}deg)`;
    cube3.style.transform = `rotateY(${pos}deg)`;
});

leftArrow.addEventListener("mouseout", () => {
    pos += 25;
    cube1.style.transform = `rotateY(${pos}deg)`;
    cube2.style.transform = `rotateY(${pos}deg)`;
    cube3.style.transform = `rotateY(${pos}deg)`;
});

myInterval = -1;

pausa.addEventListener("click", () => {
    const playIcon = document.querySelector('.play-pause i');
    let togglePlay = (play, pause) => {
        playIcon.classList.remove(play);
        playIcon.classList.add(pause);
    }
    if (myInterval == -1) {
        togglePlay('fa-play', 'fa-pause');
        myInterval = setInterval(loop, 1000);
    } else {
        togglePlay('fa-pause', 'fa-play');
        clearInterval(myInterval);
        myInterval = -1;
        pos += 90;
    }
    loop();
})

function loop() {
    pos -= 90;
    cube1.style.transform = `rotateY(${pos}deg)`;
    cube2.style.transform = `rotateY(${pos}deg)`;
    cube3.style.transform = `rotateY(${pos}deg)`;
}