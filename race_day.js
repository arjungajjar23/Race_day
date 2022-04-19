let raceNumber = Math.floor(Math.random() * 1000);
const isEarly = true;
const age = 18;
if (age > 18 && isEarly){
  raceNumber+= 1000;
}
if (age > 18 && isEarly){
  console.log(`Dear early racer #${raceNumber}, Your race will start at 9:30 AM. Good Luck!`);
} else if (age > 18 && !(isEarly)) {
  console.log(`Dear racer ${raceNumber}, Your race will start at 11:00 AM.`); 
} else if (age < 18){
  console.log(`Dear racer ${raceNumber}, Your race will start at 12:30 AM.`);
} else if (age === 18){
  console.log(`Dear racer ${raceNumber}, please see the registration desk.`);
} 
else {
  console.log("Dear racer, thanks you for coming!");
}