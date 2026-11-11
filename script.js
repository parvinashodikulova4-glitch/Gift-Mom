const openButton = document.getElementById('openEnvelope');
const envelope = document.getElementById('envelope');
const intro = document.getElementById('intro');
const letterSection = document.getElementById('letterSection');
const surpriseSection = document.getElementById('surpriseSection');
const showSurprise = document.getElementById('showSurprise');
const readAgain = document.getElementById('readAgain');

openButton.addEventListener('click', () => {
  if (envelope.classList.contains('open')) return;
  envelope.classList.add('open');
  document.getElementById('tapHint').textContent = 'A little letter, written just for you…';
  setTimeout(() => {
    intro.classList.add('hidden');
    letterSection.classList.remove('hidden');
    letterSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 1050);
});

showSurprise.addEventListener('click', () => {
  letterSection.classList.add('hidden');
  surpriseSection.classList.remove('hidden');
  makeHearts();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

readAgain.addEventListener('click', () => {
  surpriseSection.classList.add('hidden');
  intro.classList.remove('hidden');
  envelope.classList.remove('open');
  document.getElementById('tapHint').textContent = 'Tap the seal to open your letter';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function makeHearts() {
  const container = document.querySelector('.floating-hearts');
  container.innerHTML = '';
  for (let i = 0; i < 24; i++) {
    const heart = document.createElement('span');
    heart.className = 'heart';
    heart.textContent = ['♡', '♥', '✧'][i % 3];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${14 + Math.random() * 20}px`;
    heart.style.animationDuration = `${5 + Math.random() * 6}s`;
    heart.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(heart);
  }
}
