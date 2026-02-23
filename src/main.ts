import { app } from "./app";

app.listen(8000, () => {
  console.log("Server start on port 8000!");
});

// Health check endpoint for testing
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});
