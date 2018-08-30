//Por defecto arranca en una período de 5 segundos. Acá lo mando a escribir en la barra de progreso
$(document).ready(function(){
	updateParameters(5);
});

var timer;
var seconds = 5;
var progressValue = 0;
var timer2;
var finished = true;

//Va llenando la barra de a partes, dependiendo el período seleccionado.
function startProgressBar(){
	progressValue = 0;
    if (finished){
        finished = false;
        timer2 = setInterval(function() {
            progressValue += 100/seconds;
            $("#progress-bar")
            .css("width", progressValue + "%")
            .attr("aria-valuenow", progressValue)
            .text(progressValue.toFixed(2) + "%");
            if (progressValue > 100){
                clearInterval(timer2);
                resetProgressBar();
            }
        },1000);            
    }

}

//Vuelve la barra a 0%
function resetProgressBar(){
    $("#progress-bar")
    .css("width", 0 + 100/seconds + "%")
    .attr("aria-valuenow", 0 + 100/seconds)
    .text(0 + "%");
    finished = true;
}

//Dispara las actualizaciones periódicamente
function startTimer(){
	timer = setInterval(getData,seconds*1000);
    startProgressBar();
}

//Actualiza la información del texto de la barra de progreso cada vez que se cambia el período
function updateParameters(){

	if (seconds == 1){
		document.getElementById("progressText").innerText = ("Próxima actualización de los datos en "+seconds+" segundo");
	}
	else{
		document.getElementById("progressText").innerText = ("Próxima actualización de los datos en "+seconds+" segundos");
	}
}

//Trae toda la información del backend. Tanto la última muestra, como las últimas 10 y los promedios correspondientes.
function getData(){

    //Acá se pide la última
    $.get("/last/", function(data) {
        $("#sampleId").text(data.id);
        $("#sampleTemp").text(data.temperature);
        $("#samplePress").text(data.pressure);
        $("#sampleHum").text(data.humidity);
        $("#sampleWind").text(data.windspeed);
        console.log("seconds = "+ seconds + ", ID = "+data.id);
    });

    //Acá se piden las 10 + promedios
     $.get("/avg/", function(avg) {
        $("#id1").text(avg[0][0].id);
        $("#temp1").text(avg[0][0].temperature);
        $("#humi1").text(avg[0][0].humidity);
        $("#wind1").text(avg[0][0].windspeed);
        $("#pres1").text(avg[0][0].pressure);

        $("#id2").text(avg[0][1].id);
        $("#temp2").text(avg[0][1].temperature);
        $("#humi2").text(avg[0][1].humidity);
        $("#wind2").text(avg[0][1].windspeed);
        $("#pres2").text(avg[0][1].pressure);
        
        $("#id3").text(avg[0][2].id);
        $("#temp3").text(avg[0][2].temperature);
        $("#humi3").text(avg[0][2].humidity);
        $("#wind3").text(avg[0][2].windspeed);
        $("#pres3").text(avg[0][2].pressure);
        
        $("#id4").text(avg[0][3].id);
        $("#temp4").text(avg[0][3].temperature);
        $("#humi4").text(avg[0][3].humidity);
        $("#wind4").text(avg[0][3].windspeed);
        $("#pres4").text(avg[0][3].pressure);
        
        $("#id5").text(avg[0][4].id);
        $("#temp5").text(avg[0][4].temperature);
        $("#humi5").text(avg[0][4].humidity);
        $("#wind5").text(avg[0][4].windspeed);
        $("#pres5").text(avg[0][4].pressure);
         
        $("#id6").text(avg[0][5].id);
        $("#temp6").text(avg[0][5].temperature);
        $("#humi6").text(avg[0][5].humidity);
        $("#wind6").text(avg[0][5].windspeed);
        $("#pres6").text(avg[0][5].pressure);
        
        $("#id7").text(avg[0][6].id);
        $("#temp7").text(avg[0][6].temperature);
        $("#humi7").text(avg[0][6].humidity);
        $("#wind7").text(avg[0][6].windspeed);
        $("#pres7").text(avg[0][6].pressure);
        
        $("#id8").text(avg[0][7].id);
        $("#temp8").text(avg[0][7].temperature);
        $("#humi8").text(avg[0][7].humidity);
        $("#wind8").text(avg[0][7].windspeed);
        $("#pres8").text(avg[0][7].pressure);
        
        $("#id9").text(avg[0][8].id);
        $("#temp9").text(avg[0][8].temperature);
        $("#humi9").text(avg[0][8].humidity);
        $("#wind9").text(avg[0][8].windspeed);
        $("#pres9").text(avg[0][8].pressure);

        $("#id10").text(avg[0][9].id);
        $("#temp10").text(avg[0][9].temperature);
        $("#humi10").text(avg[0][9].humidity);
        $("#wind10").text(avg[0][9].windspeed);
        $("#pres10").text(avg[0][9].pressure);

        $("#avgTemp").text(avg[1]);
        $("#avgHumi").text(avg[2]);
        $("#avgWind").text(avg[3]);
        $("#avgPres").text(avg[4]);
    });
     //Cada vez que trae información manda a llenar la barra de nuevo.
     startProgressBar();

}

//A cada botón del menú para elegir el período se le hace una función que actualize el valor 'seconds' acá.
document.getElementById("option1").addEventListener("click",function(){
	seconds = 1;
	clearInterval(timer);
	updateParameters();
	startTimer();
});

document.getElementById("option2").addEventListener("click",function(){
	seconds = 2;
	clearInterval(timer);
	updateParameters();
	startTimer();
});

document.getElementById("option3").addEventListener("click",function(){
	seconds = 5;
	clearInterval(timer);
	updateParameters();
	startTimer();
});

document.getElementById("option4").addEventListener("click",function(){
	seconds = 10;
	clearInterval(timer);
	updateParameters();
	startTimer();
});

document.getElementById("option5").addEventListener("click",function(){
	seconds = 30;
	clearInterval(timer);
	updateParameters();
	startTimer();
});

document.getElementById("option6").addEventListener("click",function(){
	seconds = 60;
	clearInterval(timer);
	updateParameters();
	startTimer();
});

//Se le da la funcionalidad al botón de comienzo.
document.getElementById("startButton").addEventListener("click",function(){
	startTimer();	
});


//Se le da la funcionalidad al botón de comienzo.
document.getElementById("pauseButton").addEventListener("click",function(){
    clearInterval(timer);   
});

