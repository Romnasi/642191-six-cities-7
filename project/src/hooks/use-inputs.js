import {useRef, useState} from 'react';

const useInputs = (onSubmit) => {
  const [isError, setIsError] = useState(false);
  const [isError400, setIsError400] = useState(false);

  const loginRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (passwordRef.current.value.trim() !== '') {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }).catch(() => setIsError400(true));
    } else {
      setIsError(true);
    }
  };

  return [handleSubmit, isError, isError400, loginRef, passwordRef];
};

export default useInputs;
