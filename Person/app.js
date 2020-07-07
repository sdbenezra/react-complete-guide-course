import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Siggy', age: 30 },
      { name: 'Josh', age: 14 },
      { name: 'Becca', age: 14 },
    ],
  });

  const [otherState, setOtherState] = useState('Some other value');
  const [thirdState, setThirdState] = useState('something else')

  console.log(personsState, otherState, thirdState);

  const switchNameHandler = () => {
    // console.log('Button was clicked')
    setPersonsState({
       persons: [
        { name: 'Siggy', age: 30 },
        { name: 'Josh', age: 14 },
        { name: 'Becca', age: 15 },
      ],
    });
  };
  
  return (
    <div className="App">
      <h1>Hi! I am the React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>Hi it's me!</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Legos</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
};




export default App;
