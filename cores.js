var cor_red, cor_green, cor_blue, cor_pick, cor_fundo;

window.onload = function() {
    if (localStorage.getItem("cor_fundo")) {
        document.body.style.backgroundColor = localStorage.getItem("cor_fundo");
    }

    var redInput = document.getElementById("red");
    var greenInput = document.getElementById("green");
    var blueInput = document.getElementById("blue");
    var colorInput = document.getElementById("ccolor");

    if (redInput && greenInput && blueInput && colorInput) {
        cor_red = redInput.value;
        document.getElementById("tred").value = cor_red;
        cor_green = greenInput.value;
        document.getElementById("tgreen").value = cor_green;
        cor_blue = blueInput.value;
        document.getElementById("tblue").value = cor_blue;
        cor_pick = colorInput.value;
        document.getElementById("tpick").value = cor_pick;
    }
}

function SetColorRed() {
    cor_red = document.getElementById("red").value;
    document.getElementById("tred").value = cor_red;
    AtualizarCorFundo();
}

function SetColorGreen() {
    cor_green = document.getElementById("green").value;
    document.getElementById("tgreen").value = cor_green;
    AtualizarCorFundo();
}

function SetColorBlue() {
    cor_blue = document.getElementById("blue").value;
    document.getElementById("tblue").value = cor_blue;
    AtualizarCorFundo();
}

function SetColorPick() {
    cor_pick = document.getElementById("ccolor").value;
    document.getElementById("tpick").value = cor_pick;
    AtualizarCorFundo();
}

function AtualizarCorFundo() {
    cor_fundo = 'rgb(' + cor_red + ',' + cor_green + ',' + cor_blue + ')';
    document.body.style.backgroundColor = cor_fundo;
    localStorage.setItem("cor_fundo", cor_fundo);
}

function SetColorBackground() {
    var sistemaRGB = document.getElementById("rrgb").checked;
    var sistemaHexa = document.getElementById("rhex").checked;
    if (sistemaRGB) {
        AtualizarCorFundo();
    } else if (sistemaHexa) {
        cor_fundo = cor_pick;
        document.body.style.backgroundColor = cor_fundo;
        localStorage.setItem("cor_fundo", cor_fundo);
    } else {
        alert("Escolha um sistema de cor!");
    }
}
