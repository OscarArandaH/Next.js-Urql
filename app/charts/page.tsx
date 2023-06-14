'use client'

import { urqlClient } from '../../urqlClient';
import { Provider, useQuery, gql } from 'urql';


import Chart from 'chart.js/auto';
import { CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, Colors } from 'chart.js';
Chart.register( CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, Colors);

import { Bar, Pie } from 'react-chartjs-2';

interface Country {
  name: string;
  capital: string;
  currency: string;
  phone: number;
}

interface Continent {
  name: string;
  countries: Country[];
}

const Query1 = gql`
  query {
    continents {
      name
      countries {
        name
        capital
        currency
        phone
      }
    }
  }
`;

const ChartsPage = () => {
  const [result] = useQuery({ query: Query1 });
  const { data, fetching, error } = result;

  if (fetching) return <p>Cargando...</p>;
  if (error) return <p>Error</p>;

  const continents = data.continents.map((continent: Continent) => continent.name);
  const countries = data.continents.map((continent: Continent) => continent.countries.length);

  const labels = continents;
  const datasets = [
    {
      label: 'Dataset Bar',
      data: countries
    },
  ];

  return (
    <div>
      <h1>Resultado de la Query</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <table>
              <thead>
                <tr>
                  <th>Continente</th>
                  <th>Cantidad de Paises</th>
                </tr>
              </thead>
              <tbody>
                {data.continents.map((continent: Continent) => (
                  <tr key={continent.name}>
                    <td>{continent.name}</td>
                    <td>{continent.countries.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='col-6'>
            <Bar data={{ labels, datasets }} />
            <Pie data={{ labels, datasets }} />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default function PageWithUrql () {
  return (
    <Provider value={urqlClient}>
      <ChartsPage />
    </Provider>
  );
};