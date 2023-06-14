// Se importa createClient, depudExchange, cacheExchange, fetchExchange de urql
import { createClient, cacheExchange, fetchExchange } from 'urql';

// se crea la constante urqlClient que es igual a createClient
export const urqlClient = createClient({
  url: 'https://countries.trevorblades.com/',
  exchanges: [cacheExchange, fetchExchange],
});