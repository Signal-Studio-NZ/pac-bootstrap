const validation = new JustValidate("#registrationForm");

validation
  .addField('[name="email"]', [
    {
      rule: "required",
      errorMessage: "Email is required",
    },
    {
      rule: "email",
      errorMessage: "Email is not valid",
    },
  ])
  .addField('[name="firstName"]', [
    { rule: "required", errorMessage: "First name is required" },
  ])
  .addField('[name="lastName"]', [
    { rule: "required", errorMessage: "Last name is required" },
  ])
  .addField('[name="phone"]', [
    { rule: "required", errorMessage: "Phone number is required" },
    { rule: "number", errorMessage: "Only numbers allowed" },
  ])
  .addField('[name="address"]', [
    { rule: "required", errorMessage: "Address is required" },
  ])
  .addField('[name="suburb"]', [
    { rule: "required", errorMessage: "Suburb is required" },
  ])
  .addField('[name="city"]', [
    { rule: "required", errorMessage: "City is required" },
  ])
  .addField('[name="rural"]', [
    { rule: "required", errorMessage: "Rural is required" },
  ])
  .addField('[name="postcode"]', [
    { rule: "required", errorMessage: "Postcode is required" },
    { rule: "number", errorMessage: "Only numbers allowed" },
  ])
  .addField('[name="country"]', [
    { rule: "required", errorMessage: "Country is required" },
  ])
  .onSuccess((event) => {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // You can handle form data here (for example, log the values)
    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());
    console.log("Form Submitted!", values);

    // Example: Show success message or redirect
    alert("Form submitted successfully!");
  });
