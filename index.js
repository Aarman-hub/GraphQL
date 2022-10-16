const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./grqphql/typeDefs');
const resolvers = require('./grqphql/resolvers');

const URL = 'mongodb://localhost:27017/graphql'


mongoose.connect(URL, {useNewUrlParser:true});
mongoose.connection.once('open', ()=>{
    console.log('Database Connected!')
});
mongoose.connection.on('error', ()=>{
    console.log('Database Connect worng!')
});

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({url})=>{
    console.log(`Server running at ${url}`);
});