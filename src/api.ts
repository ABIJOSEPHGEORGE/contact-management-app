import axios from 'axios';
import { useQuery } from 'react-query';

const baseURL = 'https://disease.sh/v3/covid-19';

export interface CountryData {
  updated: number;
  country: string;
  countryInfo: {
    _id: number;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    flag: string;
  };
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  continent: string;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
}


export interface HistoricalData {
  cases: Record<string, number>,
  deaths: Record<string, number>,
  recovered: Record<string, number>
}

export interface WorldData {
  todayCases: number;
  todayDeaths: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  testsPerOneMillion: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
}

export const fetchWorldData = () => axios.get<WorldData>(`${baseURL}/all`).then((response) => response.data);

export const fetchCountriesData = () =>
  axios.get<CountryData[]>(`${baseURL}/countries`).then((response) => response.data);

export const fetchHistoricalData = () =>
  axios.get<HistoricalData>(`${baseURL}/historical/all?lastdays=all`).then((response) => response.data);

export const useWorldData = () => useQuery('worldData', fetchWorldData);
export const useCountriesData = () => useQuery('countriesData', fetchCountriesData);
export const useHistoricalData = () => useQuery('historicalData', fetchHistoricalData);
