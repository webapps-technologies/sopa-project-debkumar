
//news & update part.....................................
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

        // first SOPA  DEVELOPMENT PROGRAM part...............................
        window.onload = function() {
            showTab('soybean-testing-lab');
            
            const secondCard = document.querySelectorAll('.card')[1];
            secondCard.classList.add('active-card');
            secondCard.style.backgroundColor = '#FFDE82';
        }
        
        function showTab(tabId) {
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(tab => {
                tab.classList.remove('active');
            });
            
            const selectedTab = document.getElementById(tabId);
            if (selectedTab) {
                selectedTab.classList.add('active');
            }
            
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                card.classList.remove('active-card');
                card.style.backgroundColor = '#FFF9E5';
            });
            
            let activeCard;
            switch(tabId) {
                case 'soybean-dev-program1':
                    activeCard = cards[0];
                    activeCard.style.backgroundColor = '#FFDE82';
                    // activeCard.style.height="300px";
                    break;
                case 'soybean-testing-lab':
                    activeCard = cards[1];
                    activeCard.style.backgroundColor = '#FFDE82';
                    break;
                case 'membership':
                    activeCard = cards[2];
                    activeCard.style.backgroundColor = '#FFDE82';
                    break;
                case 'soybean-dev-program2':
                    activeCard = cards[3];
                    activeCard.style.backgroundColor = '#FFDE82';
                    break;
            }
            
            if (activeCard) {
                activeCard.classList.add('active-card');
            }
        }



        //pricing, membership part..........................
        let index = 0;
        function moveCarousel(step) {
            index = step;
            document.getElementById('carousel_member').style.transform = `translateX(-${step * 100 / 3}%)`;
            document.querySelectorAll('m-dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === step);
            });
        }
        
        
