const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.icon');

            // Toggle content visibility
            content.classList.toggle('active');
            header.classList.toggle('active'); // Change header background when active
            icon.classList.toggle('active');

            // Close other accordions
            headers.forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.nextElementSibling.classList.remove('active');
                    otherHeader.classList.remove('active'); // Reset other headers
                    otherHeader.querySelector('.icon').classList.remove('active');
                }
            });
        });
    });