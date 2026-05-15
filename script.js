class mathFunctions {

     constructor(a,b) {
     this.a = a
     this.b = b
     }


     add()  {
          return this.a +  this.b;
     }

     subtract()  {
          return this.a - this.b;
     }

     multiply()  {
          return this.a * this.b;
     }

     divide()  {
          return this.a / this.b;
     }
}

let iwkms = new mathFunctions(666, 333);

console.log(iwkms.add(), iwkms.subtract(), iwkms.multiply(), iwkms.divide());   

class greetings {

     constructor(name){
          this.name = name;
     }

english(){
     return  "Hello " + this.name
}

spanish(){
     return  "Hola " + this.name
}

french(){
     return  "Bonjour " + this.name
}

arabic(){
     return   "Marhaba " +this.name
}

//Bonus//
mandarinChinese(){
     return   "Nǐ hǎo " +this.name
}

}

let greet = new greetings('Samaira');

console.log(greet.english());
console.log(greet.spanish());
console.log(greet.french());
console.log(greet.arabic());
console.log(greet.mandarinChinese());
