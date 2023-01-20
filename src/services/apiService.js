const apiUrl = "https://api.openweathermap.org/data/2.5";

// process - eto globalnij object v kotorom hranitsja informacija o servere
// svoijstvo .env hranit v sebe vse peremennie nashei sredi
// Peremennie mi hranim v faile '.env'
// Peremennie mi nazivaem s slova 'REACT_APP_' dlja togo 4tobi react ih v sebja podtjanul
const apiKey = process.env.REACT_APP_API_KEY;

export const defaultSearchParams = {
  lat: 58.5953,
  lon: 25.0136,
  units: "metric",
  lang: "en",
};
// Dlja zaprosov na server ispolzuetsja asinhronnie funkcii .
// Oni prednaznacheni dlja raboti s Promise(obewanijami).
// zapros 'fetch' vozvrashaet Promise so statusom 'pending'.
// Blagodarja kluchevomu slovu 'await' mi govorim nashemu serverum 4to mi ozhidaem otvet.
// POsle poluchenija otveta s servera,Promise poluchaet status libo 'fullfield' libo 'rejected'
// 4to ozna4aet libo vse horowo , libo proizowla owibka.
// obrabotka statusov proishodit v try {} catch {};
// 'await' mozhet ispolzovatsha tolko v funkcii asinhronnoi 'async' i tolko s Promise.
export async function getWeather(data = null) {
  const params = new URLSearchParams({
    ...(data || defaultSearchParams),
    appid: apiKey,
  });
  return await fetch(`${apiUrl}/weather?${params}`);
}

export async function getForecast(data = null) {
  const params = new URLSearchParams({
    ...(data || defaultSearchParams),
    appid: apiKey,
  });
  return await fetch(`${apiUrl}/forecast?${params}`);
}