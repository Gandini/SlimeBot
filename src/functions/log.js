/*jshint esversion:6, camelcase: true*/
module.exports = (msg, type) => {
    if (!type) { 
        type = 'Log';
    }
    console.log(`[${type}] ${msg}`);
};
