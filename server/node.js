import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({  optionsSuccessStatus: 200, origin: '*' }));



app.get('/users', async (_, res) => {

  return res.json([{id:1, name:"Denis"},{id:2, name:"Lesha"},{id:3, name:"Danik"}]);
});

app.post('/pay_success', async (req, res) => {

  const name = req.body.us_name;
  const title = req.body.us_title;
  const days = req.body.us_days;

  return res.json({ success: true, command: `givedonate ${name} ${title} ${days}d` });

});



app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  return console.log('server ok');
});
