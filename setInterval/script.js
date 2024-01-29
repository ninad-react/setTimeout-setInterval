// setInterval -> is a method which runs repeatedly at given interval of time.
// clearInterval -> is a method to clear setInterval method.

function moveBar() {

    const element = document.getElementById("myBar");
    let width = 0;

    const id = setInterval(frame, 10);

    function frame() {

        if(width == 100){
            clearInterval(id);
        }else{
            width++;
            element.style.width = width + '%';
        }
    }
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    moveBar();
})