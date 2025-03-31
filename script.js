const dots = document.querySelectorAll('.dot');
        const carousel = document.getElementById('carousel');
        const items = document.querySelectorAll('.carousel-item');
        const itemHeight = items[0].offsetHeight + 10;

        function scrollCarousel(index) {
            const scrollAmount = index * itemHeight;
            carousel.scrollTo({
                top: scrollAmount,
                behavior: 'smooth'
            });
            updateActiveItem(index);
            updateDots(index);
        }

        function updateActiveItem(activeIndex) {
            items.forEach((item, index) => {
                if (index === activeIndex) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }

        function updateDots(activeIndex) {
            dots.forEach((dot, index) => {
                if (index === activeIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }