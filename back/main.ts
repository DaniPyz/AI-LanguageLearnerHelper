import express from 'express';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import cors from 'cors';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//Middlewares
function AddAuth(req, res, next) {
  res.set('Authorization', `Bearer ${process.env.AIAPIKEY}`);
  next();
}

//OpenAi
const openai = new OpenAI({
  organization: 'org-z6MNdqA0UjGFNUP2kO4AeY8X',
  apiKey: process.env.AIAPIKEY,
});
async function main({ message, style }) {
  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: `
        You work like a language correction based on detected language. You need to correct words in ${style} style without adding new words or changing their sense maybe just changing their style to ${style}. 
        Return object with "changes" array of objects with fields: old,new that show what you have changed, you need to log each words with  or correction (add all changes even if you changed one latter and thay must correspond real changes made by you. If word letter equal letter do not add it to list  ) and the hole new  string called corrected_string if nothing to corect add initial string to corrected_string. Return must be json(ALWAYS RETUN JSON), like : 
        {
        corrected_string: "",
        changes: [
        {old:"" , new:""},
        ....
        }
        }`,
      },
      { role: 'user', content: message },
    ],
  });
  return completion.choices[0];
}

//requests
app.use(cors());
app.use(express.json());
app.use(AddAuth);
app.post('/sendMessage', (req, res) => {
  main(req.body).then((result) => {
    console.log(JSON.parse(result.message.content));
    let response = result.message.content;
    res.send(response);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
