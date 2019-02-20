

  const SuperClass = function (prop) {

    this.prop = prop;

    this.method = function(){
      console.log(this.prop)
    };
  };

  const parentObject = new SuperClass('someProp');
  parentObject.method();