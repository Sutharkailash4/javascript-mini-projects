const mouseFollower = document.querySelector('.mouse-follower');
const innerCircle = document.querySelector('.inner_box');

document.body.addEventListener('mousemove', (e) => {
    mouseFollower.style.transform = `translate(${e.clientX-10}px, ${e.clientY-10}px)`;
    innerCircle.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
