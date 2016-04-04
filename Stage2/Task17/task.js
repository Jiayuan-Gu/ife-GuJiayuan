/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
  var y = dat.getFullYear();
  var m = dat.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = dat.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
  var returnData = {};
  var dat = new Date("2016-01-01");
  var datStr = ''
  for (var i = 1; i < 92; i++) {
    datStr = getDateStr(dat);
    returnData[datStr] = Math.ceil(Math.random() * seed);
    dat.setDate(dat.getDate() + 1);
  }
  return returnData;
}

var aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "广州": randomBuildData(200),
  "深圳": randomBuildData(100),
  "成都": randomBuildData(300),
  "西安": randomBuildData(500),
  "福州": randomBuildData(100),
  "厦门": randomBuildData(100),
  "沈阳": randomBuildData(500)
};

// 用于渲染图表的数据
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
  nowSelectCity: -1,
  nowGraTime: "day"
}

/**
 * 渲染图表
 */
function renderChart() {
  var chart = document.getElementById("aqi-chart-wrap");
  //改变div的宽度为100%
  chart.getAttribute("width");

  //读取数据的长度，确定一些参数
  var dataset = chartData[pageState.nowGraTime][pageState.nowSelectCity];
  var length = Object.keys(dataset).length-1;
  var wunit = chart.width / (2*length+1), hunit = chart.height/(0.8*dataset.maxHeight);
  var offset = wunit;
  for(var item in dataset){
    var block = document.createElement("div");
    chart.appendChild(block);
    offset+=2*wunit;
  }
  /*Object.keys(obj).length可以得到obj属性的数量*/
}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange(e) {
  // 确定是否选项发生了变化
  // 设置对应数据
  // 调用图表渲染函数
  if(e.target.selected && e.target.text != pageState.nowSelectCity){
    pageState.nowSelectCity = e.target.text;
    renderChart();
  }
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange(e) {
  // 确定是否选项发生了变化 
  // 设置对应数据
  // 调用图表渲染函数
  if(e.target.checked && e.target.value != pageState.nowGraTime){
    pageState.nowGraTime = e.target.value;
    renderChart();
  } 
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
	var radio = document.querySelectorAll("[name='gra-time']");
	for (var i = radio.length - 1; i >= 0; i--) {
		radio[i].onclick = graTimeChange;
	}
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
  // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
  var city_list = document.getElementById('city-select');
  for(var item in aqiSourceData){
  	city_list.innerHTML += "<option>" + item + "</option>";
  }
  // 给select设置事件，当选项发生变化时调用函数citySelectChange
  city_list.onchange = citySelectChange;
}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
  // 将原始的源数据处理成图表需要的数据格式
  // 处理好的数据存到 chartData 中
  chartData["day"]=chartData["week"]=chartData["month"]={};
  for(var city in aqiSourceData){
    chartData["day"][city] = chartData["week"][city] = chartData["month"][city] = [];
    var day=0,week=1,month=1,wtotal=0,mtotal=0;
    for(var item in aqiSourceData[city]){
      chartData["day"][city].push([item,aqiSourceData[city][item]]);
      wtotal+=aqiSourceData[city][item];
      mtotal+=aqiSourceData[city][item];
      ++day;
      if(day%31==0){
        chartData["month"][city].push(["2016-0"+month,mtotal]);
        mtotal=0;
        ++month;
      }
      if(day%7==0){
        chartData["week"][city].push(["2016-0"+month+"-week"+week,wtotal]);
        wtotal=0;
        ++week;
      }
    }
    
  }
}

/**
 * 初始化函数
 */
function init() {
  initGraTimeForm();
  initCitySelector();
  initAqiChartData();
}

window.addEventListener("load", init);