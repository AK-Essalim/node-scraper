import { useContext } from 'react';
import { ScrapeContext } from './ScrapeContext';
import Table from './Table';
import Chart from './Chart';

export default function Data() {
  const { scrapes } = useContext(ScrapeContext);
  console.log(scrapes);
  return (
    <div>
      <h2>Your twitter:</h2>
      <Chart scrapes={scrapes.twitter} />
      <Table scrapes={scrapes.twitter} />
      <h2>Your Instagram:</h2>
      <Chart scrapes={scrapes.instagram} />
      <Table scrapes={scrapes.instagram} />
    </div>
  );
}
