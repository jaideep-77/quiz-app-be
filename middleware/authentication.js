const admin = require('../firebase/firebase');

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization;

    try {
        const validToken = await admin.auth().verifyIdToken(token);

        if (validToken) {
            console.log('Authenticated');
            next();
        } else {
            res.sendStatus(403);
        }
    } catch (err) {
        console.log(err.message);
        res.sendStatus(403);
    }
}

module.exports = verifyToken;