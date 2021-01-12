const sentence = "hello there from lighthouse labs";
let timeoutTime = 0;
for (let x = 0; x < sentence.length; x++) {
  if(x === sentence.length - 1){
    setTimeout(() => {
      process.stdout.write(sentence[x] + "\n");
    }, timeoutTime)
  } else {
    setTimeout(() => {
      process.stdout.write(sentence[x]);
    }, timeoutTime)
  }
  timeoutTime += 50;
}