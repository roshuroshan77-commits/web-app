const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { answer, date, time, food } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your@gmail.com',
        pass: 'your-app-password'
      }
    });

    await transporter.sendMail({
      from: 'your@gmail.com',
      to: 'roshuroshan77@gmail.com',
      subject: 'New date response',
      text: `Yes or No: ${answer}\nDate: ${date || 'Not selected'}\nTime: ${time || 'Not selected'}\nFood: ${food || 'Not selected'}`
    });

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
