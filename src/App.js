import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
//import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person'

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

const app = props => {
  const [personsState, setPersonsState] = useState({
    person: [
      { id: 1, name: 'Raj', age: 29 },
      { id: 2, name: 'Raji', age: 27 },
      { id: 3, name: 'Raju', age: 28 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  const [showPersonState, setShowPersonState] = useState({
    showPersons: false
  });

  console.log(personsState, otherState);

  // const switchNameHandler = (newName) => {
  //   // alert('Was Clicked!');
  //   // Do Not Do This: this.state.person[0].name = "Pradeep";
  //   setPersonsState({
  //     person: [
  //       { name: newName, age: 29 },
  //       { name: 'Pratheep', age: 27 },
  //       { name: 'Pradip', age: 28 }
  //     ]
  //   });
  // };

  const nameChangedHandler = (event, id) => {
    let personIndex = personsState.person.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...personsState.person[personIndex]
    };

    //const person = Object.assign({}, personsState.person[personIndex]);

    person.name = event.target.value;

    let persons = [...personsState.person];
    persons[personIndex] = person;

    // alert('Was Clicked!');
    // Do Not Do This: this.state.person[0].name = "Pradeep";
    setPersonsState({
      // person: [
      //   { name: 'Pradeep', age: 29 },
      //   { name: event.target.value, age: 27 },
      //   { name: 'Pradip', age: 28 }
      // ]

      person: persons
    });
  };

  const togglePersonsHandler = () => {
    let doesShow = showPersonState.showPersons;
    setShowPersonState({
      showPersons: !doesShow
    });
  }

  const deletePersonHandler = (personIndex) => {
    //let persons = personsState.person;
    let persons = [...personsState.person];
    persons.splice(personIndex, 1);
    setPersonsState({ person: persons });
  }

  // const styles = {
  //   backgroundColor: 'green',
  //   color: 'white',
  //   font: 'inherit',
  //   border: '1px solid blue',
  //   padding: '8px',
  //   cursor: 'pointer',
  //   ':hover': {
  //     backgroundColor: 'lightgreen',
  //     color: 'black'
  //   }
  // };

  let persons = null;

  if (showPersonState.showPersons) {
    persons = (
      <div >
        {personsState.person.map((person, index) => {
          return <Person
            click={() => deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => nameChangedHandler(event, person.id)} />
        })}
        {/* <Person
          name={personsState.person[0].name}
          age={personsState.person[0].age} />
        <Person
          name={personsState.person[1].name}
          age={personsState.person[1].age} click={switchNameHandler.bind(this, "PradeepRaj")}
          changed={nameChangedHandler}>My Hobbies : Racing </Person>
        <Person
          name={personsState.person[2].name}
          age={personsState.person[2].age} /> */}
      </div>
    );

    // styles.backgroundColor = 'red';
    // styles[':hover'] = {
    //   backgroundColor: 'salmon',
    //   color: 'black'
    // }
  }

  //let classes = ['red','bold'];
  let classes = [];

  if (personsState.person.length <= 2) {
    classes.push('red'); //classes = ['red']
  }

  if (personsState.person.length <= 1) {
    classes.push('bold'); //classes = ['red', 'bold']
  }


  return (
    // <StyleRoot>
    <div className="App">
      <h1>Hi, I'm a react app.</h1>
      <p className={classes.join(' ')}>This is really working..</p>
      {/* <button
        style={style}
        onClick={() => switchNameHandler("Pradeep!")}>Switch Name</button> */}
      {/* <button
        style={styles}
        onClick={() => togglePersonsHandler()}>Toggle Persons</button> */}
        {/* <StyledButton
        alt = {showPersonState.showPersons}
        onClick={() => togglePersonsHandler()}>Toggle Persons</StyledButton> */}

        <button className ="button"
        alt = {showPersonState.showPersons}
        onClick={() => togglePersonsHandler()}>Toggle Persons</button>

      {/* <div >
        <Person
          name={personsState.person[0].name}
          age={personsState.person[0].age} />
        <Person
          name={personsState.person[1].name}
          age={personsState.person[1].age} click={switchNameHandler.bind(this, "PradeepRaj")}
          changed={nameChangedHandler}>My Hobbies : Racing </Person>
        <Person
          name={personsState.person[2].name}
          age={personsState.person[2].age} />
      </div> */}

      {persons}
    </div>
    // </StyleRoot>
  );

  /**
   * JSX
   */
  //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, I\'m a react app.'))
}

//export default Radium(app);
export default app;