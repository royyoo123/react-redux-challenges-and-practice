function occurrences(text, word) {
  const splitText = text.split("");
  let counter = 0;
  let newWord = "";
  splitText.forEach((letter) => {
  	if(letter !== " "){
  		newWord += letter;
  	} else {
  		if(newWord.toUpperCase() === word.toUpperCase()){
  			counter++;
  		} else {
  			newWord = "";
  		}
  	}
  })
  return counter;
}

module.exports = occurrences;
