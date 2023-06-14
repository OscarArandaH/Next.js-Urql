'use client'

import { Provider, useClient } from 'urql';
import { useQuery, gql } from 'urql';

import { urqlClient } from '../../urqlClient';

interface Country {
  name: string;
  capital: string;
  phone: number;
}

const CountryQuery = gql`
  query {
  countries{
    name
    capital
    phone
  }
}
`;

const CountriesPage = () => {
  const client = useClient();
  const [result] = useQuery({ query: CountryQuery });
  const { data, fetching, error } = result;

  if (fetching) return <p>Cargando...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <h1>Lista de países</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Capital</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {data.countries.map((country: Country) => (
            <tr key={country.name}>
              <td>{country.name}</td>
              <td>{country.capital}</td>
              <td>{country.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const PageWithUrql = () => {
  return (
    <Provider value={urqlClient}>
      <CountriesPage />
    </Provider>
  );
};

export default PageWithUrql;
