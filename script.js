document.getElementById('myButton1').addEventListener('click', function () {
    document.getElementById('buttons').innerText = 'Otario KKKKK';
});
let cont = 0;
document.getElementById('myButton2').addEventListener('mouseover', function () {
        var x = Math.floor(Math.random() * 100);
        var y = Math.floor(Math.random() * 100);
        document.getElementById('myButton2').style.position = 'absolute';
        document.getElementById('myButton2').style.left = x + '%';
        document.getElementById('myButton2').style.top = y + '%';
        cont++;
        if (cont >= 6) {
            document.getElementById('myButton2').innerText = 'serio mano, para de tentar';
        }
});
