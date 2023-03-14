const path = require('path');
// /folder/files.jpg \folder\files.jpg

function getMessages(req, res) {
    res.render('messages', {
        title: 'Goodbye Yesterday',
        friend: 'Onuh Oche'
    });

   // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'logo.jpg'));
    // res.send('<ul><li>Hello Onuh Oche</li></ul>');
}

function postMessages(req, res) {
    console.log('Updating messages...');
}

module.exports ={
    getMessages,
    postMessages
};