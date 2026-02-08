async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    displayErrorMessage(error.message); // Call function to display error
    return null; // Or handle the error as needed, e.g., return a default value
  }
}

function displayErrorMessage(message) {
  // Create an element to display the error message
  const errorDiv = document.createElement('div');
  errorDiv.style.color = 'red';
  errorDiv.textContent = `Error: ${message}`;

  // Append the error message to the body or a specific element
  document.body.appendChild(errorDiv); // Or append to a specific element
}

// Example usage:
// fetchData('https://api.example.com/data')
//   .then(data => {
//     if (data) {
//       console.log('Data:', data);
//       // Process your data here
//     } else {
//       console.log('Fetch failed.'); // Already handled by error message display
//     }
//   });