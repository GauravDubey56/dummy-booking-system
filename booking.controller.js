const BookingSystem = require('./booking.service');
const createCustomError = require('./CustomError');


exports.validateSlot = async (req, res) => {
    const {start, end} = req.body;
    const bookingSystem = new BookingSystem();
    bookingSystem.startTimes = [600, 720, 840];
    bookingSystem.endTimes = [660, 750, 900];
    if (!start || !end) {
       createCustomError(400, 'Invalid input'); 
    }
    const check = bookingSystem.bookSlot(start, end);
    if (check.status) {
        return res.status(200).json({
            message: "Valid slot"
        })
    } else {
        createCustomError(400, 'No slots available at the requested time'); 
    }
}
