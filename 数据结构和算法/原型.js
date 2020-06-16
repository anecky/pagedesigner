function Dog(name) {
    this.name = name; 
  }
  
  // 请只修改这条注释以下的代码
  Dog.prototype = {
    numLegs: 2, 
    eat: function() {
      console.log("nom nom nom"); 
    }, 
    describe: function() {
      console.log("My name is " + this.name); 
    }
  };
  let dog = new Dog("22")
  console.log(dog.name)
  console.log(dog.typeof(Dog))