const words = ['школа', 'лікарня',  'ноутбук', 'листя', 'дерево', 'троянда', 'телефон', 'країна', 'слово', 'коментар', 'рюкзак'];
const randomWord = words[Math.floor(Math.random() * words.length)];
let answerArr = [];

for (let i = 0; i < randomWord.length; i++) {
    answerArr[i] = '_'
};

let remainingLetter = randomWord.length;
let guesses = 15;

while (remainingLetter > 0 && guesses > 0) {
    alert(answerArr.join(' ') + '     Натисніть "Ок" щоб продовжити'); // показує скільки букв потрібно вгадати
    
    const guess = prompt('Вгадайте букву або натисніть "Скасувати" для виходу зі гри. Залишилось спроб: ' + guesses);
    const guessLowerCase = guess.toLowerCase();
    
    
    if (guessLowerCase === null) {
        break;
    } else if(guessLowerCase.length !== 1) {
        prompt('Введіть лише одну букву')
    } else {
        for (let a = 0; a < randomWord.length; a++) {
            if (randomWord[a] === guessLowerCase && answerArr[a] === '_') {
                answerArr[a] = guessLowerCase;
                remainingLetter--;
                guesses--
            }
        }
    }
}
if (guesses > 0 ) {
    alert('Ви виграли! Загадане слово - ' + randomWord);
} else {
    alert('Спроби закінчились. Ви програли')
}