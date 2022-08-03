let numbers = process.argv.slice(2)
let beep = function(){
  process.stdout.write('\x07');
}
let scheduledBeep = function(delay){
   delay = Number(delay)
  if(!isNaN(delay) && delay > 0) {
    setTimeout(beep , delay*1000)
  }
}
for(let num of numbers) {
  scheduledBeep(num)
}

/*let time = 0; 
for(let i = 0; i <args; i++){
  time = time + args[i]
setTimeout(() => {
  process.stdout.write('\x07');
}, time)
}*/