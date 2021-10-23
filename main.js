function play(id) {
    var tile = id;
    $(id).click();
    var audio = new Audio('sounds/Piano.ff.' + tile + '.mp3');
    audio.play();
}

$(window).keydown(function(evt) {
    if (evt.which == 81) {
        var d = document.getElementById("C3");
        d.className = 'tile-active'
        play("C3");
    }
    if (evt.which == 50) {
        var d = document.getElementById("Db3");
        d.className = 'tile-s-active'
        play("Db3");
    }
    if (evt.which == 87) {
        var d = document.getElementById("D3");
        d.className = 'tile-active'
        play("D3");
    }
    if (evt.which == 51) {
        var d = document.getElementById("Eb3");
        d.className = 'tile-s-active'
        play("Eb3");
    }
    if (evt.which == 69) {
        var d = document.getElementById("E3");
        d.className = 'tile-active'
        play("E3");
    }
    if (evt.which == 82) {
        var d = document.getElementById("F3");
        d.className = 'tile-active'
        play("F3");
    }
    if (evt.which == 53) {
        var d = document.getElementById("Gb3");
        d.className = 'tile-s-active'
        play("Gb3");
    }
    if (evt.which == 84) {
        var d = document.getElementById("G3");
        d.className = 'tile-active'
        play("G3");
    }
    if (evt.which == 54) {
        var d = document.getElementById("Ab3");
        d.className = 'tile-s-active'
        play("Ab3");
    }
    if (evt.which == 89) {
        var d = document.getElementById("A3");
        d.className = 'tile-active'
        play("A3");
    }
    if (evt.which == 55) {
        var d = document.getElementById("Bb3");
        d.className = 'tile-s-active'
        play("Bb3");
    }
    if (evt.which == 85) {
        var d = document.getElementById("B3");
        d.className = 'tile-active'
        play("B3");
    }
    if (evt.which == 73) {
        var d = document.getElementById("C4");
        d.className = 'tile-active'
        play("C4");
    }
    if (evt.which == 57) {
        var d = document.getElementById("Db4");
        d.className = 'tile-s-active'
        play("Db4");
    }
    if (evt.which == 79) {
        var d = document.getElementById("D4");
        d.className = 'tile-active'
        play("D4");
    }
    if (evt.which == 48) {
        var d = document.getElementById("Eb4");
        d.className = 'tile-s-active'
        play("Eb4");
    }
    if (evt.which == 80) {
        var d = document.getElementById("E4");
        d.className = 'tile-active'
        play("E4");
    }
    if (evt.which == 219) {
        var d = document.getElementById("F4");
        d.className = 'tile-active'
        play("F4");
    }
    if (evt.which == 187) {
        var d = document.getElementById("Gb4");
        d.className = 'tile-s-active'
        play("Gb4");
    }
    if (evt.which == 221) {
        var d = document.getElementById("G4");
        d.className = 'tile-active'
        play("G4");
    }
}).keyup(function(evt) {
    if (evt.which == 81) {
        var d = document.getElementById("C3");
        d.className = 'tile'
    }
    if (evt.which == 50) {
        var d = document.getElementById("Db3");
        d.className = 'tile-s'
    }
    if (evt.which == 87) {
        var d = document.getElementById("D3");
        d.className = 'tile'
    }
    if (evt.which == 51) {
        var d = document.getElementById("Eb3");
        d.className = 'tile-s';
    }
    if (evt.which == 69) {
        var d = document.getElementById("E3");
        d.className = 'tile'
    }
    if (evt.which == 82) {
        var d = document.getElementById("F3");
        d.className = 'tile'
    }
    if (evt.which == 53) {
        var d = document.getElementById("Gb3");
        d.className = 'tile-s'
    }
    if (evt.which == 84) {
        var d = document.getElementById("G3");
        d.className = 'tile'
    }
    if (evt.which == 54) {
        var d = document.getElementById("Ab3");
        d.className = 'tile-s'
    }
    if (evt.which == 89) {
        var d = document.getElementById("A3");
        d.className = 'tile'
    }
    if (evt.which == 55) {
        var d = document.getElementById("Bb3");
        d.className = 'tile-s'
    }
    if (evt.which == 85) {
        var d = document.getElementById("B3");
        d.className = 'tile'
    }
    if (evt.which == 73) {
        var d = document.getElementById("C4");
        d.className = 'tile'
    }
    if (evt.which == 57) {
        var d = document.getElementById("Db4");
        d.className = 'tile-s'
    }
    if (evt.which == 79) {
        var d = document.getElementById("D4");
        d.className = 'tile'
    }
    if (evt.which == 48) {
        var d = document.getElementById("Eb4");
        d.className = 'tile-s'
    }
    if (evt.which == 80) {
        var d = document.getElementById("E4");
        d.className = 'tile'
    }
    if (evt.which == 219) {
        var d = document.getElementById("F4");
        d.className = 'tile'
    }
    if (evt.which == 187) {
        var d = document.getElementById("Gb4");
        d.className = 'tile-s'
    }
    if (evt.which == 221) {
        var d = document.getElementById("G4");
        d.className = 'tile'
    }
});