function handleFormSubmit(event, callback) {
  event.preventDefault(); // Prevent default form submission

  // Get form data (example using FormData)
  const formData = new FormData(event.target);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  // You can add validation here if needed

  // Call the callback function with the form data
  callback(data);
}

export { handleFormSubmit };