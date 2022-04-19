let raceNumber = Math.floor(Math.random() * 1000); // Decalring random number generator variable!
const isEarly = true; // declare a variable to determine whether a participant has early registred for the race.

const age = 19; //declare the age of the racer.

if (age > 18 && isEarly){ // we will provide racenumbers starting from 1000 to earlybirds. 
  raceNumber+= 1000;
}
if (age > 18 && isEarly){ // Conditional loop for every type of registration that we are accepting and deviding the participants for their respective time. 
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

//end of code //