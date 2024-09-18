import { useEffect, useState } from 'react';
import axios from 'axios';

function Homepage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/homepage/')
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="text-center">
      <h1>{message || 'Loading...'}</h1>
    </div>
  );
}

export default Homepage;
