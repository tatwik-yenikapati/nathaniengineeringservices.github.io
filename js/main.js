let slideIndices = {
    'fixtures-jigs': 1,
    'mold-design': 1,
    'plastic-components': 1
};

function plusSlides(n, slideId) {
    showSlides(slideIndices[slideId] += n, slideId);
}

function showSlides(n, slideId) {
    let slides = document.querySelectorAll(`#${slideId} .product img`);
    if (n > slides.length) { slideIndices[slideId] = 1 }
    if (n < 1) { slideIndices[slideId] = slides.length }
    
    slides.forEach((slide, index) => {
        slide.style.display = (index + 1 === slideIndices[slideId]) ? 'block' : 'none';
    });
}

document.addEventListener("DOMContentLoaded", () => {
    Object.keys(slideIndices).forEach(slideId => {
        showSlides(slideIndices[slideId], slideId);
    });
});
