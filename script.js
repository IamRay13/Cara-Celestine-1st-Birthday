document.addEventListener('DOMContentLoaded', function() {
    const toggleHeaders = document.querySelectorAll('.toggle-header');

    toggleHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('i.fa-solid'); // Ensure targeting the correct icon
            content.classList.toggle('open');

            // Toggle icon class
            if (content.classList.contains('open')) {
                icon.classList.remove('fa-caret-down');
                icon.classList.add('fa-caret-up');
            } else {
                icon.classList.remove('fa-caret-up');
                icon.classList.add('fa-caret-down');
            }
        });
    });

    // Add some dynamic party poppers on load for fun
    const popperContainers = document.querySelectorAll('.party-popper-container');
    popperContainers.forEach(container => {
        for(let i = 0; i < 5; i++) { // Create a few poppers in each container
            const popper = document.createElement('div');
            popper.classList.add('party-popper');
            // Randomize colors and animation properties
            const colors = ['#e91e63', '#81ecec', '#a29bfe', '#fdd835', '#ff7eb9', '#74b9ff'];
            popper.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            popper.style.setProperty('--tx', Math.random() * 80 - 40); // Random horizontal translation
            popper.style.setProperty('--ty', -(Math.random() * 50 + 40)); // Random upward vertical translation
            popper.style.setProperty('--r', Math.random() * 60 - 30); // Random rotation
            const delay = Math.random() * 0.5;
            popper.style.animationDelay = `${delay}s, ${delay + 0.7}s`;
            container.appendChild(popper);
        }
    });
});
