
document.addEventListener("DOMContentLoaded", function () {
    const dots = document.querySelectorAll(".m-dot");
    const plans = document.querySelectorAll(".plan");
    const plansPerSlide = 3;

    function updateVisiblePlans(slideIndex) {
        const start = slideIndex * plansPerSlide;
        const end = start + plansPerSlide;

        plans.forEach((plan, index) => {
            plan.style.display = (index >= start && index < end) ? "block" : "none";
        });

        dots.forEach(dot => dot.classList.remove("active"));
        dots[slideIndex].classList.add("active");
    }

    updateVisiblePlans(0);

    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            const slideIndex = parseInt(dot.getAttribute("data-slide"));
            updateVisiblePlans(slideIndex);
        });
    });
});

