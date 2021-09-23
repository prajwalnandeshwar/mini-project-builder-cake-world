/*Fill your code */
var cakeLayers = {
  Chocolate: 300,
  Strawberry: 100,
  Butterscotch: 200,
  Vanilla: 250,
  Redvelvet: 350,
}
var state = {
  Chocolate: false,
  Strawberry: false,
  Butterscotch: false,
  Vanilla: false,
  Redvelvet: false
}
function renderAll() {
  renderChocolate()
  renderStrawberry()
  renderButterscotch()
  renderVanilla()
  renderRedvelvet()
  renderButtons()
  renderCakeLayersBoard()
  renderPrice()
  renderCandle()
}

//Setup event listener for the Chocolate button
document.querySelector('.btn-choc').onclick = function () {
  state.Chocolate = !state.Chocolate
  console.log(state.Chocolate)
  renderAll()
}

// Trial 2 - Setup event listener for the Strawberry button
document.querySelector('.btn-strawberry').onclick = function () {
  state.Strawberry = !state.Strawberry
  renderAll()
}

// Trial 2 - Setup event listener for the Butterscotch button
document.querySelector('.btn-butterscotch').onclick = function () {
  state.Butterscotch = !state.Butterscotch
  renderAll()
}

// Trial 2 - Setup event listener for the Vanilla button
document.querySelector('.btn-vanilla').onclick = function () {
  state.Vanilla = !state.Vanilla
  renderAll()
}
// Trial 2 - Setup event listener for the lettuce button
document.querySelector('.btn-redvelvet').onclick = function () {
  state.Redvelvet = !state.Redvelvet
  renderAll()
}

function renderChocolate() {
  let choco = document.querySelector('#layer1')
  //you can also use getElementById
  if (state.Chocolate) {
    choco.style.visibility = 'inherit'
  } else {
    choco.style.visibility = 'hidden'
  }
}
function renderStrawberry() {
  let strawberry = document.querySelector('#layer2')
  //you can also use getElementById
  if (state.Strawberry) {
    strawberry.style.visibility = 'inherit'
  } else {
    strawberry.style.visibility = 'hidden'
  }
}
function renderButterscotch() {
  let butterscotch = document.querySelector('#layer3')
  if (state.Butterscotch) {
    butterscotch.style.visibility = 'inherit'
  } else {
    butterscotch.style.visibility = 'hidden'
  }
}

function renderVanilla() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let vanilla = document.querySelector('#layer4')
  if (state.Vanilla) {
    vanilla.style.visibility = 'inherit'
  } else {
    vanilla.style.visibility = 'hidden'
  }
}

function renderRedvelvet() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let redvelvet = document.querySelector('#layer5')
  if (state.Redvelvet) {
    redvelvet.style.visibility = 'inherit'
  } else {
    redvelvet.style.visibility = 'hidden'
  }
}
function renderButtons() {
  let btnChoco = document.querySelector('.btn-choc')
  let btnStrawberry = document.querySelector('.btn-strawberry')
  let btnButterscotch = document.querySelector('.btn-butterscotch')
  let btnVanilla = document.querySelector('.btn-vanilla')
  let btnRedvelvet = document.querySelector('.btn-redvelvet')
  if (state.Chocolate) btnChoco.classList.add('active')
  else btnChoco.classList.remove('active')
  if (state.Strawberry) btnStrawberry.classList.add('active')
  else btnStrawberry.classList.remove('active')
  if (state.Butterscotch) btnButterscotch.classList.add('active')
  else btnButterscotch.classList.remove('active')
  if (state.Vanilla) btnVanilla.classList.add('active')
  else btnVanilla.classList.remove('active')
  if (state.Redvelvet) btnRedvelvet.classList.add('active')
  else btnRedvelvet.classList.remove('active')
}

function renderCakeLayersBoard() {
  if (state.Chocolate)
    document.getElementsByClassName('items')[0].style.visibility = 'visible'
  else document.getElementsByClassName('items')[0].style.visibility = 'hidden'
  if (state.Strawberry)
    document.getElementsByClassName('items')[1].style.visibility = 'visible'
  else document.getElementsByClassName('items')[1].style.visibility = 'hidden'
  if (state.Butterscotch)
    document.getElementsByClassName('items')[2].style.visibility = 'visible'
  else document.getElementsByClassName('items')[2].style.visibility = 'hidden'
  if (state.Vanilla)
    document.getElementsByClassName('items')[3].style.visibility = 'visible'
  else document.getElementsByClassName('items')[3].style.visibility = 'hidden'
  if (state.Redvelvet)
    document.getElementsByClassName('items')[4].style.visibility = 'visible'
  else document.getElementsByClassName('items')[4].style.visibility = 'hidden'
  
}

function renderPrice() {
  var total = 0
  if (state.Chocolate) total = total + cakeLayers.Chocolate
  if (state.Strawberry) total = total + cakeLayers.Strawberry
  if (state.Butterscotch) total = total + cakeLayers.Butterscotch
  if (state.Vanilla) total = total + cakeLayers.Vanilla
  if (state.Redvelvet) total = total + cakeLayers.Redvelvet
  document.getElementById('total').innerHTML = 'Total-----------' + total
}
function renderCandle() {
  let candles = document.getElementById('candle')
  candles.style.visibility = 'visible'
//   if (
//     state.Chocolate &&
//     state.Strawberry &&
//     state.Butterscotch &&
//     state.Vanilla &&
//     state.Redvelvet
//   ) {
//     candles.style.visibility = 'inherit'
//   } else {
//     candles.style.visibility = 'hidden'
//   }
}
// function buy() {
//     let candles = document.getElementById('candle')
//     candles.style.visibility = 'visible'
// }
