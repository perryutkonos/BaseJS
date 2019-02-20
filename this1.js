window.a = 'globalA';

const objectOne = {
  a: 'objectOne'
};

const objectTwo = {
  a: 'objectTwo'
};


const functionOld = function () {
  console.log(this.a)
};

const functionArrow = () => {
  console.log(this.a)
};

objectOne.actionOld = functionOld;
objectTwo.actionOld = functionOld;

objectOne.actionArow = functionArrow;
objectTwo.actionArow = functionArrow;

/*objectOne.actionOld();
objectOne.actionArow();*/

/*objectTwo.actionOld();
objectTwo.actionArow();*/
