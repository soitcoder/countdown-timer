var da=document.querySelector('.days');
var ho=document.querySelector('.hours');
var mi=document.querySelector('.mins');
var se=document.querySelector('.seconds')


function countdown(){
  const targetDate= new Date('1/1/2022');
  var currentDate= new Date();
  var diff=(targetDate-currentDate);
  var days=Math.floor(diff/(1000*3600*24));
  var hours=Math.floor(((diff/(1000*3600*24))-days)*24);
  var minutes=Math.floor(((((diff/(1000*3600*24))-days)*24)-hours)*60);
  var seconds=Math.floor(((((((diff/(1000*3600*24))-days)*24)-hours)*60)-minutes)*60);

  da.innerHTML=days;
  ho.innerHTML=hours;
  mi.innerHTML=minutes;
  se.innerHTML=seconds;
}
countdown();
setInterval(countdown,1000);
