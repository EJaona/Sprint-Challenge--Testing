const server = require("./server");

const port = process.env.PORT || 3300;
server.listen(port, _ => {
  console.log(`Running on port ${port}`);
});
