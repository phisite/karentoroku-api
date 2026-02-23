"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
app_1.app.listen(8000, () => {
    console.log("Server start on port 8000!");
});
// Health check endpoint for testing
app_1.app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});
