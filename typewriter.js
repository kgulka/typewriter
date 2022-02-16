
const sentence1 = "Hello there from lighthouse labs";
const typewriterEffect = function(phrase) {
  const sentence = phrase + '\n';
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, i * 50);
  }
  //process.stdout.write('\n');
};

typewriterEffect(sentence1);
