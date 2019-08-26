import axios from 'axios';

export const getDomainData = () => fetch('http://localhost:3001/api/getDomainData')
.then((data) => data.json())
.then((res) => res.data);

export const postDomainData = (name, description) => {
    axios.post('http://localhost:3001/api/addDomainName', {
      name,
      description
    });
  };