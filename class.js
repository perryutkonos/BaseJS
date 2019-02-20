class SuperClass  {

  constructor(prop){
    this.prop = prop;
  };

  method(){
    console.log('parent method',this.prop)
  };

  arrowMethod = () => {

  };

  static staticMethod(){
    console.log('static method')
  };

};

class SuperPuperClass extends SuperClass {

  constructor(prop, puperProps){
    super(prop);
    this.puperProps = puperProps;
  };

  method(){
   super.method();
   console.log('child method',this.puperProps);
  }
};

const parentObject = new SuperClass('parent');
const childObject = new SuperPuperClass('parent','child');

parentObject.method();
childObject.method();

SuperPuperClass.staticMethod();