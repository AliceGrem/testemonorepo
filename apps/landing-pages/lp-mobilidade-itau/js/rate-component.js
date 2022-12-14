const badButton = document.getElementById('botao-ruim');
const dislikeButton = document.getElementById('botao-nao-gostei');
const neutralButton = document.getElementById('botao-neutro');
const likeButton = document.getElementById('botao-gostei');
const loveButton = document.getElementById('botao-adorei');

const sendButton = document.getElementById('botao-enviar');

const rateSection = document.getElementById('rate-section');
const rateFeedbackMessage = document.getElementById('rate-feedback-message');

const rateButtons = [
  badButton,
  dislikeButton,
  neutralButton,
  likeButton,
  loveButton
];

const pushEvents = {
  'ruim': {
    'event': 'navigation_click',
    'location': 'landing-itau',
    'section': 'avalie a experiência',
    'text': 'enviar',
    'title': 'ruim'
  },
  'nao-gostei': {
    'event': 'navigation_click',
    'location': 'landing-itau',
    'section': 'avalie a experiência',
    'text': 'enviar',
    'title': 'não gostei'
  },
  'neutro': {
    'event': 'navigation_click',
    'location': 'landing-itau',
    'section': 'avalie a experiência',
    'text': 'enviar',
    'title': 'neutro'
  },
  'gostei': {
    'event': 'navigation_click',
    'location': 'landing-itau',
    'section': 'avalie a experiência',
    'text': 'enviar',
    'title': 'gostei'
  },
  'adorei': {
    'event': 'navigation_click',
    'location': 'landing-itau',
    'section': 'avalie a experiência',
    'text': 'enviar',
    'title': 'adorei'
  },
}

let selected = '';

rateButtons.forEach( rateButton => {
  rateButton.addEventListener('click', () => {
    const name = rateButton.getAttribute('data-name');
    selected = name;
    getSelectedImage();
    enableSendButton();
  });
});

function getSelectedImage() {
  rateButtons.forEach( rateButton => {
    const name = rateButton.getAttribute('data-name');
    const image = document.getElementById(`image-${name}`);
    const text = document.getElementById(`label-${name}`);
    if (selected === name){
      image.src = `images/icons/rate/${name}_selected.svg`;
      text.classList.remove('weight-regular');
      text.classList.add('weight-bold');
    } else {
      image.src = `images/icons/rate/${name}.svg`;
      text.classList.add('weight-regular');
      text.classList.remove('weight-bold');
    }
  });
}

function enableSendButton() {
  sendButton.classList.remove('bg-disabled');
  sendButton.classList.remove('text-disabled');
  sendButton.classList.add('bg-primary');
  sendButton.classList.add('text-highlight');
  sendButton.removeAttribute('disabled');
}

sendButton.addEventListener('click', () => {
  window.dataLayer.push(pushEvents[selected]);
  rateSection.classList.add('rate-section-hide')
  rateFeedbackMessage.classList.remove('rate-section-hide')
});
