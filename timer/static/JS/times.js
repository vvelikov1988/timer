var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
// alert ("this is an alert")
console.log(dateTime)
var spantag = document.getElementById("timer");
spantag.innerHTML = dateTime
console.log(spantag)