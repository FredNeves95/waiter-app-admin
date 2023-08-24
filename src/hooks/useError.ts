import { useState } from 'react';

type Error = {
  field: string;
  message: string
}

export function useErrors() {
  const [errors, setErrors] = useState<Error[]>([]);

  const setError = ({ field, message }: Error) => {
    const errorAlreadyExists = errors.find((error) => error.field === field);

    if (errorAlreadyExists) {
      return null;
    }

    setErrors((prevState) => [
      ...prevState,
      { field, message },
    ]);
  };

  const removeError = (fieldName: string) => {
    setErrors((prevState) => prevState.filter(
      (error) => error.field !== fieldName,
    ));
  };

  const  getErrorMessageByFieldName = (fieldName: string) => {
    const errorMessage = errors.find((error) => error.field === fieldName)?.message;
    return  errorMessage ?? '';
  };

  return {
    setError,
    removeError,
    getErrorMessageByFieldName,
    errors,
  };
}
