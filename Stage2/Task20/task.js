//variable for array
var dqueue = new Array();
const color = ["red","green","seagreen","orange","blue","purple","olive","slategray"];
var display;

/*随机生成数据*/
function RandomGenerator(num) {
	dqueue = new Array();
	for(var i=0; i<num; ++i){
		dqueue.push(parseInt(Math.random()*90+10));
	}
}

/*获取text-area里的内容*/
function GetContent(argument) {
	var input = document.getElementById("content-input").value;
	if(!input)return;
	return input.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/).filter(function (d) {
		 return d!=''; 
	});
}

function RenderChart(input) {
	display.innerHTML="";
	for (var i = 0; i < dqueue.length; i++) {
		var newBlock = document.createElement("div");
		newBlock.className = "box";
		newBlock.id = "" + i + "box";
		newBlock.style.backgroundColor = color[i%color.length];
		newBlock.innerHTML = dqueue[i];
		if(input){
			newBlock.innerHTML=newBlock.innerHTML.replace(new RegExp(input, "g"), "<span class='highlight'>" + input + "</span>");
		}
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
	var input = GetContent();
	if(!input)return;
	if(btn.id == "lin"){
		input.forEach(function (str) {
			 dqueue.unshift(str);
		});
	}else if(btn.id == "rin"){
		input.forEach(function (str) {
			 dqueue.push(str);
		});
	}else if (btn.id == "search"){
		RenderChart(document.getElementById("text-input").value);
		return;
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