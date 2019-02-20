// упрощенная инициализация объектов

const a = 1;
const b = 2;
const c = 3;

const object = { a, b, c };


// деструктуризация

const object2 = {
  prop1: 2,
  prop2: 2,
  prop3: 3,
};

const { prop1, prop2, prop3 } = object2;

const array = [100, 200, 300];
const [item1, item2, item3] = array;

// параметры в функциях
const func = ({ prop1, prop2, prop3 }) => {
  console.log(prop1, prop2, prop3)
};
func({ prop1, prop3, prop2 });

// spread
const object3 = { ...object2 };
const { prop1: newProp1, prop2: newProp2, ...other } = object3;

const object4 = {
  propNew: newProp1,
  ...object2
};

// string templates

const string = `Hello ${item1}`;

//Массивы
const updatedArr = array.map(item => item + 1);

const checkAll = array.every(item => item > 100);

const checkOne = array.some(item => item === 100);

const filteredArr = array.filter(item => item === 100);

const neededItem = array.find(item => item === 100);

array.forEach(item => {
  //myAction
});



