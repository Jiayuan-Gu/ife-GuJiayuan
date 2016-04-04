var dqueue = new Array();
var display,input;
function GetNum(argument) {
	if(isNaN(input.value))alert("Please enter a number");
	else{
		return input.value;
	}
}
function Render(op) {
	if(op=="leftin"){
		var newChild = document.createElement("div");
		newChild.className = "box";
		newChild.innerHTML = dqueue[0];
		display.insertBefore(newChild, display.firstChild);
	}else if(op == "rightin"){
		var newChild = document.createElement("div");
		newChild.className = "box";
		newChild.innerHTML = dqueue[dqueue.length-1];
		display.appendChild(newChild);
	}else if(op == "leftout"){
		if(display.firstChild)display.removeChild(display.firstChild);
		else alert("Empty!");
	}else if(op == "rightout"){
		if(display.lastChild)display.removeChild(display.lastChild);
		else alert("Empty!");
	}
}
function init (argument) {
  	 display = document.getElementById("box-wrap");
	 input = document.getElementById("num-input");
	 display.removeChild(display.lastChild); //有个空的文本在里面
	 display.addEventListener("click", function (e) {
	 	 if(e.target.className == "box"){
	 	 	display.removeChild(e.target);
	 	 } 
	 });
	 document.getElementById("leftin").addEventListener("click",function (e) {
	 	 var num=GetNum();
	 	 if(num){
			dqueue.unshift(num);
	 	 	Render("leftin");
	 	 }
	 });
	 document.getElementById("rightin").addEventListener("click",function (e) {
	 	 var num=GetNum();
	 	 if(num){
			dqueue.push(num);
	 	 	Render("rightin");
	 	 }
	 });
	 document.getElementById("leftout").addEventListener("click",function (e) {
	 	 var num=GetNum();
	 	 if(num){
			dqueue.shift(num);
	 	 	Render("leftout");
	 	 }
	 });
	 document.getElementById("rightout").addEventListener("click",function (e) {
	 	 var num=GetNum();
	 	 if(num){
			dqueue.pop(num);
	 	 	Render("rightout");
	 	 }
	 });
}
window.addEventListener("load",init,false);