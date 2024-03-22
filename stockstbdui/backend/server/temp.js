const axios = require("axios");

// Function to send a request to your backend endpoint
const sendRequest = async () => {
  try {
    const response = await axios.post("http://localhost:3001/send-sms", {
      phoneNumber: "9136380361",
      message: "Your prediction task has been completed for today.",
    });
    console.log(response.data); // Log the response from the backend
  } catch (error) {
    console.error("Error sending request:", error);
  }
};

// Call the function to send the request
sendRequest();
