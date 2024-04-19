let spadesArr = ['A','2','3','4','5','6','7','8','9','1','J','Q','K'];
let heartArr = ['A','2','3','4','5','6','7','8','9','1','J','Q','K'];
let diamondsArr = ['A','2','3','4','5','6','7','8','9','1','J','Q','K'];
let clubsArr = ['A','2','3','4','5','6','7','8','9','1','J','Q','K'];

// DOM ELEMETNS
const clubs = document.querySelector('.clubs');
const spades = document.querySelector('.spades');
const diamonds = document.querySelector('.diamonds');
const hearts = document.querySelector('.hearts');

const RemDiamonds = document.querySelector('.remDiamonds');
const RemSpades = document.querySelector('.remSpades');
const RemHearts = document.querySelector('.remHearts');
const RemClubs = document.querySelector('.remClubs');

const showRemBut = document.querySelector('.showRemaining');
const remainShow = document.querySelector('.remainingCards');
const updateSpades = document.querySelector('.remainSpades');
const updateHearts = document.querySelector('.remainHearts');
const updateClubs = document.querySelector('.remainClubs');
const updateDiamonds = document.querySelector('.remainDiamonds');

const riskSpade = document.querySelector('.riskSpade');
const riskHeart = document.querySelector('.riskHeart');
const riskClub = document.querySelector('.riskClub');
const riskDiamond = document.querySelector('.riskDiamond');

/* LAST RISK BUTTONS */
riskSpade.addEventListener('click', ()=>{
    riskSpade.classList.toggle('riskAfter');
});
riskHeart.addEventListener('click', ()=>{
    riskHeart.classList.toggle('riskAfter');
});
riskClub.addEventListener('click', ()=>{
    riskClub.classList.toggle('riskAfter');
});
riskDiamond.addEventListener('click', ()=>{
    riskDiamond.classList.toggle('riskAfter');
});



function calRemainingCards(arr){
    let count = 0;
    arr.forEach(element => {
        if(element != 0)
        {
            count++;
        }
    });
    return count;
}

function updateClubsFun()
{

    /* update clubs */
    let newText = '♣️:';
    clubsArr.forEach(element => {
        if(element == '1' && element != '0')
        {
            newText = newText.concat('10,');
        }else if(element != '0'){
            newText = newText.concat(element, ',');
        }
    });
    updateClubs.textContent = newText;

        /* update spades */


    newText = '♠️:';
    spadesArr.forEach(element => {
        if(element == '1' && element != '0')
        {
            newText = newText.concat('10,');
        }else if(element != '0'){
            newText = newText.concat(element, ',');
        }
    });
    updateSpades.textContent = newText;


        /* update hearts */
    
    newText = '♥️:';
    heartArr.forEach(element => {
        if(element == '1' && element != '0')
        {
            newText = newText.concat('10,');
        }else if(element != '0'){
            newText = newText.concat(element, ',');
        }
    });
    updateHearts.textContent = newText;


        /* update Diamonds */

    newText = '♦️:';
    diamondsArr.forEach(element => {
        if(element == '1' && element != '0')
        {
            newText = newText.concat('10,');
        }else if(element != '0'){
            newText = newText.concat(element, ',');
        }
    });
    updateDiamonds.textContent = newText;

}


/* Remaining Cards */
showRemBut.addEventListener('click' , () => {
    remainShow.classList.toggle('displayNone');
    updateClubsFun();
});

/* Code For Clubs */

const clubCards = document.querySelector('.clubsCards');
const clubsChange = document.querySelectorAll('.clubsChange');

clubs.addEventListener('click', () => {
    clubCards.classList.toggle('displayNone');
    updateClubsFun();

});

clubsChange.forEach(element => {

    element.addEventListener('click', () => {
        let parElement = element.parentElement;
        parElement.classList.toggle('clear');
        let letterVal = parElement.textContent;
        letterVal = letterVal.charAt(0);

        for(let i=0; i<clubsArr.length; i++)
        {
            if(clubsArr[i] == letterVal)
            {
                clubsArr[i] = 0;
            }
        }
        RemClubs.textContent = calRemainingCards(clubsArr);
        updateClubsFun();
    });

});

/* Code For Spades */

const spadesCards = document.querySelector('.spadesCards');
const spadesChange = document.querySelectorAll('.spadesChange');

spades.addEventListener('click', () => {
    spadesCards.classList.toggle('displayNone');
    updateClubsFun();

});

spadesChange.forEach(element => {

    element.addEventListener('click', () => {
        let parElement = element.parentElement;
        parElement.classList.toggle('clear');
        let letterVal = parElement.textContent;
        letterVal = letterVal.charAt(0);

        for(let i=0; i<spadesArr.length; i++)
        {
            if(spadesArr[i] == letterVal)
            {
                spadesArr[i] = 0;
            }
        }
        RemSpades.textContent = calRemainingCards(spadesArr);
        updateClubsFun();

    })


});

/* Code For Diamonds */

const diamondsCards = document.querySelector('.diamondsCards');
const diamondsChange = document.querySelectorAll('.diamondsChange');

diamonds.addEventListener('click', () => {
    diamondsCards.classList.toggle('displayNone');
    updateClubsFun();

});
diamondsChange.forEach(element => {

    element.addEventListener('click', () => {
        let parElement = element.parentElement;
        parElement.classList.toggle('clear');
        let letterVal = parElement.textContent;
        letterVal = letterVal.charAt(0);

        for(let i=0; i<diamondsArr.length; i++)
        {
            if(diamondsArr[i] == letterVal)
            {
                diamondsArr[i] = 0;
            }
        }
        RemDiamonds.textContent = calRemainingCards(diamondsArr);
        updateClubsFun();

    })

});


/* Code For Hearts */

const heartsCards = document.querySelector('.heartsCards');
const heartsChange = document.querySelectorAll('.heartsChange');

hearts.addEventListener('click', () => {
    heartsCards.classList.toggle('displayNone');
    updateClubsFun();

});
heartsChange.forEach(element => {

    element.addEventListener('click', () => {
        let parElement = element.parentElement;
        parElement.classList.toggle('clear');
        let letterVal = parElement.textContent;
        letterVal = letterVal.charAt(0);

        for(let i=0; i<heartArr.length; i++)
        {
            if(heartArr[i] == letterVal)
            {
                heartArr[i] = 0;
            }
        }
        RemHearts.textContent = calRemainingCards(heartArr);
        updateClubsFun();
    })
    

});
