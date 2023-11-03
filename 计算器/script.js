const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
	item.onclick = () => {
		if (item.id == 'clear') {
			display.innerText = '';
		} else if (display.innerText != '' && item.id == 'backspace') {
			let string = display.innerText.toString();
			display.innerText = string.substr(0, string.length - 1);
		} else if (display.innerText == '' && item.id == 'backspace') {
			display.innerText = 'Empty!';
			setTimeout(() => (display.innerText = ''), 2000);
		} else if (display.innerText != '' && item.id == 'equal') {
			let string = display.innerText.toString();
			if (judgeRight(string)) {
				display.innerText = eval(display.innerText);
			} else {
				display.innerText = "ERROR";
				setTimeout(() => (display.innerText = ''), 2000);
			}
		} else if (display.innerText == '' && item.id == 'equal') {
			display.innerText = 'Empty!';
			setTimeout(() => (display.innerText = ''), 2000);
		} else {
			display.innerText += item.id;
		}
	}
})

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true;
themeToggleBtn.onclick = () => {
	calculator.classList.toggle('dark');
	themeToggleBtn.classList.toggle('active');
	isDark = !isDark;
}

function judgeRight(str) {
	// 判断开头是数字
	if (!isNumber(str[0]) && !isLeftOrRight(str[0])) {
		return false;
	}

	
	for (var i = 1; i < str.length - 1; i++) {
		// 判断操作符左右为数字
		if (isOperator(str[i])) {
			if (!(isNumber(str[i + 1])||isLeftOrRight(str[i+1]))) {
				return false;
			}
		}
		// 判断/0
		if (str[i] == '/') {
			if (str[i + 1] == '0') {
				return false;
			}
		}
		// 判断括号左右是否为合法值
		if(isLeftOrRight(str[i])){
			if(isLeft(str[i])){
				if(!isOperator(str[i-1])){
					console.log("Left");
					return false;
				}
			}
			if(isRight(str[i])){
				if(!isOperator(str[i+1])){
					console.log("Right");
					return false;
				}
			}
		}
	}
	return true;
}

function isOperator(str) {
	if (str == '/' || str == '*' || str == '+' || str == '-') {
		return true;
	} else {
		return false;
	}
}

function isNumber(str) {
	if (str >= '0' && str <= '9') {
		return true;
	} else {
		return false;
	}
}

function isLeftOrRight(str) {
	if (str == '(' || str == ")") {
		return true;
	} else {
		return false;
	}
}

function isLeft(str){
	if(str=='('){
		return true;
	}else{
		return false;
	}
}

function isRight(str){
	if(str==')'){
		return true;
	}else{
		return false;
	}
}