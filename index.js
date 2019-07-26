const app = require("./server/server");
const port = process.env.PORT || 6660;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
