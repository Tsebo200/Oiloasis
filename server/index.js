const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const oilRoute = require('./routes/oils.jsx')
const userRoute = require('./routes/users.jsx')

const multer = require('multer')
const path = require('path')
const { error } = require('console')
const UserModel = require('./models/Users')
// app.use(express.static('public'))

require('dotenv/config')

const app = express()

app.use(cors({
    origin: 'http://localhost:3001'
}));

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(oilRoute)
app.use(userRoute)

// const storage = multer.diskStorage({
//     destination: (req, res, cb) => {
//         cb(null, 'public/images')
//     },
//     filename: (req, res, cb) => {
//         cb(null, file.fieldName + "," + Date.now() + path.extname(file.originalname))
//     }
// })

// const upload = multer({
//     storage: storage
// })

// app.post('/upload', upload.single('file'), (req, res) => {
//     console.log(req.file)
//     UserModel.create({image: req.file.filename})
//     .then(result => res.json(result))
//     .catch(err => console.log(err))
// })

// app.get('/getImage', (req, res) =>{
//     UserModel.find()
//     .then(users => res.json(users))
//     .catch(err => res.json(err))
// })

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Oiloasis',
}).then(() => console.log("Connected to Oiloasis DB"))
    .catch((err) => {
        console.log("No Connection. Reason: " + err);
    });

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => { console.log(`Server has Started on port:${PORT}`)});