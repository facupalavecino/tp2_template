$(document).ready(function(){
	updateParameters(5);
	resetProgressBar();
	//startTimer();
});

var timer;
var seconds = 5;
var progressValue = 0;
var timer2;

function resetProgressBar(){
	progressValue = 0;
	timer2 = setInterval(function() {
      	progressValue += 100/seconds;
      	$("#progress-bar")
      	.css("width", progressValue + "%")
      	.attr("aria-valuenow", progressValue)
      	.text(progressValue.toFixed(2) + "%");
      	if (progressValue > 100){
        	clearInterval(timer2);
        	progressValue = 0;
        	$("#progress-bar")
      		.css("width", progressValue + "%")
      		.attr("aria-valuenow", progressValue)
      		.text(progressValue + "%");
      	}
 	},1000);	
}

function startTimer(){
	timer = setInterval(getData,seconds*1000);
}

function updateParameters(seconds){

	if (seconds == 1){
		document.getElementById("progressText").innerText = ("Próxima actualización de los datos en "+seconds+" segundo");
	}
	else{
		document.getElementById("progressText").innerText = ("Próxima actualización de los datos en "+seconds+" segundos");
	}	
}

function getData(){
	alert("It works!");
}

document.getElementById("option1").addEventListener("click",function(){
	seconds = 1;
	updateParameters(seconds);
	resetProgressBar();
});

document.getElementById("option2").addEventListener("click",function(){
	seconds = 2;
	updateParameters(seconds);
	resetProgressBar();
});

document.getElementById("option3").addEventListener("click",function(){
	seconds = 5;
	updateParameters(seconds);
	resetProgressBar();
});

document.getElementById("option4").addEventListener("click",function(){
	seconds = 10;
	updateParameters(seconds);
	resetProgressBar();
});

document.getElementById("option5").addEventListener("click",function(){
	seconds = 30;
	updateParameters(seconds);
	resetProgressBar();
});

document.getElementById("option6").addEventListener("click",function(){
	seconds = 60;
	updateParameters(seconds);
	resetProgressBar();
});

