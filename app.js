// Select element using querySelector
const anim = document.querySelector('.anim');

// Make variable to update using Arrow keys
let x = 0;
let y = 0;
const speed = 50;
let rotateY = 0;
let rotateX = 0;

// Listen for keydown event 
window.addEventListener('keydown', function (event) {
    if (!event.key.includes('Arrow')) return;
    console.log(event.key);
    
    if (event.key === 'ArrowUp') {
        y -= 1;
        rotateY = -90;
    } else if (event.key === 'ArrowDown') {
        y += 1;
        rotateY = 90;
    } else if (event.key === 'ArrowLeft') {
        x -= 1;
        rotateY = 0;
        rotateX = 180;
    } else if (event.key === 'ArrowRight') {
        x += 1;
        rotateY = 0;
        rotateX = 0;
    }

    // Updating CSS using set Attribute.
    anim.setAttribute('style', `
    --rotateX: ${rotateX}deg;
    --x: ${x * speed}px;
    --y: ${y * speed}px;
    --rotate: ${rotateY}deg;
  `);

});
