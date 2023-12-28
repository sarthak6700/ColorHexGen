const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const clrhex = document.getElementById("clrhex");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    let hexcode = "#";
    for(i = 0; i < 6; i++){
        hexcode += hex[getRandomNumber()];
    }

    clrhex.textContent = hexcode;
    clrhex.style.color = hexcode;
    document.body.style.backgroundColor = hexcode;
});

getRandomNumber = () =>{
    return Math.floor(Math.random()*hex.length);
};