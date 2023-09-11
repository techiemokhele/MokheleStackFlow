//connect with backend
import { Client, cacheExchange, fetchExchange } from "urql";

const client = new Client({
  url: "https://landshut.stepzen.net/api/letsdebugcode/__graphql", // GraphQL API endpoint
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: {
    headers: {
      Authorization:
        "ApiKey landshut::stepzen.net+1000::7312959fae71619e64646664c20e5af93681f57210e8de5f2380ee6ca564af18",
    },
  },
});

export default client;
