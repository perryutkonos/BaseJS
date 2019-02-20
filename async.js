


  const action = new Promise(resolve => {

    setTimeout(() => {
      resolve('http://test.com')
    }, 3000)
  });

  (async function () {
    const result = await action();
    const response = await fetch(result);
    const text = await response.text();

    console.log(text)
  })();

