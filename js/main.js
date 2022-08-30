document.addEventListener('DOMContentLoaded', () => {
  const easterEgg = document.querySelector('.easter-egg');
  setInterval(() => {
    easterEgg.classList.remove('closed');
    const audio = new Audio('../audio/toasty.mp3');
    audio.play();
    setTimeout(() => {
      easterEgg.classList.add('closed');
    }, 1300)
  }, 20000)
});
