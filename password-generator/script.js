const Input = document.getElementById('password');

const generateRandomPassword = () => {
  const Value = Math.random().toString(36).slice(-12);
  return (Input.value = Value);
};
