document.addEventListener('DOMContentLoaded', () => {
    // Function to setup flipbook
    function setupFlipbook(flipbookSelector, frameChange, scrollOffset, stopPosition) {
        const flipbook = document.querySelector(flipbookSelector);
        const images = flipbook.querySelectorAll('.flipbook-image');
        const originalTop = flipbook.offsetTop; // Store the original top position of the flipbook

        const changeImage = (index) => {
            images.forEach((img, idx) => {
                img.style.display = idx === index ? 'block' : 'none';
            });
        };

        window.addEventListener('scroll', () => {
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

            // Adjust for scrollOffset and ensure it does not go below 0
            let adjustedScrollPosition = Math.max(currentScrollPosition - scrollOffset, 0);
            let currentIndex = Math.floor(adjustedScrollPosition / frameChange);
            
            if (currentIndex >= images.length) {
                currentIndex = images.length - 1;
            }

            changeImage(currentIndex);

            // Change flipbook container position based on scroll
            if (currentScrollPosition > 300 && currentScrollPosition < stopPosition) {
                flipbook.style.position = 'fixed';
                flipbook.style.top = '0';
            } else if (currentScrollPosition >= stopPosition) {
                flipbook.style.position = 'absolute';
                flipbook.style.top = `${originalTop + (stopPosition - 320)}px`; // Apply dynamic offset
            } else {
                flipbook.style.position = '';
                flipbook.style.top = `0px`; // Reset to original position
            }
        });

        changeImage(0); // Initialize first image
    }

    // Setup each flipbook with its specific settings
    setupFlipbook('#flipbook1', 4, 0, 750); // Example: Flipbook 1
    //setupFlipbook('#flipbook2', 10, 2000, 2500); // Example: Flipbook 2
    // Add more flipbook setups as needed
});


document.addEventListener('DOMContentLoaded', () => {
    const scrollPositionDisplay = document.getElementById('scrollPosition');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        scrollPositionDisplay.textContent = `Scroll Position: ${scrollPosition}px`;
    });
});

