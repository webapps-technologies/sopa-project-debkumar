
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
        window.onload = function () {
            showTab('soybean-testing-lab');
        
            const secondCard = document.querySelectorAll('.card')[1];
            secondCard.classList.add('active-card');
            secondCard.style.backgroundColor = '#FFDE82';
        };
        
        const initializedTabs = new Set();
        
        function initScroll(tabId) {
            if (initializedTabs.has(tabId)) return;
        
            const tab = document.getElementById(tabId);
            const ul = tab.querySelector('.analysis-buttons ul');
            const items = ul.querySelectorAll('li');
        
            if (!items.length) return;
        
            const itemHeight = items[0].offsetHeight + 10;
            const totalItems = items.length;
            let index = 0;
        
            items.forEach(item => ul.appendChild(item.cloneNode(true)));
        
            function scrollList() {
                index++;
                ul.style.transition = 'transform 0.5s ease-in-out';
                ul.style.transform = `translateY(-${index * itemHeight}px)`;
        
                if (index >= totalItems) {
                    setTimeout(() => {
                        ul.style.transition = 'none';
                        ul.style.transform = 'translateY(0)';
                        index = 0;
                    }, 500);
                }
            }
        
            setInterval(scrollList, 2000);
            initializedTabs.add(tabId);
        }
        
        function showTab(tabId) {
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(tab => {
                tab.classList.remove('active');
            });
        
            const selectedTab = document.getElementById(tabId);
            if (selectedTab) {
                selectedTab.classList.add('active');
                initScroll(tabId); 
            }
        
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                card.classList.remove('active-card');
                card.style.backgroundColor = '#FFF9E5';
            });
        
            let activeCard;
            switch (tabId) {
                case 'soybean-dev-program1':
                    activeCard = cards[0];
                    break;
                case 'soybean-testing-lab':
                    activeCard = cards[1];
                    break;
                case 'membership':
                    activeCard = cards[2];
                    break;
                case 'soybean-dev-program2':
                    activeCard = cards[3];
                    break;
            }
        
            if (activeCard) {
                activeCard.classList.add('active-card');
                activeCard.style.backgroundColor = '#FFDE82';
            }
        }
        
        
        
        
