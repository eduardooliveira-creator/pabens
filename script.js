document.getElementById('myButton1').addEventListener('click', function() {
            document.getElementById('buttons').innerText = 'Otario KKKKK';
        });

        document.getElementById('myButton2').addEventListener('mouseover', function() {
                        let contador = 0;
                        var x = Math.floor(Math.random() * 100);
                        var y = Math.floor(Math.random() * 100);
                        document.getElementById('myButton2').style.position = 'absolute';
                        document.getElementById('myButton2').style.left = x + '%';
                        document.getElementById('myButton2').style.top = y + '%';
                               btnAumentar.addEventListener('click', () =>{
                                    contador++);
                                    if (contador == 5){
                                                document.getElementById('buttons').innerText = 'Otario KKKKK';
                                    }
        });
