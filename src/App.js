import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [personsState, setPersonsState] = useState({
    person: [
      { name: 'Raj', age: 29 },
      { name: 'Raji', age: 27 },
      { name: 'Raju', age: 28 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // alert('Was Clicked!');
    // Do Not Do This: this.state.person[0].name = "Pradeep";
    setPersonsState({
      person: [
        { name: 'Pradeep', age: 29 },
        { name: 'Pratheep', age: 27 },
        { name: 'Pradip', age: 28 }
      ]
    });
  };


  return (
    <div className="App">
      <h1>Hi, I'm a react app.</h1>
      <p>This is really working..</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.person[0].name} age={personsState.person[0].age} />
      <Person name={personsState.person[1].name} age={personsState.person[1].age}>My Hobbies : Racing </Person>
      <Person name={personsState.person[2].name} age={personsState.person[2].age} />
    </div>
  );

  /**
   * JSX
   */
  //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, I\'m a react app.'))
}

export default app;