const classicFunction = function(a,b){
  return a+b;
};

const arrowFunction = (a,b) => a + b;

const arrowFunctionReturn = (a,b) => {

  const c = 100500;
  return c + a + b;
};












const someFunctionClassic = function (prop1) {

  return function () {

    return fetch(prop1)
  }
};

window.addEventListener('click', someFunction('http://test.com'));

someFunctionClassic('http://test.com')();


















const someFunction = prop1 => (event = false) => fetch(prop1);









