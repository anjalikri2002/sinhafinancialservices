    function openModal() {
      document.getElementById("courseModal").style.display = "block";
    }
    function closeModal() {
      document.getElementById("courseModal").style.display = "none";
    }
    window.onclick = function(e) {
      if (e.target == document.getElementById("courseModal")) closeModal();
    };

   let currentIndex = 0;
const track = document.getElementById("sliderTrack");
const slides = document.querySelectorAll(".slider-img");

function updateSlider() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
}
