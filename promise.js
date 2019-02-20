
  const action = new Promise((resolve, reject) => {

    setTimeout(()=>{
      resolve('http://google.com')
    },3000)
  });

  action.then(result => {
    console.log(result)
  });

  action
    .then(result => fetch(result))
    .then(response => response.text())
    .then(text => {
      console.log(text)
    })
    .catch(error => {
      console.log(error)
    });