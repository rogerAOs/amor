const body = document.querySelector('body')

const crearNieve = () => {


    let copo = document.createElement("i")
    let x = innerWidth * Math.random() - 36;
    let size = (Math.random() * 8) + 2
    let z = Math.round(Math.random())
    let delay = Math.random() * 4
    let anima = (Math.random() * 9) + 4

    copo.style.left = x + "px"
    copo.style.width = size + "px"
    copo.style.height = size + "px"
    copo.style.zIndex = z
    copo.style.animationDelay = delay + "s"
    copo.style.animationDuration = anima + "s"

    body.appendChild(copo)

    setTimeout(() => {
        copo.remove()
    }, anima * 900)

}

setInterval(crearNieve, 100)


const screen = document.getElementById('')
keys = document.getElementById('')


// musica de fondo

let parrafo1 = document.getElementById('parrafo1');
let parrafo2 = document.getElementById('parrafo2');
let parrafo3 = document.getElementById('parrafo3');
let parrafo4 = document.getElementById('parrafo4');
let parrafo5 = document.getElementById('parrafo5');
let parrafo6 = document.getElementById('parrafo6');
let parrafo7 = document.getElementById('parrafo7');
let parrafo8 = document.getElementById('parrafo8');
let parrafo9 = document.getElementById('parrafo9');
let parrafo10 = document.getElementById('parrafo10');
let parrafo11 = document.getElementById('parrafo11');
let parrafo12 = document.getElementById('parrafo12');
var audio = document.getElementById('myAudio');
const letra = document.getElementById("letra");


