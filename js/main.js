document.addEventListener('DOMContentLoaded', () => {
  const easterEgg = document.querySelector('.easter-egg');
  setInterval(() => {
    easterEgg.classList.remove('closed');
    const audio = new Audio('https://github.com/omirandaleo/ogrobo/blob/main/audio/toasty.mp3?raw=true');
    audio.play();
    setTimeout(() => {
      easterEgg.classList.add('closed');
    }, 1300)
  }, 20000)
});
