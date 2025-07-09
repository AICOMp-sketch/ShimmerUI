document.addEventListener('mousemove', (e) => {
    const backgroundAnimation = document.querySelector('.background-animation');
    const x = (e.clientX / window.innerWidth) * 50 - 25; // -25 to 25
    const y = (e.clientY / window.innerHeight) * 50 - 25; // -25 to 25

    backgroundAnimation.style.transform = `translate(${-x * 0.5}px, ${-y * 0.5}px)`; // Slower movement for background
});