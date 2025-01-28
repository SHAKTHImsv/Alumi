// Select the elements for the eyes and the black pupils
const eye1 = document.querySelector('.eye1');
const eye2 = document.querySelector('.eye2');
const blackEye1 = document.querySelector('.eye1 .blackeye');
const blackEye2 = document.querySelector('.eye2 .blackeye');

// Function to move the black eye
function moveEye(eye, blackEye, event) {
    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
    const distance = Math.min(eyeRect.width / 4, eyeRect.height / 4); // Limit the movement

    const eyeOffsetX = Math.cos(angle) * distance;
    const eyeOffsetY = Math.sin(angle) * distance;

    // Apply the new transform to the black eye
    blackEye.style.transform = `translate(${eyeOffsetX}px, ${eyeOffsetY}px)`;
}

// Event listener to track mouse movement
document.addEventListener('mousemove', function(event) {
    moveEye(eye1, blackEye1, event);
    moveEye(eye2, blackEye2, event);
});



