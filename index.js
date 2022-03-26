const btnGenerate = document.getElementById("btnGenerate");
const resultName = document.getElementById("resultName");
btnGenerate.addEventListener("click", (e) => {
    e.defaultPrevented;
    randomValue = Math.floor(Math.random() * 2);
    if (randomValue === 0) {
        resultName.innerHTML = 'M';
    } else {
        resultName.innerHTML = 'J';
    }
});