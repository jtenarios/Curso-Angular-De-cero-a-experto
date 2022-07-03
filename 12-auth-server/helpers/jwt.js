const jwt = require('jsonwebtoken');

const generarJWT = (uid, name) => {

    const payload = { uid, name };
    console.log('payload', uid, name);

    return new Promise((resolve, reject) => {

        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '24h'
        }, (err, token) => {
            console.log('if-else');
            if (err) {
                // TODO MAL
                console.log('TODO MAL');
                console.log(err);
                reject(err);
            } else {
                // TODO BIEn
                console.log(' TODO BIEn');
                resolve(token)
            }
        })

    });
}

module.exports = {
    generarJWT
}