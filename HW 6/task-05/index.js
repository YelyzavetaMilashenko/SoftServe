// task-05
const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
  const animValue = circle.getAttribute('data-anim');
  circle.classList.add(animValue);
});

circles.forEach(circle => {
  const animValue = circle.getAttribute('data-anim');
  const hasAnimation = circle.classList.contains(animValue);
  console.log(`Element with data-anim="${animValue}" has animation: ${hasAnimation}`);
});