const express = require('express');
const path =require('path');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

// const friendsController = require('./controllers/friends.controller');

// const messagesController = require('./controllers/messages.controller');


const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


const PORT = 4000;
// const friends = [
//     {id: 0,
//     name: 'Onuh Oche'},
//     {id: 1,
//     name: 'Onuh Sunday'},
//     {id: 2,
//     name: 'Onuh Grace'},
//     {id: 3,
//     name: 'Onuh Rebecca'},
// ];

app.use ((req, res, next)=> {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`);
    
}); 

app.use('/site',express.static(path.join(__dirname,'public')));
app.use(express.json());

// const friendsRouter = express.Router();


// app.post('/friends', friendsController.postFriend
//  (req, res) => {
//     if (!req.body.name){
//        return res.status(400).json({
//             error: 'Missing friend name'
//     }
//     );
// }
//     const newFriends = {
//         name: req.body.name,
//         id: friends.length
//     };
//     friends.push(newFriends);

//     res.json(newFriends);

// app.get('/friends', friendsController.getFriends
// (req, res) =>{
//     res.json(friends);
// }
// );


// app.get('/friends/:friendId', friendsController.getFriend
//  (req, res) => {
//     const friendId = Number(req.params.friendId); 
//         const friend = friends[friendId];
//         if (friend) {
//             res.status(200).json(friend);
//         } else {
//             res.status(404).json({
//                 error: 'Friend does not exist'
//             });
//         }
//     }
    // );

app.get('/', (req, res)=> {
    res.render('index', {
        title: 'Everyone Loves Food',
        caption: 'Food is good, Isn\'t it?'
    })
})
app.use('/friends',friendsRouter);
app.use('/messages',messagesRouter);

// app.get('/messages', messagesController.getMessages 
// // (req, res) =>{
// //     res.send('<ul><li>Hello World</li></ul>');
// // }
// );

// app.post('/messages', messagesController.postMessages
// //  (req, res)=>{
// //     console.log('Updating messages...');
// // }
// );

app.listen(PORT, () =>{
    console.log(`Listening on ${PORT}...`);
});