import { useEffect, useState } from 'react';

const App = () => {
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [next, setNext] = useState([0])
  const [currentIndex, setCurrentIndex] = useState(1)


  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex + 1) % username.length;
    })
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 1 ? username.length - 1 : prevIndex - 1;
    })
  }

  useEffect(() => {
    const fetchData = async () => {

      try {

        setLoading(true)
        setError(false)

        const response = await fetch("https://jsonplaceholder.typicode.com/users/");

        if (!response.ok)
          throw new Error("Error: Data is not featched properly");

        const data = await response.json();
        setUsername(data);

      } catch (error) {
        setError(error.message || "Error somewhere ")

      } finally {
        setLoading(false)
      }
    };

    fetchData();
  }, []);

  if (loading) return <h1 className='text-black text-2xl'>loading state......</h1>
  if (error) return <h1 className='text-red text-2xl'>Error: {error}</h1>
  if (username.length == 0) return null

  const currentUser = username[currentIndex]
  return (
    <>

      <div>
        <span>{currentIndex} of {username.length}</span>
        <div>Name: {currentUser.name}</div>
        <div>Username: {currentUser.username}</div>

        <button onClick={handlePrev}>previous</button><br />
        <button onClick={handleNext}>Next</button>
      </div>

    </>
  );
};

export default App;
