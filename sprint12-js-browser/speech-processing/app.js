// window.addEventListener (load) pentru a fi accesat doar cand toate asseturile sunt incarcate
window.addEventListener('load', function () {
  document.getElementById('btn-speak').addEventListener('click', onBtnSpeakClick);
  document.getElementById('speak-text').addEventListener('input', onSpeakTextInput);
  document.getElementById('btn-tell-a-joke').addEventListener('click', onBtnTellAJokeClick);
  checkSpeakButtonStatus();
});

const onBtnSpeakClick = () => {
  const speakTextEl = document.getElementById('speak-text');
  const txt = speakTextEl.value;

  speak(txt);

  // speakTextEl.value = '';
  checkSpeakButtonStatus();
};

const onBtnTellAJokeClick = () => {
  console.log('tell a joke clicked');

  const url = 'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Spooky,Christmas?blacklistFlags=religious,racist,sexist';

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const jokeText = getTextFromJoke(data);

      document.getElementById('speak-text').value = jokeText;

      checkSpeakButtonStatus();
    });
};

const getTextFromJoke = (data) => {
  if (data.type === 'twopart') {
    return `${data.setup}\n---------------------\n${data.delivery}`;
  }

  if (data.type === 'single') {
    return data.joke;
  }

  throw 'Unknown data type: ' + data.type;
};

const onSpeakTextInput = () => {
  checkSpeakButtonStatus();
};

const checkSpeakButtonStatus = () => {
  const txt = document.getElementById('speak-text').value;
  const btn = document.getElementById('btn-speak');

  if (txt === '') {
    btn.setAttribute('disabled', '1');
  } else {
    btn.removeAttribute('disabled');
  }
};

const speak = (text) => {
  console.log(`Speaking: ${text}`);

  VoiceRSS.speech({
    key: '52bfbd75e1c24955831329926a53c5ed',
    src: text,
    hl: 'en-us',
    v: 'Linda',
    r: 0,
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false,
  });
};
