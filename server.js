const corsAnywhere = require('cors-anywhere');

const port = 8080; // Modify

corsAnywhere.createServer({
  originWhitelist: [], // Empty whitelist for unrestricted use (not recommended or prohibited by some hosters)
  port,
}).listen(port, () => {
  console.log(`CORS Anywhere proxy listening on port ${port}`);
});
