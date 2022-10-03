export default function login_validate(values) {
  const errors = {};

  // if(!values.email) {
  //     errors.email = "Email is required";
  // }

  if (!values.username) {
    errors.username = "Username is required";
  } else if (values.username.length < 3) {
    errors.username = "Username must be at least 3 characters";
  } else if (values.username.includes(" ")) {
    errors.username = "Username cannot contain spaces";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  } else if (values.password.includes(" ")) {
    errors.password = "Password cannot contain spaces";
  }

  return errors;
}
export function registerValidate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.username) {
    errors.username = "Username is required";
  } else if (values.username.length < 3) {
    errors.username = "Username must be at least 3 characters";
  } else if (values.username.includes(" ")) {
    errors.username = "Username cannot contain spaces";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6 || values.password.length > 20) {
    errors.password = "Password needs to be 6 characters or more";
  } else if (values.password.includes(" ")) {
    errors.password = "Password cannot contain spaces";
  }

  if (!values.confirmpassword) {
    errors.confirmpassword = "A confirmation password is required";
  } else if (values.confirmpassword !== values.password) {
    errors.confirmpassword = "Passwords do not match";
  }
  return errors;
}
