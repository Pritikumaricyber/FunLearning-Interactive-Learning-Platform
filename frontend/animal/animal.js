const ANIMALS = [
  { id:'cow', name:'Cow', emoji:'🐮', kind:'farm', soundText:'moo', fact:'Cows chew for up to 8 hours a day.' },
  { id:'sheep', name:'Sheep', emoji:'🐑', kind:'farm', soundText:'baa', fact:'Sheep know the faces of other sheep and people!' },
  { id:'goat', name:'Goat', emoji:'🐐', kind:'farm', soundText:'bleat', fact:'Goats have rectangular pupils!' },
  { id:'horse', name:'Horse', emoji:'🐴', kind:'farm', soundText:'neigh', fact:'Horses can sleep both lying down and standing up.' },

  { id:'lion', name:'Lion', emoji:'🦁', kind:'wild', soundText:'roar', fact:'A lion’s roar can be heard from 8 km away!' },
  { id:'elephant', name:'Elephant', emoji:'🐘', kind:'wild', soundText:'trumpet', fact:'Elephants use their trunks to drink and hug!' },
  { id:'tiger', name:'Tiger', emoji:'🐅', kind:'wild', soundText:'growl', fact:'Tigers have unique stripe patterns like fingerprints.' },
  { id:'monkey', name:'Monkey', emoji:'🐒', kind:'wild', soundText:'chatter', fact:'Monkeys use facial expressions to communicate.' },

  { id:'chicken', name:'Chicken', emoji:'🐔', kind:'bird', soundText:'cluck', fact:'Chickens talk to their chicks before they hatch!' },
  { id:'duck', name:'Duck', emoji:'🦆', kind:'bird', soundText:'quack', fact:'Ducks have waterproof feathers.' },
  { id:'parrot', name:'Parrot', emoji:'🦜', kind:'bird', soundText:'squawk', fact:'Parrots can mimic human speech.' },
  { id:'owl', name:'Owl', emoji:'🦉', kind:'bird', soundText:'hoot', fact:'Owls can rotate their heads up to 270 degrees.' },

  { id:'whale', name:'Whale', emoji:'🐋', kind:'water', soundText:'sing', fact:'Blue whales are the largest animals ever to live.' },
  { id:'dolphin', name:'Dolphin', emoji:'🐬', kind:'water', soundText:'click', fact:'Dolphins talk using clicks and whistles.' },
  { id:'fish', name:'Fish', emoji:'🐟', kind:'water', soundText:'blub', fact:'Some fish can recognize themselves in a mirror.' },
  { id:'octopus', name:'Octopus', emoji:'🐙', kind:'water', soundText:'squirt', fact:'Octopuses have three hearts.' }
];

const speak = (text)=>{
  if (!('speechSynthesis' in window)) return;
  const msg = new SpeechSynthesisUtterance(text);
  msg.rate = 1; 
  msg.pitch = 1; 
  msg.lang = navigator.language || 'en-US';
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(msg);
};

const elSections = document.getElementById('sections');
const elAnimalPage = document.getElementById('animalPage');
const elAnimalGrid = document.getElementById('animalGrid');

document.querySelectorAll('.section').forEach(sec=>{
  sec.addEventListener('click', ()=>{
    showAnimals(sec.dataset.kind);
  });
});

function showAnimals(kind){
  elSections.style.display = 'none';
  elAnimalPage.style.display = 'block';
  renderAnimals(kind);
}

function showSections(){
  elSections.style.display = 'flex';
  elAnimalPage.style.display = 'none';
}

function renderAnimals(kind){
  elAnimalGrid.innerHTML = '';
  ANIMALS.filter(a=>a.kind===kind).forEach(a=>{
    const card = document.createElement('div');
    card.className = 'card';

    const emoji = document.createElement('div');
    emoji.className = 'emoji-big';
    emoji.textContent = a.emoji;

    const name = document.createElement('div');
    name.className = 'name';
    name.textContent = a.name;

    const fact = document.createElement('div');
    fact.className = 'fact';
    fact.textContent = a.fact;

    const row = document.createElement('div');
    row.className = 'row';

    const btnName = document.createElement('button');
    btnName.className = 'btn';
    btnName.textContent = '🔊 Name';
    btnName.addEventListener('click', ()=>speak(a.name));

    const btnSound = document.createElement('button');
    btnSound.className = 'btn';
    btnSound.textContent = '🎵 Sound';
    btnSound.addEventListener('click', ()=>speak(`${a.name} goes ${a.soundText}`));

    const btnFact = document.createElement('button');
    btnFact.className = 'btn';
    btnFact.textContent = '💡 Fact';
    btnFact.addEventListener('click', ()=>speak(a.fact));

    row.append(btnName, btnSound, btnFact);
    card.append(emoji, name, fact, row);
    elAnimalGrid.appendChild(card);
  });
}
