import { useState } from 'react';

const useForm = (callback) => {
  const [item, setItem] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    if (item) {
      e.target.reset();
      callback('post', item);
      setItem(item);
    }
  }

  const handleInputChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  }

  return [
    handleInputChange,
    handleSubmit
  ]
}

export default useForm;


