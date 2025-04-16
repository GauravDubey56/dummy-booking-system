const express = require('express');
const BookingHandlers = require('./booking.controller');
const app = express();

app.use(express.json());

const asyncUtil = (handler) => {
    const fn = async (req, res) => {
        try {
            await handler(req, res);
        } catch (error) {
            const statusCode = error.code || 500;
            const message = error.message || "Internal server error";
            return res.status(statusCode).json({
                message
            });
        }
    }
    return fn;
}

app.post('/validateSlot', asyncUtil(BookingHandlers.validateSlot));

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});