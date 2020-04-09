window.addEventListener('load', function() {
    
    let displayButton = document.getElementById('displayButton');
    let displayText = document.getElementById('displayText');

    displayButton.addEventListener('click', function() {
        if (displayText.style.display === 'hidden') {
            displayText.style.display = 'block';
            displayButton.innerHTML = 'Hide Text';
        } else {
            displayText.style.display = 'hidden';
            displayButton.innerHTML = 'Show Text';
        }
    });

});