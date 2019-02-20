window.a = 'globalA';

const object = new function () {

  this.a = 'localA';

  this.action1 = function () {

    setTimeout(function () {
      console.log('action1',this.a)
    }, 1)
  };

  this.action2 = function () {
    setTimeout(() => {
      console.log('action2',this.a)
    }, 1)
  };

  this.action3 = function () {
    console.log('action5',this.a)
  };

  this.action4 = () => {
    console.log('action6',this.a)
  };

  this.action5 = () => {
    setTimeout(this.action3, 1)
  };

  this.action6 = () => {
    setTimeout(this.action4, 1)
  };
};

//object.action1();

//object.action2();
//object.action3();
//object.action4();
object.action5();
/*object.action6();*/
