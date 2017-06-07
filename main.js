// Here are the 100 most popular words in English, as totally
// stolen from here: https://gist.github.com/gravitymonkey/2406023
var commonWords = [
  "the","of","and","a","to","in","is","you","that","it","he",
  "was","for","on","are","as","with","his","they","I","at","be",
  "this","have","from","or","one","had","by","word","but","not",
  "what","all","were","we","when","your","can","said","there",
  "use","an","each","which","she","do","how","their","if","will",
  "up","other","about","out","many","then","them","these","so",
  "some","her","would","make","like","him","into","time","has",
  "look","two","more","write","go","see","number","no","way",
  "could","people","my","than","first","water","been","call",
  "who","oil","its","now","find","long","down","day","did","get",
  "come","made","may","part"
];

// Create a function that choses a random word from `commonWords` and returns it
var chooseRandomWord = function(array) {
  var randomWord;
  var index = Math.floor((Math.random() * array.length) - 0.1);
  randomWord = array[index];
  return randomWord;
}

var chosenWord = chooseRandomWord(commonWords).toLowerCase();
var counter = 10;
var triedCharacters = [];
var correctCharacters = [];
var splitWord = chosenWord.split('');
var victory = false;

// Create a function that accepts a single character argument
var checkForCharacter = function(character) {
  var wordChar = chosenWord.includes(character.toLowerCase()); // The function should check the `chosenWord` for that character
  if (triedCharacters.includes(character)) {
    console.log('Character already guessed');
  } else {
      if (counter <= 10 && counter > 0) { // The function should only be able to return true or false a certain number of times (the number stored in the `counter` variable)
        counter = counter - 1;
        triedCharacters.push(character); // The function should store and console.log every varter that has been passed to this function in the `triedCharacters` array
        console.log(counter + ' attempts remaining');
        console.log("Tried characters: " + triedCharacters);
        if (wordChar === true) {  // The function should return true if the character is in the given word
          correctCharacters.push(character);
          console.log("Correct characters : " + correctCharacters);
          victory = splitWord.every((item, i, arr) =>{return correctCharacters.includes(item);});
          if (victory === false) {
            return wordChar;
          } else {
            console.log('You win! ' + 'The word was "' + chosenWord + '"'); // If every character in `chosenWord` word has been passed to this function, console.log "you guessed it"
            console.log('---------');
            console.log('Starting new game');
            console.log('---------');
            chosenWord = chooseRandomWord(commonWords).toLowerCase();
            counter = 10;
            triedCharacters = [];
            correctCharacters = [];
            splitWord = chosenWord.split('');
            victory = false;
          }
        } else {
          return false; // The function should return false if the character is not in the given word
        }
      } else {
        console.log('You\'re out of attempts. Refresh the page to try again.');
      }
    }
  }
