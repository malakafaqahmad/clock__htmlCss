let hours = document.getElementById('hours');
let minutes = document.getElementById('mins');
let secondes = document.getElementById('secs');



setInterval(()=>{
    let currentTime = new Date();
console.log(currentTime);
// console.log(currentTime.getHours())

hours.innerHTML = (currentTime.getHours()<10?'0':'') + currentTime.getHours();
minutes.innerHTML = (currentTime.getMinutes()<10?'0':'') + currentTime.getMinutes();
secondes.innerHTML = (currentTime.getSeconds()<10?'0':'') + currentTime.getSeconds();

},1000)



