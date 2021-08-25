const data = [
  {name: '北京', value: 22}, 
  {name: '天津', value: 27}, 
  {name: '河北', value: 0}, 
  {name: '山西', value: 1}, 
  {name: '内蒙古', value: 7}, 
  {name: '辽宁', value: 8}, 
  {name: '吉林', value: 1}, 
  {name: '黑龙江',value: 0}, 
  {name: '上海', value: 95}, 
  {name: '江苏', value: 721}, 
  {name: '浙江', value: 34}, 
  {name: '安徽', value: 0}, 
  {name: '福建', value: 36}, 
  {name: '江西', value: 0}, 
  {name: '山东', value: 26}, 
  {name: '河南', value: 155}, 
  {name: '湖北', value: 92}, 
  {name: '湖南', value: 104}, 
  {name: '广东', value: 80}, 
  {name: '广西', value: 5}, 
  {name: '海南', value: 2}, 
  {name: '重庆', value: 4}, 
  {name: '四川', value: 38}, 
  {name: '贵州', value: 0}, 
  {name: '云南', value: 357}, 
  {name: '陕西', value: 23}, 
  {name: '甘肃', value: 3}, 
  {name: '青海', value: 0}, 
  {name: '宁夏', value: 1}, 
  {name: '新疆', value: 0},
  {name: '西藏', value: 0},
  {name: '台湾', value: 1887}
];

var date = [];

function daypush(start, end) {
  for(let i=start; i<=end; i++) {
    date.push(i);
  }
}
daypush(13, 31);
daypush(1, 10)
var newDate = date.map((item, index)=>{
  if(item > 12){
    return "7/" + item 
  } else {
    return "8/" + item 
  }
})
// console.log(newDate);

const value1 = [40,28,36,30,33,31,65,22,50,48,35,32,76,68,69,69,59,60,75,98,90,96,85,124,107,96,125,143,111]

let value2 = [10587,12590,11730,11276,9804,9130,10759,11168,13121,16000,17292,13810,11561,15604,17489,17888,17969,18177,15424,16708,19156,19673,17867,15589,15968,12524,12221,0,25567]

value2 = value2.map((item, index) => {
  return item * 1000
})

let avg1 = [];
let avg2 = [];
// 平均7天
function avg(arr, newArr) {
  for(let i=0,len=arr.length; i<len; i++) {
    // 第一天和最后一天直接用当天的数据
    if(i==0||i==len-1) {
      newArr[i] = arr[i]
    } 
    // 第二天和倒数第二天取3天数据的平均值
    else if(i==1||i==len-2) {
      newArr[i] = Math.ceil((arr[i-1]+arr[i]+arr[i+1])/3)
    }
    // 第三天和倒数第三天取5天的平均值
    else if(i==2||i==len-3) {
      // ceil向上取整
      newArr[i] = Math.ceil((arr[i-2]+arr[i-1]+arr[i]+arr[i+1]+arr[i+2])/5)
    }
    else {
      newArr[i] = Math.ceil((arr[i-3]+arr[i-2]+arr[i-1]+arr[i]+arr[i+1]+arr[i+2]+arr[i+3])/7)
    }
  }
}

avg(value1, avg1);
avg(value2, avg2);


export {data, newDate, value1, value2, avg1, avg2}
