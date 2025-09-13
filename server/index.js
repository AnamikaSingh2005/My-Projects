const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();


app.use(cors());
app.use(express.json());


const URL = 'mongodb://127.0.0.1:27017/examprep'; 
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log(" MongoDB connected"))
.catch((err) => console.error(" MongoDB connection error:", err));


app.use('/api/admin', require('./routes/adminRoute'));
app.use('/api/sessions', require('./routes/sessionRoute'));  
app.use('/api/subjects', require('./routes/subjectRoute'));  
app.use('/api/exams', require('./routes/examinationRoute'));
app.use('/api/question/', require('./routes/questionbankRoute'));
app.use('/api/examinee/', require('./routes/examineeRoute'));
app.use('/api/message', require('./routes/messageRoute'));
app.use('/api/admindashboard/',require('./routes/adminDashboard'))

const PORT = 5000;
app.listen(PORT, () => {
    console.log(` Server running on http://127.0.0.1:${PORT}/`);
});
