// =============================
// ALAA GROCERY BROCHURE
// =============================

const brochure = document.querySelector(".brochure");
const pages = document.querySelectorAll(".page");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentPage = 0;

// =============================
// SHOW PAGE
// =============================

function showPage(index) {

    if (index < 0) index = 0;

    if (index > pages.length - 1) index = pages.length - 1;

    currentPage = index;

    brochure.scrollTo({

        left: pages[currentPage].offsetLeft,

        behavior: "smooth"

    });

    updateButtons();

}

// =============================
// UPDATE BUTTONS
// =============================

function updateButtons() {

    prevBtn.disabled = currentPage === 0;

    nextBtn.disabled = currentPage === pages.length - 1;

}

// =============================
// NEXT
// =============================

nextBtn.addEventListener("click", () => {

    showPage(currentPage + 1);

});

// =============================
// PREVIOUS
// =============================

prevBtn.addEventListener("click", () => {

    showPage(currentPage - 1);

});

// =============================
// KEYBOARD
// =============================

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowRight") {

        showPage(currentPage + 1);

    }

    if (e.key === "ArrowLeft") {

        showPage(currentPage - 1);

    }

});

// =============================
// MOBILE SWIPE
// =============================

let startX = 0;

let endX = 0;

brochure.addEventListener("touchstart", (e) => {

    startX = e.changedTouches[0].clientX;

});

brochure.addEventListener("touchend", (e) => {

    endX = e.changedTouches[0].clientX;

    if (startX - endX > 60) {

        showPage(currentPage + 1);

    }

    if (endX - startX > 60) {

        showPage(currentPage - 1);

    }

});

// =============================
// UPDATE CURRENT PAGE
// =============================

brochure.addEventListener("scroll", () => {

    currentPage = Math.round(
        brochure.scrollLeft / window.innerWidth
    );

    updateButtons();

});

// =============================
// RESIZE
// =============================

window.addEventListener("resize", () => {

    showPage(currentPage);

});

// =============================
// START
// =============================

showPage(0);

document.querySelectorAll(".item").forEach(card => {

    card.addEventListener("touchstart", () => {
        card.classList.add("active");
    });

    card.addEventListener("touchend", () => {
        setTimeout(() => {
            card.classList.remove("active");
        }, 200);
    });

});