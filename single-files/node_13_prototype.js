/**
 * Created by Phil on 08/01/2016.
 */
function PersonClass(id,name,points){
    this.id=id;
    this.name=name;
    this.points=points;
    this.givePoints=function givePoints(person){
        console.log(this);
        console.log(person);
        person.points += 10;
        this.points -= 10;
        console.log(this.name + "gave 10 points to " + person.name);
        console.log(this);
        console.log(person);
    }
}


var person01 = new PersonClass(1,"Phil",100);
var person02 = new PersonClass(2,"Wendy",100);


person01.givePoints(person02);
person01.givePoints(person02);

// add a method to our class dynamically using PROTOTYPE
PersonClass.prototype.removePoints = function removePoints(person){
    console.log("Removing Points");
    console.log(this);
    console.log(person);
    person.points-=10;
    this.points+=10;
    console.log(this);
    console.log(person);
}

person01.removePoints(person02);
person01.removePoints(person02);


PersonClass.prototype.CONSTANT = 600;
console.log(person01.CONSTANT);
console.log(person02.CONSTANT);