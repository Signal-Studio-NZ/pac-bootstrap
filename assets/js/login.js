const validator = new JustValidate("#loginForm");

validator.addField(".login-inputfield", [
  {
    rule: "required",
    errorMessage: "Email cannot be empty. This is a required field.",
  },
  {
    rule: "email",
    errorMessage: "Please enter a valid email address.",
  },
]);
