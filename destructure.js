const person = { name: "jack william", age: 17, job:'facebooker', gfName:'Ema Watson', address:"Dhaka University", phone:'0154874844', friends:'kolimulla'};

// const {phone,gfName} = person;

// console.log(phone,gfName);


const friends = ['sakib khan','Arman khan','salman khan', 'saruk khan'];

const [chotoFriend, nextfriend,...restFriends]= friends;
console.log(chotoFriend,nextfriend,restFriends);

const complexObject = {
    name:'aksh',
    info:{
        address:'kola bagan',
        leader:"tiger leader"
    }
}

const {leader} =complexObject.info;

console.log(leader);