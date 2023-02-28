const { graphqlHTTP } = require('express-graphql') ;
const express = require('express') ;
const schema = require('./schema/schema.js');

const app = express();
const port = 8080;

app.use('/graphql', graphqlHTTP ({
    schema,
    graphiql:true
}))

app.listen(port, ()=>console.log(`Server is listening on port http://localhost:${port}`))

