//variable for array
var dqueue = new Array();
const color = [,"red","pink","orange","yellow","green","lime","aqua","blue","purple","Olive"];
var display;

function RandomGenerator(num) {
	dqueue = new Array();
	for(var i=0; i<num; ++i){
		dqueue.push(parseInt(Math.random()*90+10));
	}
}
/*获取输入框里的数字*/
function GetNum(argument) {
	var input = document.getElementById("num-input");
	if(isNaN(input.value))alert("Please enter a number.");
	else if(input.value<10 || input.value>100){
		alert("The input should fall in the range of 10 to 100.");
	}else{
		return input.value;
	}
}

function RenderChart() {
	display.innerHTML="";
	for (var i = 0; i < dqueue.length; i++) {
		var newBlock = document.createElement("div");
		newBlock.className = "box";
		newBlock.style.backgroundColor = color[parseInt(dqueue[i]/10)];
		newBlock.id = ""+i+"box";
		newBlock.innerHTML = dqueue[i];
		display.appendChild(newBlock);
	}
}

function clkBtnHandler(e) {
	var btn = e.target;
	if(btn.getAttribute("type")!="button")return;
	if(btn.id == "lout"){
		dqueue.shift();
		RenderChart();
		return;
	}else if(btn.id == "rout"){
		dqueue.pop();
		RenderChart();
		return;
	}
	var input = GetNum();
	if(!input)return;
	if(btn.id == "lin"){
		dqueue.unshift(input);
	}else if(btn.id == "rin"){
		dqueue.push(input);
	}else if (btn.id == "random"){
		RandomGenerator(input);
	}else{
		alert("Click on " + e.target.nodeName);
		return;
	}
	RenderChart();
}

function dltBlockHandler(e) {
	var box = e.target;
	if(box.className == "box"){
		var index = parseInt(box.id);
		display.removeChild(box);
		dqueue.splice(index,1);
	}
}
/*初始化*/
function init (argument) {
  	 display = document.getElementById("box-wrap");
	 //display里面有一个空的文本
	 display.addEventListener("click", dltBlockHandler);
	 document.getElementById("form").addEventListener("click", clkBtnHandler);
}
window.addEventListener("load",init,false);