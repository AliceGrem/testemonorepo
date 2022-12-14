const bottomsheetBackButton = document.getElementById('bottomsheet-voltar');
const bottomsheet = document.getElementById('feedback-bottomsheet');
const bottomsheetContainer = document.getElementById('feedback-bottomsheet-container');
const bottomsheetDraggableArea = document.getElementById('feedback-bottomsheet-draggable-area');

const consortiumButton = document.getElementById('botao-consorcio');
const transportCardButton = document.getElementById('botao-cartao-transporte');
const ipvaButton = document.getElementById('botao-ipva');
const newCarButton = document.getElementById('botao-carro-novo');
const maintenanceButton = document.getElementById('botao-manutencao');
const creditButton = document.getElementById('botao-credito');
const documentsButton = document.getElementById('botao-documentos');
const addVehicleButton = document.getElementById('botao-cadastrar-veiculo');

let originalBottomsheetHeight;
let bottomsheetHeightToSet;
let dragPosition;

const MINIMUM_BOTTONSHEET_TRANSITION_DELAY_IN_MILISECONDS = 1;
const OUT_BOTTONSHEET_TRANSITION_DELAY_IN_MILISECONDS = 200; //0.2s do css
const MINIMUM_BOTTOMSHEET_HEIGHT_TO_CLOSE = 350; //in px

const comeInButtons = [
  consortiumButton,
  transportCardButton,
  ipvaButton,
  newCarButton,
  maintenanceButton,
  creditButton,
  documentsButton,
  addVehicleButton
];

comeInButtons.forEach( botao => {
  botao.addEventListener('click', () => {
    bottomsheet.classList.remove('hide-feedback-bottomsheet');
    setTimeout( () => {
      bottomsheetContainer.classList.add('active');
      document.body.style.overflow = 'hidden';
    }, MINIMUM_BOTTONSHEET_TRANSITION_DELAY_IN_MILISECONDS);
  });
});

const resetBottomsheetProperties = () => {
    bottomsheetContainer.style.height = 'auto';
    bottomsheetHeightToSet = originalBottomsheetHeight;
    bottomsheetDraggableArea.style.cursor = "auto";
    dragPosition = undefined;
}

const closeBottomsheet = () => {
  bottomsheetContainer.classList.remove('active');
  setTimeout( () => {
    bottomsheet.classList.add('hide-feedback-bottomsheet');
    document.body.style.overflow = 'auto';
    resetBottomsheetProperties();
  }, OUT_BOTTONSHEET_TRANSITION_DELAY_IN_MILISECONDS);
}

bottomsheetBackButton.addEventListener('click', () => {
  closeBottomsheet();
});

const touchPosition = (event) => event.touches ? event.touches[0] : event;

const onDragStart = (event) => {
  originalBottomsheetHeight= bottomsheetContainer.offsetHeight;
  dragPosition = touchPosition(event).pageY;
  bottomsheetDraggableArea.style.cursor = "grabbing";
}

const onDragMove = (event) => {
  if (!dragPosition) return;
  const y = touchPosition(event).pageY;
  const deltaY = dragPosition - y;

  const isNegativeVariation = deltaY < 0;

  if (isNegativeVariation) {
    bottomsheetHeightToSet = originalBottomsheetHeight + deltaY;
    bottomsheetContainer.style.height = `${bottomsheetHeightToSet}px`;
  }
}

const onDragEnd = () => {
  if (bottomsheetHeightToSet < MINIMUM_BOTTOMSHEET_HEIGHT_TO_CLOSE) {
    return closeBottomsheet();
  }

  return resetBottomsheetProperties();
}

// Desktop events
bottomsheetDraggableArea.addEventListener("mousedown", onDragStart);
window.addEventListener("mousemove", onDragMove);
window.addEventListener("mouseup", onDragEnd);

// Webmobile events
bottomsheetDraggableArea.addEventListener("touchstart", onDragStart);
window.addEventListener("touchmove", onDragMove);
window.addEventListener("touchend", onDragEnd);
