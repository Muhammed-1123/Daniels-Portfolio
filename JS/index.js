// Fixed navbar Custom
const homeSection = document.getElementById("home");
const stickyNav = document.getElementById("navbar");
const iconToggle = document.getElementById("icon-toggle");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        stickyNav.classList.add("position-absolute");
        stickyNav.classList.remove("navbarSticky", "position-fixed", "top-0", "animate__animated", "animate__slideInDown", "shadow", "bg-white");
        iconToggle.classList.remove("text-black");
        iconToggle.classList.add("text-white");
      } else {
        stickyNav.classList.add("navbarSticky", "position-fixed", "top-0", "animate__animated", "animate__slideInDown", "shadow", "bg-white", "text-black");
        stickyNav.classList.remove("position-absolute");
        iconToggle.classList.remove("text-white");
        iconToggle.classList.add("text-black");
      }
    });
  },
  {
    threshold: 0.1,
  }
);
observer.observe(homeSection);

// Progress Animation
const aboutSection = document.getElementById("about");
const progressElements = document.querySelectorAll(".progressAnimate");

const animate = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        progressElements.forEach((el) => {

          el.classList.add("animate__animated", "animate__fadeInLeft");
        });
        console.log("animate");
      } 
      
    });
  },
  {
    threshold:.6,
  }
);
animate.observe(aboutSection);



// Make the correct slide active when opening the modal 
const modal = document.getElementById('galleryModal');
        modal.addEventListener('show.bs.modal', function (event) {
            const triggerImg = event.relatedTarget;
            const slideTo = triggerImg.getAttribute('data-bs-slide-to');
            const carousel = modal.querySelector('#carouselGallery');

            const carouselInstance = bootstrap.Carousel.getInstance(carousel) || new bootstrap.Carousel(carousel);
            carouselInstance.to(parseInt(slideTo));
          });