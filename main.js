


function pers2() {
	document.getElementById('out').innerHTML = " ";
}

function delit(){
	var value= document.getElementById('out').innerHTML;
	value=value/100;
	document.getElementById('out').innerHTML= value;
	

}

function pers1() {
	document.getElementById('out').innerHTML = "0";

}

function display(value) {
	removezero()
	document.getElementById('out').innerHTML +=  value;
}

function removezero(){
	var value = document.getElementById('out').innerHTML;
	if ( value=="0"){
value=" "
document.getElementById('out').innerHTML = value;

	}
}

function solve(){
	removezero()
	var sum=document.getElementById('out').innerHTML;
	var soved= eval( sum );
	document.getElementById('out').innerHTML=soved;
}