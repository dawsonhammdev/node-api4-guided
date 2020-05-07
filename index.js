const server = require("./api/server.js");

const port = process.env.PORT || 5000;//this is how we make the port enviorment dynamic!
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
