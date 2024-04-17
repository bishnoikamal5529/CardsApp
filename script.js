let spadesArr = ['A','2','3','4','5','6','7','8','9','J','Q','K'];
let heartArr = ['A','2','3','4','5','6','7','8','9','J','Q','K'];
let diamondsArr = ['A','2','3','4','5','6','7','8','9','J','Q','K'];
let clubsArr = ['A','2','3','4','5','6','7','8','9','J','Q','K'];

// DOM ELEMETNS
const clubs = document.querySelector('.clubs');
const spades = document.querySelector('.spades');
const diamonds = document.querySelector('.diamonds');
const hearts = document.querySelector('.hearts');

/* Code For Clubs */

const clubCards = document.querySelector('.clubsCards');
const clubsChange = document.querySelectorAll('.clubsChange');

clubs.addEventListener('click', () => {
    clubCards.classList.toggle('displayNone');
});
clubsChange.forEach(element => {

    element.addEventListener('click', () => {
        let parElement = element.parentElement;
        parElement.classList.add('displayNone');
        let letterVal = parElement.textContent;
        letterVal = letterVal.charAt(0);
        clubsArr.forEach(element => {
            if(element == letterVal)
            {
                console.log("Value removed from array is:" + element);
                element = 0;
            }
        });
        
    })

});

/* Code For Spades */

const spadesCards = document.querySelector('.spadesCards');
const spadesChange = document.querySelectorAll('.spadesChange');

spades.addEventListener('click', () => {
    spadesCards.classList.toggle('displayNone');
});
spadesChange.forEach(element => {

    element.addEventListener('click', () => {
        let parElement = element.parentElement;
        parElement.classList.add('displayNone');
        let letterVal = parElement.textContent;
        letterVal = letterVal.charAt(0);

        spadesArr.forEach(element => {
            if(element == letterVal)
            {
                console.log("Value removed from array is:" + element);
                element = 0;
            }
        });
        
    })

});

/* Code For Diamonds */

const diamondsCards = document.querySelector('.diamondsCards');
const diamondsChange = document.querySelectorAll('.diamondsChange');

diamonds.addEventListener('click', () => {
    diamondsCards.classList.toggle('displayNone');
});
diamondsChange.forEach(element => {

    element.addEventListener('click', () => {
        let parElement = element.parentElement;
        parElement.classList.add('displayNone');
        let letterVal = parElement.textContent;
        letterVal = letterVal.charAt(0);

        diamondsArr.forEach(element => {
            if(element == letterVal)
            {
                console.log("Value removed from array is:" + element);
                element = 0;
            }
        });
        
    })

});


/* Code For Hearts */

const heartsCards = document.querySelector('.heartsCards');
const heartsChange = document.querySelectorAll('.heartsChange');

hearts.addEventListener('click', () => {
    heartsCards.classList.toggle('displayNone');
});
heartsChange.forEach(element => {

    element.addEventListener('click', () => {
        let parElement = element.parentElement;
        parElement.classList.add('displayNone');
        let letterVal = parElement.textContent;
        letterVal = letterVal.charAt(0);

        heartArr.forEach(element => {
            if(element == letterVal)
            {
                console.log("Value removed from array is:" + element);
                element = 0;
            }
        });
        
    })

});
