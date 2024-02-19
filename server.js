const corsAnywhere = require('cors-anywhere');

const port = 8080;

corsAnywhere.createServer({
  originWhitelist: [], // Leere Whitelist für uneingeschränkten Zugriff
  port,
}).listen(port, () => {
  console.log(`CORS Anywhere proxy listening on port ${port}`);
});
