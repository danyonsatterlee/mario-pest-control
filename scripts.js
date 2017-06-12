window.onload = function(e) {
  document.getElementById("goomba-total").innerHTML = 0;
  document.getElementById("bob-total").innerHTML = 0;
  document.getElementById("cheep-total").innerHTML = 0;
  document.getElementById("goomba-price-total").innerHTML = 0;
  document.getElementById("bob-price-total").innerHTML = 0;
  document.getElementById("cheep-price-total").innerHTML = 0;
}

var goombaCoins = 5;
var goombaTotal = 0;
var bobCoins = 7;
var cheepCoins = 11;
var bobTotal = 0;
var cheepTotal = 0;
var moneyGoomba = 0;
var moneyCheep = 0;
var moneyBob = 0;
var grandTotal;

var goomba = function() {
  goombaTotal++
  document.getElementById('pest-img-goob').classList.add('pulse');
  document.getElementById('goomba-total').innerHTML = goombaTotal;
  moneyGoomba = goombaTotal * goombaCoins;
  console.log(moneyGoomba);
  document.getElementById('goomba-price-total').innerHTML = moneyGoomba;
}
document.getElementById('goomba-go').addEventListener("mouseup", goomba);
document.getElementById('goomba-go').addEventListener("mousedown", function() {
  document.getElementById('pest-img-goob').classList.remove('pulse');
})


var bob = function() {
  bobTotal++
  document.getElementById('pest-img-bob').classList.add('pulse');
  document.getElementById('bob-total').innerHTML = bobTotal;
  moneyBob = bobTotal * bobCoins;
  document.getElementById('bob-price-total').innerHTML = moneyBob;
}
document.getElementById('bob-go').addEventListener("mouseup", bob);
document.getElementById('bob-go').addEventListener("mousedown", function() {
  document.getElementById('pest-img-bob').classList.remove('pulse');
})

var cheep = function() {
  cheepTotal++
  document.getElementById('pest-img-cheep').classList.add('pulse');
  document.getElementById('cheep-total').innerHTML = cheepTotal;
  moneyCheep = cheepTotal * cheepCoins;
  document.getElementById('cheep-price-total').innerHTML = moneyCheep;
}
document.getElementById('cheep-go').addEventListener("mouseup", cheep);
document.getElementById('cheep-go').addEventListener("mousedown", function() {
  document.getElementById('pest-img-cheep').classList.remove('pulse');
})



//
var total = document.getElementsByClassName('go');
for (var i = 0; i < total.length; i++) {
  total[i].addEventListener("click", function() {
    document.getElementById('grand-total').innerHTML = Number.parseInt(moneyGoomba + moneyBob + moneyCheep);
  })
};




var total = document.getElementsByClassName('go');
for (var i = 0; i < total.length; i++) {
  total[i].addEventListener("click", function() {
    document.getElementById('grand-total').innerHTML = Number.parseInt(moneyGoomba + moneyBob + moneyCheep);
  })
};


document.getElementById("reset").addEventListener("click", function() {
  document.getElementById("cheep-total").innerHTML = (cheepTotal = 0);
  document.getElementById("cheep-price-total").innerHTML = (moneyCheep = 0);
  document.getElementById("bob-total").innerHTML = (bobTotal = 0);
  document.getElementById("bob-price-total").innerHTML = (moneyBob = 0);
  document.getElementById("goomba-total").innerHTML = (goombaTotal = 0);
  document.getElementById("goomba-price-total").innerHTML = (moneyBob = 0);
  document.getElementById("grand-total").innerHTML = (grandTotal = 0);
});
