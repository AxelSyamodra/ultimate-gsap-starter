import gsap from "gsap";

const container = document.querySelector(".flex-center");
const toasts = container.querySelectorAll(".toast");

// ES6 function
const showToastLoop = () => {
  toasts.forEach((toast, index) => {
    gsap.to(toast, {
      y: -120,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      easing: "power4.out",
      delay: index * 3,
      onComplete: () => {
        gsap.to(toast, {
          delay: 1.5,
          y: 0,
          opacity: 0,
          scale: 0.95,
          duration: 0.7,
          ease: "power2.in",
          onComplete: () => {
            setTimeout(showToastLoop, 5000);
          },
        });
      },
    });
  });
};

showToastLoop();