parrafo1.style.display = "none";
parrafo2.style.display = "none";
parrafo3.style.display = "none";
parrafo4.style.display = "none";
parrafo5.style.display = "none";
parrafo6.style.display = "none";
parrafo7.style.display = "none";
parrafo8.style.display = "none";
parrafo9.style.display = "none";
parrafo10.style.display = "none";
parrafo11.style.display = "none";
parrafo12.style.display = "none";
document.addEventListener('click', function() {
    audio.play();
    
    audio.addEventListener("timeupdate", () => {
        const currentTime = audio.currentTime;
        if (currentTime >= 0 && currentTime < 11) {
            parrafo1.style.display = "block";
            parrafo2.style.display = "none";
            parrafo3.style.display = "none";
            parrafo4.style.display = "none";
            parrafo5.style.display = "none";
            parrafo6.style.display = "none";
            parrafo7.style.display = "none";
            parrafo8.style.display = "none";
            parrafo9.style.display = "none";
            parrafo10.style.display = "none";
            parrafo11.style.display = "none";
            parrafo12.style.display = "none";
        }

        else if (currentTime >= 11 && currentTime < 30) {
            parrafo1.style.display = "none";
            parrafo2.style.display = "block";
            parrafo3.style.display = "none";
            parrafo4.style.display = "none";
            parrafo5.style.display = "none";
            parrafo6.style.display = "none";
            parrafo7.style.display = "none";
            parrafo8.style.display = "none";
            parrafo9.style.display = "none";
            parrafo10.style.display = "none";
            parrafo11.style.display = "none";
            parrafo12.style.display = "none";
        }

        else if (currentTime >= 30 && currentTime < 51) {
            parrafo1.style.display = "none";
            parrafo2.style.display = "none";
            parrafo3.style.display = "block";
            parrafo4.style.display = "none";
            parrafo5.style.display = "none";
            parrafo6.style.display = "none";
            parrafo7.style.display = "none";
            parrafo8.style.display = "none";
            parrafo9.style.display = "none";
            parrafo10.style.display = "none";
            parrafo11.style.display = "none";
            parrafo12.style.display = "none";
        }
        else if (currentTime >= 51 && currentTime < 72) {
            parrafo1.style.display = "none";
            parrafo2.style.display = "none";
            parrafo3.style.display = "none";
            parrafo4.style.display = "block";
            parrafo5.style.display = "none";
            parrafo6.style.display = "none";
            parrafo7.style.display = "none";
            parrafo8.style.display = "none";
            parrafo9.style.display = "none";
            parrafo10.style.display = "none";
            parrafo11.style.display = "none";
            parrafo12.style.display = "none";
        }
        else if (currentTime >= 72 && currentTime < 94) {
            parrafo1.style.display = "none";
            parrafo2.style.display = "none";
            parrafo3.style.display = "none";
            parrafo4.style.display = "none";
            parrafo5.style.display = "block";
            parrafo6.style.display = "none";
            parrafo7.style.display = "none";
            parrafo8.style.display = "none";
            parrafo9.style.display = "none";
            parrafo10.style.display = "none";
            parrafo11.style.display = "none";
            parrafo12.style.display = "none";
        }
        else if (currentTime >= 94 && currentTime < 117) {
            parrafo1.style.display = "none";
            parrafo2.style.display = "none";
            parrafo3.style.display = "none";
            parrafo4.style.display = "none";
            parrafo5.style.display = "none";
            parrafo6.style.display = "block";
            parrafo7.style.display = "none";
            parrafo8.style.display = "none";
            parrafo9.style.display = "none";
            parrafo10.style.display = "none";
            parrafo11.style.display = "none";
            parrafo12.style.display = "none";
        }
        else if (currentTime >= 117 && currentTime < 137) {
            parrafo1.style.display = "none";
            parrafo2.style.display = "none";
            parrafo3.style.display = "none";
            parrafo4.style.display = "none";
            parrafo5.style.display = "none";
            parrafo6.style.display = "none";
            parrafo7.style.display = "block";
            parrafo8.style.display = "none";
            parrafo9.style.display = "none";
            parrafo10.style.display = "none";
            parrafo11.style.display = "none";
            parrafo12.style.display = "none";
        }
        else if (currentTime >= 137 && currentTime < 158) {
            parrafo1.style.display = "none";
            parrafo2.style.display = "none";
            parrafo3.style.display = "none";
            parrafo4.style.display = "none";
            parrafo5.style.display = "none";
            parrafo6.style.display = "none";
            parrafo7.style.display = "none";
            parrafo8.style.display = "block";
            parrafo9.style.display = "none";
            parrafo10.style.display = "none";
            parrafo11.style.display = "none";
            parrafo12.style.display = "none";
        }
        else if (currentTime >= 158 && currentTime < 180) {
            parrafo1.style.display = "none";
            parrafo2.style.display = "none";
            parrafo3.style.display = "none";
            parrafo4.style.display = "none";
            parrafo5.style.display = "none";
            parrafo6.style.display = "none";
            parrafo7.style.display = "none";
            parrafo8.style.display = "none";
            parrafo9.style.display = "block";
            parrafo10.style.display = "none";
            parrafo11.style.display = "none";
            parrafo12.style.display = "none";
        }

        else if (currentTime >= 180 && currentTime < 200) {
            parrafo1.style.display = "none";
            parrafo2.style.display = "none";
            parrafo3.style.display = "none";
            parrafo4.style.display = "none";
            parrafo5.style.display = "none";
            parrafo6.style.display = "none";
            parrafo7.style.display = "none";
            parrafo8.style.display = "none";
            parrafo9.style.display = "none";
            parrafo10.style.display = "block";
            parrafo11.style.display = "none";
            parrafo12.style.display = "none";
        }
        else if (currentTime >= 200 && currentTime < 230) {
            parrafo1.style.display = "none";
            parrafo2.style.display = "none";
            parrafo3.style.display = "none";
            parrafo4.style.display = "none";
            parrafo5.style.display = "none";
            parrafo6.style.display = "none";
            parrafo7.style.display = "none";
            parrafo8.style.display = "none";
            parrafo9.style.display = "none";
            parrafo10.style.display = "none";
            parrafo11.style.display = "block";
            parrafo12.style.display = "none";
        }
        else if (currentTime >= 230) {
            parrafo1.style.display = "none";
            parrafo2.style.display = "none";
            parrafo3.style.display = "none";
            parrafo4.style.display = "none";
            parrafo5.style.display = "none";
            parrafo6.style.display = "none";
            parrafo7.style.display = "none";
            parrafo8.style.display = "none";
            parrafo9.style.display = "none";
            parrafo10.style.display = "none";
            parrafo11.style.display = "none";
            parrafo12.style.display = "block";
        }
    });
});
