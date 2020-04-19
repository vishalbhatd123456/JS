 //call back function
  function greeting(name)
  {
      console.log('hello'+name)
  }

  function processUserInput(callback)
  {
      var name = console.log('please enter your name:');
      callback(name);
  }

  processUserInput(greeting);
