const formHasEmptyFields = formData => {
  let hasEmptyField = false;

  const data = Object.values(formData);
  for (let input of data) {
    if (!input) {
      hasEmptyField = true;
      return hasEmptyField;
    }
  }

  return hasEmptyField;
};

export default formHasEmptyFields;
