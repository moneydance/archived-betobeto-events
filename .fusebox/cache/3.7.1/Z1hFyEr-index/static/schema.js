module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst graphql_1 = require(\"graphql\");\nexports.default = new graphql_1.GraphQLSchema({\n    query: new graphql_1.GraphQLObjectType({\n        name: 'Query',\n        fields: {\n            message: {\n                type: graphql_1.GraphQLString,\n                resolve() {\n                    return 'hero';\n                },\n            },\n        },\n    }),\n});\n",
dependencies: ["graphql"],
sourceMap: {},
headerContent: undefined,
mtime: 1555986512621,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
