const mongoose = require("mongoose");

const dbConection = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN);
        console.log('BD Online');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la BD');
    }
}

module.exports = {
    dbConection
}