// import { useState } from 'react';

export default function FeedbackForm() {
  // No need for just greeting the user with an alert()!
  // const [name, setName] = useState('');

  function handleClick() {
    // no need**
    // setName(prompt('What is your name?'));

    // ask user for name or he/she would be guest!
    let name = prompt("What is your name?") || "guest";

    // greet the user
    alert(`Hello! ${name}`);
  }

  return <button onClick={handleClick}>Greet</button>;
}
