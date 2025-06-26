function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = 'block';
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = 'none';
}

window.onclick = function(event) {
  const imageModal = document.getElementById('imageModal');
  if (event.target === imageModal) {
    closeModal('imageModal');
  }
};




  // Gallery Slider
  let currentIndex = 0;
  const track = document.getElementById("sliderTrack");
  const slides = document.querySelectorAll(".slider-img");

  function updateSlider() {
    if (track) {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  }

