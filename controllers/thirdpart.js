const request = require('request');

module.exports = (req, res) => {
    const {source,target,text} = req.body;
    request.get(
    'https://translation.googleapis.com/language/translate/v2',
    {
        qs: {
            key: process.env.KEY,
            source: source,
            target: target,
            q: text,
        },
    },
    (err, res, body) => {
        if (err) {
            res.send(err);
            return;
        }
        res.send(JSON.parse(body).data.translations[0].translatedText);
    }
);
}