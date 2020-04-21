var myCanvas = document.getElementById('canvas')
var contex = myCanvas.getContext('2d');
myCanvas.width=myCanvas.scrollWidth;
myCanvas.height=myCanvas.scrollHeight;

function draw() {
//1
var panjangPP1 = 100;
var tinggiPP1 = 150;
contex.fillStyle='red';
contex.fillRect(10, 350, panjangPP1, tinggiPP1);

//tutup
var panjangPP2 = 100;
var tinggiPP2 = 30;
contex.fillStyle='gray';
contex.fillRect(10, 320, panjangPP2, tinggiPP2);

//pegangan
var panjangPP3 = 23;
var tinggiPP3 = 18;
contex.fillStyle='black';
contex.fillRect(47, 302, panjangPP3, tinggiPP3);


contex.fillStyle='red';
contex.fillRect(350, 350, panjangPP1, tinggiPP1);

// 2
contex.fillStyle='red';
contex.fillRect(150, 350, panjangPP1, tinggiPP1);

contex.translate(313,-66); 
                           
contex.rotate((Math.PI/100) * 25); 
contex.translate(-150, -80); 

// tutup
contex.fillStyle='gray';
contex.fillRect(300, 390, panjangPP2, tinggiPP2)

//pegangan
contex.fillStyle='black';
contex.fillRect(335, 373, panjangPP3, tinggiPP3);


// 3
contex.translate(313,-70); 
contex.rotate(Math.PI/4); 
contex.translate(-99, -330); 

// tutup
contex.fillStyle='gray';
contex.fillRect(406, 415, panjangPP2, tinggiPP2)

//pegangan
contex.fillStyle='black';
contex.fillRect(445, 397, panjangPP3, tinggiPP3);


}
draw();



