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

document.addEventListener('DOMContentLoaded', function() {
    const roleSelect = document.getElementById('selection');
    const studentFields = document.getElementById('studentFields');
    const alumniFields = document.getElementById('alumniFields');

    // Event listener to detect changes in the dropdown
    roleSelect.addEventListener('change', function() {
        if (roleSelect.value === 'student') {
            studentFields.style.display = 'block';  // Show student fields
            alumniFields.style.display = 'none';   // Hide alumni fields
        } else if (roleSelect.value === 'alumni') {
            studentFields.style.display = 'none';   // Hide student fields
            alumniFields.style.display = 'block';  // Show alumni fields
        }
    });

    // Ensure the correct fields are displayed when the page loads (if a role is already selected)
    if (roleSelect.value === 'student') {
        studentFields.style.display = 'block';
        alumniFields.style.display = 'none';
    } else if (roleSelect.value === 'alumni') {
        studentFields.style.display = 'none';
        alumniFields.style.display = 'block';
    }
});
