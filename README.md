# Race_day

Here’s how our race registration works for the race day. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). 
They can register early or late. Runners are assigned a race number and start time based on their age and registration.


Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

--> Adult registrants run at 9:30 am or 11:00 am.
--> Early adults run at 9:30 am.
--> Late adults run at 11:00 am.
--> Youth registrants run at 12:30 pm (regardless of registration).
--> But we didn’t plan for runners that are exactly 18! We’ll handle that at the registration desk. Have fun!!!


--> How does random numbers variable works?

Math.random() returns a value between 0 (inclusive) and 1 (exclusive).

In order to make this set of numbers range from 0 (inclusive) to 1000 (exclusive) we can multiply the returned value by 1000.

Finally, to ensure we only have whole numbers from 0 to 999 we can round down using Math.floor().

let raceNumber = Math.floor(Math.random() * 1000);
