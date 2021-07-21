export default function capitalize(sentence) {
  let wordArr = sentence.split(' ');
  let capitalizedText = '';
  for (let word of wordArr) {
    let capitalizedWord =
      word[0].toUpperCase() + word.substring(1).toLowerCase() + ' ';
    capitalizedText += capitalizedWord;
  }
  return capitalizedText.trim();
}
