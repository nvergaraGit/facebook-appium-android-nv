export const validatePassword = (password: string) => {
  if (password.length < 4) {
    return false;
  }
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){4,20}$/;
  if (!passwordRegex.test(password)) {
    return false;
  }
  return true;
};
