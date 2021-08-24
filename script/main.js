// code written while fckin high, QA 100%

var bpi = 0;
var bpt = ["Blekk - The Groom", "...and..."];
var bp = ["images/blekk1.jpg", "images/mel.png"];
var c = 0;

var pressedKeys = [];
var resetT = null;

$(document).keypress(function (e) {
    var key = e.which;
    if (resetT) {
        clearTimeout(resetT);
    }
    resetT = setTimeout(function () {
        pressedKeys = [];
    }, 3000);

    if (key == 52) {
        pressedKeys = [];
    }

    pressedKeys.push(key);
    if (pressedKeys.length === 3 &&
        pressedKeys[0] === 52 &&
        pressedKeys[1] === 50 &&
        pressedKeys[2] === 48) {
        suprise();
    }
});

(function () {
    var img = document.getElementById("blekk");
    var t = document.getElementById("blekk-title");
    img.onclick = function () {
        bpi = (bpi + 1) % bp.length;
        img.src = bp[bpi];
        t.textContent = bpt[bpi];
    };
    getLikes();
    document.getElementById("likebtn").onclick = function () {
        addLike();
    }

    var cs = document.getElementById("csongi");
    cs.onclick = function () {
        c++;
        if (c === 4) {
            var fn = prompt("Activate székenforgás", "");
            if (fn === "420") {
                suprise();
                c = 0;
            }
        }
    };
})();

function addLike() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/hit/gameover.blekk.fun/likes");
    xhr.responseType = "json";
    xhr.onload = function () {
        document.getElementById('likes').innerText = this.response.value;
    }
    xhr.send();
}

function getLikes() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/get/gameover.blekk.fun/likes");
    xhr.responseType = "json";
    xhr.onload = function () {
        if (this.response.value) {
            document.getElementById('likes').innerText = this.response.value;
        }
    }
    xhr.send();
}

var resetS = null;

function suprise() {
    document.getElementById("blekk").classList.add("shake-a");
    document.getElementById("gi").classList.add("shake-a");
    document.getElementById("demon").classList.add("shake-a");
    document.getElementById("csongi").classList.add("shake-a");
    document.getElementById("50").classList.add("shake-a");
    if (resetS) {
        clearTimeout(resetS);
    }
    resetS = setTimeout(function () {
        var img = document.getElementById("blekk");
        img.classList.remove("shake-a");
        img.src = "images/blekk2.jpg";

        var img = document.getElementById("gi");
        img.classList.remove("shake-a");
        img.src = "images/gi2.png";

        var img = document.getElementById("demon");
        img.classList.remove("shake-a");
        img.src = "images/demon2.jpg";

        var img = document.getElementById("csongi");
        img.classList.remove("shake-a");
        img.src = "images/csongi2.png";

        var img = document.getElementById("50");
        img.classList.remove("shake-a");
        img.src = "images/502.jpg";

    }, 1000);
}
