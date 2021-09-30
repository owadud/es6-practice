class Parent{
    constructor() {
        this.fatherName = "Jahir";
    }
}
class Child extends Parent{
    constructor(name){
        super(); //for excess parent class
        this.name = name;

    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Arnorld");
console.log(baby.getFullName());