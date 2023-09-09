const express = require("express");
const chats = require("./data/data");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Chat APP running in port ${PORT}</h1>`).status(200);
});

app.get("/api/chats", (req, res) => {
  res.send(chats).status(200);
});

app.get("/api/chat/:id", (req, res) => {
  const { id } = req.params;
  //   console.log(params.id);

  const singleChat = chats.find((chat) => chat._id === id);
  res.send(singleChat);
});

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
