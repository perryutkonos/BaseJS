function someFunc() {

  if(true){

    var variable1 = 'DEPRECATED!!!';
    variable2 ='DEPRECATED!!!';

    let variable3 = 'Good!';
    const variable4 ='Good!';
  }

  console.log(variable1); // 'DEPRECATED!!!'
  console.log(variable2); // 'DEPRECATED!!!'
  console.log(variable3); // variable3 is not defined
  console.log(variable4); // variable3 is not defined

}

someFunc();