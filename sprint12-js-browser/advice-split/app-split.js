window.addEventListener('load', function () {
  const btnVoice = document.getElementById('voice-btn');
  const btnAdvice = document.getElementById('new-advice');
  btnAdvice.addEventListener('click', onbtnAdviceClick);
  btnVoice.addEventListener('click', onBtnVoiceClick);
});

const onbtnAdviceClick = () => {
  const btn = document.getElementById('new-advice');
  btn.disabled = true;
  setTimeout(() => {
    btn.disabled = false;
  }, 10000);

  console.log('Get a new advice...');

  const url = 'https://api.adviceslip.com/advice';

  fetch(url, { cache: 'no-store' })
    .then((response) => response.json())
    .then((data) => {
      console.log('Advice data:', data);

      const { id, advice } = data.slip;

      document.getElementById('advice-id').textContent = `Advice #${id}`;
      document.getElementById('advice-text').textContent = `"${advice}"`;

      speak(advice);
    })
    .catch((error) => {
      console.log('Error getting new advice:', error);
      document.getElementById('advice-text').textContent = 'Error getting new advice';
    });
};

const onBtnVoiceClick = () => {
  const text = document.getElementById('advice-text').textContent.trim();
  if (!text) return;

  speak(text);
};

const speak = (text) => {
  console.log(`Speaking advice: ${text}`);

  VoiceRSS.speech({
    key: 'a89820a18ad449b5a21a07de6dc66844',
    src: text,
    hl: 'en-us',
    v: 'Linda',
    r: 0,
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false,
  });
};
