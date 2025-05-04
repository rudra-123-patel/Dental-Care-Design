document.addEventListener("DOMContentLoaded", () => {
  const follower = document.querySelector(".cursor-follower");
  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    currentX += (mouseX - currentX) * 0.2;
    currentY += (mouseY - currentY) * 0.2;

    follower.style.left = `${currentX}px`;
    follower.style.top = `${currentY}px`;

    requestAnimationFrame(animate);
  }

  animate();
});
const scrollProgress = document.getElementById("scroll-progress");
