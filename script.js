let cards = document.querySelectorAll('.memory-card')

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let h1 = document.querySelector('h1')
let video = document.querySelector('#videoBG1')

function shuffle(){
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  })
}

h1.addEventListener('click',function(e){
  if(e.target.tagName === 'H1'){
    e.target.parentElement.remove();
    video.remove()
  }
})

function flipCard(){
  if(lockBoard) return;
  if(this === firstCard) return;
  this.classList.toggle('flip')

if(!hasFlippedCard){
  // first click
  hasFlippedCard = true;
  firstCard = this
  }
  else{ //second click
    hasFlippedCard = false;
    secondCard = this;

    //cards match 
    if(firstCard.dataset.framework === secondCard.dataset.framework){
      firstCard.removeEventListener('click',flipCard)
      secondCard.removeEventListener('click',flipCard)

      resetBoard();
    }
    else{
      lockBoard = true;
      setTimeout(() => {
      firstCard.classList.remove('flip')
      secondCard.classList.remove('flip');

      lockBoard = false;
      }, 600)
    }
  }
}

function resetBoard(){
  [hasFlippedCard, lockBoard] = [false, false]
  [hasFlippedCard, secondCard] = [null, null]
}

(function shuffle(){
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12)
    card.style.order = randomPos;
  })
})();

cards.forEach(card => card.addEventListener('click', flipCard))