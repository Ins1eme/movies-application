const app = require('./app')
const port = process.env.port | 5000;

app.listen(port, _ => {
    console.log(`Server started on port: ${port}`)
})