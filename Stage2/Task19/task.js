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

function mySort(argument) {
	var ready=0,timer;
	function SelectSort(argument) {
		if(ready==dqueue.length){
			clearInterval(timer);
		}else{
			for(var i=dqueue.length-1;i>ready;--i){
				if(dqueue[i]<dqueue[i-1]){
					var temp=dqueue[i];
					dqueue[i]=dqueue[i-1];
					dqueue[i-1]=temp;
				}
			}
			++ready;
		}
		RenderChart();
	}
	timer=setInterval(SelectSort,50);
}

function RenderChart() {
	display.innerHTML="";
	for (var i = 0; i < dqueue.length; i++) {
		var newBlock = document.createElement("div");
		newBlock.className = "block";
		newBlock.style.height = "" + 5*dqueue[i] + "px";
		newBlock.style.backgroundColor = color[parseInt(dqueue[i]/10)];
		newBlock.id = ""+i+"block";
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
	}else if(btn.id == "sort"){
		mySort();
		return;
	}
	var input = GetNum();
	if(!input)return;
	if(btn.id == "lin" && dqueue.length<=60){
		dqueue.unshift(input);
	}else if(btn.id == "rin" && dqueue.length<=60){
		dqueue.push(input);
	}else if (btn.id == "random" && input<=60){
		RandomGenerator(input);
	}else{
		alert("Something went wrong.");
		return;
	}
	RenderChart();
}

function dltBlockHandler(e) {
	var block = e.target;
	if(block.className == "block"){
		var index = parseInt(block.id);
		display.removeChild(block);
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