var flag=0;

//selecting all required elements
const dropArea1 = document.querySelector(".box1"),
button1 = dropArea1.querySelector(".button1"),
input1 = dropArea1.querySelector(".input1");


let file1;//this is a globale variable and we'll use it inside multiple function
button1.onclick = ()=>{
	input1.click();
}

input1.addEventListener("change", function(){
	
	file1=this.files[0];
	showFile1();
});

//If user Drop File Over DropArea
dropArea1.addEventListener("dragover",()=>{
	event.preventDefault();//preventing from default behaviour
});

//If user drop File in DropArea
dropArea1.addEventListener("drop",(event)=>{
	event.preventDefault();//preventing from default behaviour
	//getting user select file and [0] this means if user select multiple files then we'll selectonly the first one
	file1 = event.dataTransfer.files[0];
	showFile1();
});

function showFile1()
{
	let fileType1 = file1.type;
	let validExtensions1 = ["image/jpg","image/jpeg","image/png"];
	if(validExtensions1.includes(fileType1)){
		let fileReader1 = new FileReader();//creating new reader object
		fileReader1.onload = ()=>{
			let fileURL1 = fileReader1.result;//passing user file source in fileURL variable
			let imgTag1 = `<img src="${fileURL1}" alt="">`;//creating an img tag and passing uesr selected file source inside src attribute
			dropArea1.innerHTML = imgTag1;//adding that created img tag inside dropArea container
		}
		fileReader1.readAsDataURL(file1);
		flag++;
	}
	else{
		alert("This is not an Image File!");
	}
}





//selecting all required elements
const dropArea2 = document.querySelector(".box2");
button2 = dropArea2.querySelector(".button2"),
input2 = dropArea2.querySelector(".input2");


let file2;//this is a globale variable and we'll use it inside multiple function
button2.onclick = ()=>{
	input2.click();
}

input2.addEventListener("change", function(){
	
	file2=this.files[0];
	showFile2();
});


//If user Drop File Over DropArea
dropArea2.addEventListener("dragover",()=>{
	event.preventDefault();//preventing from default behaviour
});

//If user drop File in DropArea
dropArea2.addEventListener("drop",(event)=>{
	event.preventDefault();//preventing from default behaviour
	//getting user select file and [0] this means if user select multiple files then we'll selectonly the first one
	file2 = event.dataTransfer.files[0];
	showFile2();
});

function showFile2()
{
	let fileType2 = file2.type;
	let validExtensions2 = ["image/jpg","image/jpeg","image/png"];
	if(validExtensions2.includes(fileType2)){
		let fileReader2 = new FileReader();//creating new reader object
		fileReader2.onload = ()=>{
			let fileURL2 = fileReader2.result;//passing user file source in fileURL variable
			let imgTag2 = `<img src="${fileURL2}" alt="">`;//creating an img tag and passing uesr selected file source inside src attribute
			dropArea2.innerHTML = imgTag2;//adding that created img tag inside dropArea container
		}
		fileReader2.readAsDataURL(file2);
		flag++;
	}
	else{
		alert("This is not an Image File!");
	}
}

var oAction = document.getElementById("click");
var oWait = document.getElementById("loadwait");
var oResult=document.getElementById('result');
oWait.style.visibility = 'hidden';
oResult.style.visibility = 'hidden';
oAction.onclick = function(){
	if(flag == 2){
		oWait.style.visibility = 'visible';	
		setTimeout(function(){
			oResult.style.visibility = 'visible';
			oWait.style.visibility = 'hidden';
		},3000);
	}
	else{
		alert("The uploaded file is missing!");
		
	}
}