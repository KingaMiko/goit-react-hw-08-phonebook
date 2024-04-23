import { useState } from 'react';
import Filter from 'bad-words';

const customList = [
  // Odmiany słowa "kurwa"
  'kurwa',
  'kurwie',
  'kurwą',
  'kurwę',
  'kurwo',
  'kurwy',
  'kurwach',
  'kurwami',
  'kurwiska',
  'kurwiszcze',
  'kurwiszon',
  'kurwiszony',
  'kurwiszonów',
  'kurwojady',
  'kurwojadów',

  // Odmiany słowa "chuj"
  'chuj',
  'chuja',
  'chujem',
  'chuju',
  'chujowi',
  'chujów',
  'chuje',
  'chujek',
  'chujami',
  'chujoza',
  'chujnia',
  'chujowy',
  'chujowa',
  'chujowe',

  // Odmiany słowa "pierdolić"
  'pierdolę',
  'pierdolić',
  'pierdolisz',
  'pierdoli',
  'pierdolą',
  'pierdolony',
  'pierdolona',
  'pierdolone',
  'pierdolęcie',
  'pierdolenie',
  'pierdolnięty',
  'pierdolnięta',
  'pierdolnięte',
  'spierdolić',
  'spierdolił',
  'opierdolić',
  'opierdol',
  'opierdoli',
  'opierdala',

  // Odmiany słowa "jebać"
  'jebać',
  'jeb',
  'jebie',
  'jebię',
  'jebiesz',
  'jebią',
  'jebany',
  'jebana',
  'jebane',
  'jebanka',
  'jebanko',
  'wyjebać',
  'wyjebie',
  'wyjebią',
  'wyjebiesz',
  'wyjebali',
  'zajebisty',
  'zajebista',
  'zajebiste',
  'zajebać',
  'zajebie',
  'zajebią',
  'zajebiesz',
  'zajebali',
  'zjebać',
  'zjebie',
  'zjebią',
  'zjebiesz',
  'zjebane',
  'dojebać',
  'dojebie',
  'dojebią',
  'dojebiesz',
  'dojebane',

  // Odmiany słowa "spierdalać"
  'spierdalaj',
  'spierdalać',
  'spierdalam',
  'spierdalają',
  'spierdalał',
  'spierdalała',
  'spierdalajcie',
  'spierdolić',
  'spierdoli',
  'spierdolą',
  'spierdolił',
  'spierdoliła',
  'spierdoliło',
  'spierdolisz',
  'spierdolicie',
  'pospierdalać',
  'pospierdalaj',
  'pospierdala',
  'pospierdali',

  // Odmiany słowa "pizda"
  'pizda',
  'pizdzie',
  'pizdą',
  'pizdu',
  'pizdy',
  'pizdom',
  'pizdach',
  'pizdami',

  // Inne wulgaryzmy i ich odmiany
  'cipa',
  'cipie',
  'cipą',
  'cipę',
  'cipy',
  'cipach',
  'cipami',
  'dupa',
  'dupie',
  'dupą',
  'dupę',
  'dupy',
  'dupach',
  'dupami',
  'huj',
  'huja',
  'hujowi',
  'hujem',
  'huju',
  'hujów',
  'huje',
  'hujami',
  'dziwka',
  'dziwki',
  'dziwce',
  'dziwkę',
  'dziwko',
  'dziwek',
  'dziwką',
  'dziwkami',
  'dziwkach',
  'cipa',
  'cipie',
  'cipą',
  'cipę',
  'cipy',
  'cipach',
  'cipami',
  'dupa',
  'dupie',
  'dupą',
  'dupę',
  'dupy',
  'dupach',
  'dupami',
  'huj',
  'huja',
  'hujowi',
  'hujem',
  'huju',
  'hujów',
  'huje',
  'hujami',

  // Błędne wersje literowe popularnych wulgaryzmów
  'kvrwa',
  'chvuj',
  'pierdvlę',
  'jebvny',
  'spierdvlaj',
  'pizdva',
];

const filter = new Filter({ list: customList });

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
        if (filter.isProfane(value)) {
          setErrors({
            ...errors,
            [name]: 'Please avoid using offensive language',
          });
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
      values.name.length > 20 ||
      filter.isProfane(values.name)
    ) {
      tempErrors.name =
        'Name must contain at least 3 letters and be no longer than 20 characters and not contain offensive language';
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
