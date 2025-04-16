const createCustomError = (code, message) => {
    throw {
        code, message
    };
}
module.exports = createCustomError;