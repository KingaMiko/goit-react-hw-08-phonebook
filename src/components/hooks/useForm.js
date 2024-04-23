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
      if (value === '') {
        const newErrors = { ...errors };
        delete newErrors[name];
        setErrors(newErrors);
      } else if (
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

    if (name === 'name') {
      if (value === '') {
        const newErrors = { ...errors };
        delete newErrors[name];
        setErrors(newErrors);
      } else {
        const letterCount = (value.match(/[a-zA-Z]/g) || []).length;
        if (letterCount < 3 || value.length > 20) {
          setErrors({
            ...errors,
            [name]:
              'Name must contain at least 3 letters and be no longer than 20 characters',
          });
        } else {
          let newErrors = { ...errors };
          delete newErrors[name];
          setErrors(newErrors);
        }
      }
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  const validate = () => {
    let tempErrors = {};
    if (
      !values.name ||
      (values.name.match(/[a-zA-Z]/g) || []).length < 3 ||
      values.name.length > 20
    ) {
      tempErrors.name =
        'Name must contain at least 3 letters and be no longer than 20 characters';
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
