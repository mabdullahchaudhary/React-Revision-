import { useEffect, useState } from 'react';

export default function App() {
  const [username, setUsername] = useState('Loading.....');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/2').then((response) => response.json()).then((data) => {
        setUsername(data);
      });
  }, []);
  return (
    <div>
      <h1>Welcome ...</h1>
      <h2>Username {username.name}</h2>
    </div>
  );
}
