/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var city = document.getElementById('aqi-city-input').value.trim();
	var quality = document.getElementById('aqi-value-input').value.trim();
	if(!city.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
        alert("城市名必须为中英文字符！")
        return false;
    }
    if(!quality.match(/^\d+$/)) {
        alert("空气质量指数必须为整数！")
        return false;
    }
	aqiData[city] = quality;
	return true;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var content = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
	var table = document.getElementById('aqi-table');
	for(var item in aqiData){
		content += '<tr><td class="city">' + item + '</td>' + 
		 '<td class="quality">' + aqiData[item] + '</td>' + 
		 '<td><button class="delete">删除</button></td></tr>';
	}
	table.innerHTML = content;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  if(addAqiData())renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(e) {
  // do sth.
  if(e.target && e.target.tagName.toLowerCase() === "button"){
  	var delRow = e.target.parentNode.parentNode;
  	var city = delRow.querySelector(".city").innerHTML;
  	delete aqiData[city];
  	renderAqiList();
  }
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  var addBtn = document.getElementById('add-btn');
  addBtn.onclick = addBtnHandle;
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  var table = document.getElementById('aqi-table');
  table.onclick = delBtnHandle;
}

window.addEventListener("load",init);