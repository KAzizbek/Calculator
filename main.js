


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

function solve() {
	removezero();

	var sum = document.getElementById('out').innerHTML;
	var result;

	// Проверка, не является ли выражение делением на ноль
	if (sum.includes('/ 0')) {
			result = 'Ошибка: деление на ноль';
	} else {
			// Используйте try-catch для обработки некорректных математических выражений
			try {
					result = eval(sum);

					// Проверка, является ли результат конечным числом
					if (!isFinite(result)) {
							result = 'Ошибка: некорректный результат';
					}
			} catch (error) {
					result = 'Ошибка: некорректное выражение';
			}
	}

	document.getElementById('out').innerHTML = result;
}