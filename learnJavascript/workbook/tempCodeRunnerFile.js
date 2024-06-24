let counter = 1;

const printMessage = function (){
  console.log("You can see on the console" + counter + "sec");
  counter++;
};

let intervalId = setInterval(printMessage, 1000);
