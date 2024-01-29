// setTimeout -> setTimeout function methods calls a function once after a number of milliseconds.
// clearTimeout -> methods clears a timer set with setTimeout() method;

// to clear a timeout, use the id returned from the setTimeout function;

function showMessage() {
    document.getElementById("demo").innerHTML = "Welcome to my page..."
}

const myTimeout = setTimeout(showMessage, 3000);

function stopExecute() {
    clearTimeout(myTimeout);
}

const btn = document.querySelector("#btn");

btn.addEventListener("click", ()=>{
    stopExecute();
})