const admin = require('../firebase/firebase');

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization;

    try {
        const validToken = await admin.auth().verifyIdToken(token);

        if (validToken) {
            console.log('Authenticated');
            console.log(token);
            next();
        } else {
            res.json({ message: 'Unvalid token' });
        }
    } catch (err) {
        console.log(err.message);
        res.json({ message: 'Error occured during authentication' });
    }
}

module.exports = verifyToken;