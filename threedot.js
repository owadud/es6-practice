const ages = [14,11,13,17];
const ages2 = [15,16,19];

const allAges = ages.concat(ages2);
// const allAges2=[ages,ages2];
const allAges2=[...ages,...ages2];
// console.log(allAges2);

const taka=[650,450,120];
const maximum = Math.max(...taka);
console.log(maximum);