const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(cors())
mongoose.connect('mongodb+srv://pawan:pawan@cluster0.5uowf.mongodb.net/graphql?retryWrites=true&w=majority',{ useNewUrlParser: true })

mongoose.connection.once('open', () => {
    console.log('connected to db')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => { console.log('listening at 4000') })