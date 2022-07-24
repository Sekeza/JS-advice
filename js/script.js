 
// Select html element
const advice = document.querySelector("#message");
const btnAdvice = document.querySelector("#btn");


// Get data from an api
const getAdvice = async() => {
    const api = await fetch("https://api.adviceslip.com/advice");
    const data = await api.json();
    advice.textContent = data.slip.advice;
}


// Display data on the UI
btnAdvice.addEventListener("click", () => {
    getAdvice();
});