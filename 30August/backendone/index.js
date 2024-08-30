// const express = require('express');
// const app = express();
// const port = 3000;
// app.use(express.json());

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
//   });

const express = require('express')

const app = express()

const PORT = 4000;

app.get("/",(req,res) => {
  res.send("Hello!!!!!!");
})

app.listen(PORT,() =>{
  console.log(`server running on ${PORT}`);
})