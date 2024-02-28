function generateColor() {
    const generatedColor = [];
    generatedColor[0] = "#";
    generatedColor[1] = "f";
    generatedColor[2] = "f";
    generatedColor[3] = "f";
    generatedColor[4] = "f";
    generatedColor[5] = "f";
    generatedColor[6] = "f";
    for ( let i=1; i <=6; i++) {
        generatedColor[i] = Math.floor(Math.random() * 9);
    }
    console.log(generatedColor);

    const hex = document.getElementById("hex-value");
    hex.innerText = generatedColor.join("");

    const body = document.getElementById("body");
    body.style.backgroundColor = generatedColor.join("");
}

generateColor();
