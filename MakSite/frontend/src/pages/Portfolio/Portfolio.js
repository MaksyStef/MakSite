import { useEffect, useState } from 'react';
import axios from 'axios';

function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('/api/portfolio')
      .then((response) => {
        setProjects(response.data.projects);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Portfolio</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Portfolio;
