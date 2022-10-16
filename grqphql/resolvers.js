const Article = require("../model/article")

const resolvers = {
    Query:{
        articles: () =>{return Article.find({})},
        article: (parent, args) =>{return Article.findById(args.id)}
    },
    Mutation:{
        createArticle:(parent, args) =>{
            let article = new Article(args.articleInput)
        }
    }
};

module.exports = resolvers;