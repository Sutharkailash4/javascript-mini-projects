let Mouse_follower = document.querySelector('.mouse-follower');
let inner_circle = document.querySelector('.inner_box');
let body = document.body;

body.addEventListener('mousemove', (e) => {
    let X = e.clientX - 15;
    let Y = e.clientY - 15;
    Mouse_follower.style.position = 'absolute';
    Mouse_follower.style.top = `${Y}px`;
    Mouse_follower.style.left = `${X}px`;
    let x = e.clientX - 5;
    let y = e.clientY - 5;
    inner_circle.style.position = 'absolute';
    inner_circle.style.top = `${y}px`;
    inner_circle.style.left = `${x}px`;
})