import { useState } from 'react';

export const useForm = initialValues => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (name === 'number') {
      if (
        !value.match(
          /(\+48)?\s?(\d{3}-\d{3}-\d{3}|\d{3}\s\d{3}\s\d{3}|\d{9,11})/
        )
      ) {
        setErrors({
          ...errors,
          [name]: 'Invalid phone number',
        });
      } else {
        let newErrors = { ...errors };
        delete newErrors[name];
        setErrors(newErrors);
      }
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  const validate = () => {
    let tempErrors = {};
    if (!values.name) {
      tempErrors.name = 'Name is required';
    }
    if (
      !values.number.match(
        /(\+48)?\s?(\d{3}-\d{3}-\d{3}|\d{3}\s\d{3}\s\d{3}|\d{9,11})/
      )
    ) {
      tempErrors.number = 'Invalid phone number';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  return [values, handleChange, resetForm, validate, errors];
};
