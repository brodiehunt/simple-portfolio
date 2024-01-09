

export const validateName = (name) => {
  let error = '';
  if (name.length < 1) {
    return 'Name is required!'
  }
  return ''
}

export const validateEmail = (email) => {
  let error = '';
  if (email.length < 1) {
    error += 'Name is required. ';
  }

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!regex.test(email)) {
    return error += 'Email is invalid.';
  }

  return '';
}

export const validateMessage = (message) => {
  if (message.length < 1) {
    return 'Message is required!'
  }

  if (message.length < 10) {
    return 'Message is too short';
  }

  return '';
}

export const validateForm = (formState) => {
  return {
    name: validateName(formState.name),
    email: validateEmail(formState.email),
    message: validateMessage(formState.message)
  }
}