import './App.css'

function App() {

  function start() {
    let input = prompt("Type a number", '1');
    const number = Number(input);

    if (checkNumber(number)) {
      let randomNumber = getRandomInt(1, 5);

      let message = "";
      if (number === randomNumber) {
        message += "This is correct!\n";
      } else {
        message += "This is not correct!\n";
      }

      message += "Computer number: " + randomNumber + ", Your guess:" + number;

      alert(message);
    } else {
      alert("Please enter number of 1 - 5");
    }
  }

  function checkNumber(number: number) {
    return (number >= 1 && number <= 5) && !isNaN(number);
  }

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <>
      <h1>Guess the number between 1 and 5</h1>
      <button onClick={start}>- Start -</button>
    </>
  );
  
}

export default App
