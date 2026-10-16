import 'dotenv/config'
import express from 'express'
const app = express();
const port = process.env.PORT || 4000;


app.get('/',(req,res) =>{
    res.send('Hello This is Priyanshu')
})

app.get('/api/jokes',(req,res) =>{
    const jokes = [
  {
    "id": 1,
    "tittle": "Why did the scarecrow win an award?",
    "content": "Because he was outstanding in his field."
  },
  {
    "id": 2,
    "tittle": "Why don't eggs tell jokes?",
    "content": "They might crack each other up."
  },
  {
    "id": 3,
    "tittle": "What do you call a fake noodle?",
    "content": "An impasta."
  },
  {
    "id": 4,
    "tittle": "Why did the bicycle fall over?",
    "content": "It was two-tired."
  },
  {
    "id": 5,
    "tittle": "What do you call cheese that isn't yours?",
    "content": "Nacho cheese."
  },
  {
    "id": 6,
    "tittle": "Why can't you trust stairs?",
    "content": "They're always up to something."
  },
  {
    "id": 7,
    "tittle": "What did one wall say to the other wall?",
    "content": "I'll meet you at the corner."
  },
  {
    "id": 8,
    "tittle": "Why did the math book look sad?",
    "content": "It had too many problems."
  },
  {
    "id": 9,
    "tittle": "What do you call a bear with no teeth?",
    "content": "A gummy bear."
  },
  {
    "id": 10,
    "tittle": "Why did the computer go to the doctor?",
    "content": "It had a virus."
  }
]
    res.send(jokes);
})

app.listen(port, ()=>{
    console.log(`server at http://localhost:${port}`)
})