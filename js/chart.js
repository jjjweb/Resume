/**
 * Created by J on 2016/10/23.
 */
function Chart(ele){
  this.ctx = ele.getElementsByTagName('canvas')[0].getContext('2d');
  this.degreeFinal = parseFloat(ele.getElementsByClassName('percent')[0].innerHTML)*360/100-90;
  this.degreeStart = -90;
  this.timer = function(){
    this.ctx.lineWidth=15;
    this.ctx.strokeStyle='#35AFBA';
    var interval=setInterval(function(){
      this.degreeStart+=3;
      this.ctx.beginPath();
      this.ctx.arc(120,120,100,-Math.PI/2,this.degreeStart*Math.PI/180);
      this.ctx.stroke();
      if(this.degreeStart>=this.degreeFinal){
        clearTimeout(interval);
      }
    }.bind(this),10)
  }
}
var charts = document.getElementsByClassName('chart');
var chart = [];
for(var i = 0;i < charts.length; i++){
  chart.push(new Chart(charts[i]));
}
console.dir(chart);
for(var i in chart){
  chart[i].timer();
}