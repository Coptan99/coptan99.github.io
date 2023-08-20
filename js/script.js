// Get references to the icon element and the list element
const icon = document.getElementById('toggle-menu');
const list = document.getElementById('nav');

// Add a click event listener to the icon element
icon.addEventListener('click', function() {
    // Toggle the visibility of the list by changing its display property
    if (list.style.display === 'none') {
        list.style.display = 'flex'; // Show the list
    } else {
        list.style.display = 'none';  // Hide the list
    }
});
