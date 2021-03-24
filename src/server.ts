import express from 'express'
import cors from 'cors'


const app = express();
app.use(cors())
app.use(express.json())



app.get('/', (req, res) => {
    res.send("Server is up and running")
})

app.listen(process.env.PORT || 3333, () => console.log(`🎈🎈 Server started on port ${process.env.PORT || '3333'}!`));