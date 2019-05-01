module.exports = { contents: "\"use strict\";\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst http_1 = require(\"http\");\nconst subscriptions_transport_ws_1 = require(\"subscriptions-transport-ws\");\nconst graphql_1 = require(\"graphql\");\nconst express_graphql_1 = __importDefault(require(\"express-graphql\"));\nconst express_1 = __importDefault(require(\"express\"));\nconst schema_1 = __importDefault(require(\"~/schema\"));\nconst app = express_1.default();\napp.use('/api/ql', express_graphql_1.default({\n    schema: schema_1.default,\n    graphiql: true,\n}));\nconst server = new http_1.Server(app);\nsubscriptions_transport_ws_1.SubscriptionServer.create({\n    schema: schema_1.default,\n    execute: graphql_1.execute,\n    subscribe: graphql_1.subscribe,\n}, {\n    server,\n    path: '/api/ws',\n});\nserver.listen(4000, () => {\n    console.log('Server started here -> http://0.0.0.0:4000');\n});\n",
dependencies: ["http","subscriptions-transport-ws","graphql","express-graphql","express","~/schema"],
sourceMap: {},
headerContent: undefined,
mtime: 1555479770253,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
