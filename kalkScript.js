function hindKokku(){
	var kogus=document.getElementById("kogus");
	var vastus=document.getElementById("hind");
	var valuta=document.getElementById("valuta").value;
	
	alert("Convert to" + " " + valuta);
	
	if (valuta=="BTC"){
	vastus.innerHTML= kogus.value + " eur" + ", saa saad" + " " + valuta + " " +
	
	(kogus.value/5436).toFixed(2);
	}
	else if (valuta=="ETH"){
	vastus.innerHTML= kogus.value + " eur" + ", saa saad" + " " + valuta + " " +
	
	(kogus.value/173).toFixed(2);
	}
	else if (valuta=="LTC"){
	vastus.innerHTML= kogus.value + " eur" + ", saa saad" + " " + valuta + " " +
	
	(kogus.value/45).toFixed(2);
	}
	else if (valuta=="XMR"){
	vastus.innerHTML= kogus.value + " eur" + ", saa saad" + " " + valuta + " " +
	
	(kogus.value/90).toFixed(2);
	}
	
}