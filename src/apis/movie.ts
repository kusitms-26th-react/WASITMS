import axios from "axios";

const { VITE_API_KEY } = import.meta.env;
const BASE_URL = "https://api.themoviedb.org/3";

export const getMovies = async () => {
  const response = await axios.get<NowPlaying>(
    `${BASE_URL}/movie/now_playing?api_key=${VITE_API_KEY}&region=kr&page=1&language=en-US`
  );
  return response.data;
};

export interface NowPlaying {
  dates: Dates;
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export interface Dates {
  maximum: Date;
  minimum: Date;
}

export interface Result {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
