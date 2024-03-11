const myFriendsNames = ['Lena', 'Sasha', 'Sergie', 'Danya'];
const greetingString = 'Hi my dear ';
const numberArray = [2, 3, 4, 5, 6, 7, 8, 9];
const iceCreamFlavors = ['Vanilla', 'Strawberry', 'Chocolate', 'Mint']

//UI logic

function greetingMyFriend() {
  document.querySelector("div#result").innerHTML = "";
  myFriendsNames.forEach(function (myFriendName) {
    const p = document.createElement("p");
    p.append(greetingString + myFriendName + '!');
    document.querySelector("div#result").append(p);
  });
}

function multiplyNumbers() {
  document.querySelector("div#result").innerHTML = "";
  let multiply = 1;
  numberArray.forEach(function (number) {
    const p = document.createElement("p");
    multiply *= number;
    p.append(multiply);
    document.querySelector("div#result").append(p);
  });
}

function handleIceCream() {
  document.querySelector("div#result").innerHTML = "";
  iceCreamFlavors.forEach(function (iceCreamFlavor) {
    const p = document.createElement("p");
    p.append('My favorite IceCream is ' + iceCreamFlavor + '!');
    document.querySelector("div#result").append(p);
  });
}

window.addEventListener("load", function () {
  document.querySelector("button#task1").addEventListener("click", greetingMyFriend);
  document.querySelector("button#task2").addEventListener("click", multiplyNumbers);
  document.querySelector("button#task3").addEventListener("click", handleIceCream);
});