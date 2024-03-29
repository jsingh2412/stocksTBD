// app.js
const express = require('express');
const app = express();

// Define a route to execute the Python script
app.get('/run-python', (req, res) => {
    // Execute the Python script
    const { spawn } = require('child_process');
    const pythonProcess = spawn('python', ['hello.py']);

    // Handle output from the Python script
    pythonProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    pythonProcess.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        res.send('Python script executed successfully.');
    });
});

app.get('/', (req, res) => {
    res.send('Hello World!'); // Replace with your desired response
});
// Start the Express server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
