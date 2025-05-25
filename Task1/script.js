document.querySelector('#input').focus();

let input = document.querySelector("#input");
let ol = document.querySelector("ol");
let enter = document.querySelector("#enterBtn");
let li = document.querySelectorAll('li');


function insertIntoList(){
	if(input.value.length > 0){
		let li = document.createElement("li");
		let button = document.createElement("button");
		button.textContent = "Delete";
		li.textContent = input.value;
		ol.appendChild(li);
		li.appendChild(button);
		button.classList.add('todobutton');
		input.value = "";
	}
}


enter.addEventListener('click', insertIntoList)
input.addEventListener('keypress', function(event){
	if(event.keyCode === 13){
		insertIntoList();
	}
})


ol.addEventListener('click', function(event){
	event.target.classList.toggle('done');
})


document.addEventListener('click', function(event){
	if(event.target.classList.contains('todobutton')){
		ol.removeChild(event.target.parentElement);
	}
})

