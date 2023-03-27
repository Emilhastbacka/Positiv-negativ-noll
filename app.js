document.getElementById("knapp").addEventListener("click", handleClick)
var element = document.getElementById("myElement");
function handleClick() {
    const number = document.getElementById("yes").value
    console.log(number);
    if (number > 0) {
        console.log("talet är positivt");
        element.innerText = "Talet är positivt"
        element.classList.add("positiv")
    }
    else if (number < 0) {
        console.log("Talet är negativt");
        element.innerText = "Talet är negativt"
        element.classList.add("negativ")
    }
    else if (number == 0) {
        console.log("Talet är noll");
        element.innerText = "Talet är noll"
        element.classList.add("noll")
    }
}