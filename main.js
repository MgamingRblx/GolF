
// Crie uma variável canvas
canvas=document.getElementById("myCanvas")
//Defina as posições iniciais da bola e do buraco.
bolaX=10
bolay=10
buracoX=40
buracoY=40


blockImageWidth = 5;
blockImageHeight = 5;

function loadImg(){
	bola.src="golf-h.png"
	newImage();
}

function newImage()
{
	bola.onload="bola"
window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Verifique a condição das imagens da bola e do buraco para finalizar o jogo. 
	E se a id coordenadas coincidem, para remover a imagem da bola
	e exibir "Você atingiu o objetivo!!!" 
	além de tornar a borda do canvas vermelha 'red'. */
if (ball <=450) {
	ballY = ballY + blockImageHeight
	console.log ("altura do bloco imageoso = " blockImageWidth)
	console.log ("direcional pra baixo, x =" "ballX +" ", y" + ballY + ", x ="+ballY);
}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Escreva o código para mover a bola para cima.
	}

	function down()
	{
		 // Escreva o código para mover a bola para baixo.
	}

	function left()
	{
		if(ballX >5)
		{
			// Escreva o código para mover a bola para a esquerda.
		}
	}

	function right()
	{
		if(ballX <=1050)
		{
			// Escreva o código para mover a bola para a direita.
		}
	}
	
}

