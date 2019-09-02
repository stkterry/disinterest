const app = require("./server/server");
const port = process.env.PORT || 6660;

let http = require('http');
setInterval(function() {
    http.get("http://disinterest-aa.heroku.com");
}, 3600000)


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
