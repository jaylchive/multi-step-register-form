import { useContext, useState } from 'react';

import Button from '../ui/Button';
import InputForm from '../ui/InputForm';
import SectionTitle from '../ui/SectionTitle';

import { FormDataContext } from '../store/FormDataProvider';

function SectionOne() {
  const { formData, formDispatch } = useContext(FormDataContext);
  const { page: currentPage } = formData;

  const [inputData, setInputData] = useState({ name: '', email: '' });
  const [errorState, setErrorState] = useState({ name: false, email: false });

  function checkIsValidInput(data) {
    const isValid = Boolean(inputData[data].trim());

    setErrorState(prevErrorState => {
      return { ...prevErrorState, [data]: !isValid };
    });

    return isValid;
  }

  function handleNameInput(e) {
    const value = e.target.value;

    setInputData(prevData => {
      return { ...prevData, name: value };
    });

    value.trim().length > 1 && checkIsValidInput('name');
  }

  function handleEmailInput(e) {
    const value = e.target.value;

    setInputData(prevData => {
      return { ...prevData, email: value };
    });

    value.trim().length > 1 && checkIsValidInput('email');
  }

  function handleNextSection() {
    const nameError = checkIsValidInput('name');
    const emailError = checkIsValidInput('email');

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;

    const isValidEmail = regex.test(inputData.email);

    setErrorState(prevErrorState => {
      return {
        ...prevErrorState,
        email: !isValidEmail,
      };
    });

    const isValidForm =
      !nameError || !emailError || !isValidEmail ? false : true;
    const page = isValidForm ? currentPage + 1 : currentPage;

    formDispatch({
      type: 'REGISTER',
      payload: {
        name: inputData.name,
        email: inputData.email,
        page,
      },
    });
  }

  return (
    <>
      <SectionTitle marginLarge={true}>Register</SectionTitle>
      <InputForm
        type="text"
        label="Name"
        error={errorState.name}
        value={inputData.name}
        placeholder="enter your name"
        onChange={handleNameInput}
      />
      <InputForm
        type="email"
        label="Email"
        error={errorState.email}
        value={inputData.email}
        placeholder="example@gmail.com"
        onChange={handleEmailInput}
        required
      />
      <Button onClick={handleNextSection}>Continue</Button>
    </>
  );
}

export default SectionOne;
