// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here


function Fruits(name, color, pricePerKg) {
    this.name = name;
    this.color = color;
    this.pricePerKg = pricePerKg;
  }

  var fruit1 = new Fruits("Orange", "orange", "50");
  var fruit2 = new Fruits("Apple", "red", "90");
  var fruit3 = new Fruits("Grapes", "green", "70");
  var fruit4 = new Fruits("Pineapple", "brown", "50");
  var fruit5 = new Fruits("Mango", "yellow", "40");
  var fruit6 = new Fruits("Guava","green", "30");

//list of fruits with their properties (name, color, pricePerKg)
  let fruits = [fruit1,fruit2,fruit3,fruit4,fruit5,fruit6];



  function findTheFruitUsingName(nameGiven){
   return fruits.filter(x => x.name === nameGiven).map(x => x.name);
  }
 

//examples
console.log("Name is"+findTheFruitUsingName(Apple).color );
console.log("Price is"+findTheFruitUsingName(Apple).pricePerKg );