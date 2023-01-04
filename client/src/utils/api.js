// Local server url

const realURL = "https://kingpong-server.netlify.app/.netlify/functions/api";
const devURL = "http://localhost:9000/.netlify/functions/api";

export const API_URL = realURL;

// export const API_URL = "http://localhost:8080";

// Urls to be used in Axios calls

export const PLAYERS_API = `${API_URL}/players`;

export const GAMES_API = `${API_URL}/games`;

export const CHALLENGES_API = `${API_URL}/challenges`;

export const TOURNAMENTS_API = `${API_URL}/tournaments`;
