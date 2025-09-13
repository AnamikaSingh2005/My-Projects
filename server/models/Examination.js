const mongoose = require('mongoose');

const ExaminationSchema = new mongoose.Schema({
  title: {
     type: String,
      required: true
    },
  date: {
     type: String,
      required: true
     },
  time: {
    type: String,
     required: true
    },
  duration: {
     type: String,
     required: true
     },
  totalMarks: {
     type: String,
      required: true
    },
  passingMarks: {
    type: String,
     required: true
    },
  sessionId: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'session', required: true
     },
  status: {
    type: String,
     default: 'Scheduled',
      enum: ['Scheduled', 'Draft', 'Closed']
     },
  questionDistribution: [
    {
      subject: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'subject',
          required: true
        },
      questionCount: {
        type: Number,
         required: true
         }
    }
  ],
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }]
}, { timestamps: true });

module.exports = mongoose.model('Examination', ExaminationSchema);