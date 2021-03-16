class Terni{
    constructor(age){
        this.age=age;
    }

    experiment(){
        return this.age>20?"he is more than twenty":"he is not adult" //you've to return something
    }



}

var boy= new Terni(35);
console.log(boy.experiment());