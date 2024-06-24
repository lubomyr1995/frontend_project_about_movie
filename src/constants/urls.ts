const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzU0OTBiNzg4MDg4ZDM2NTg0ZjlmMDM3YTYzZjU1OCIsInN1YiI6IjYyOTI2NmMzMGU2NGFmMDA2NDE4OGEyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YWi64dJV4oyYEIpgulh6YeH76Jjo_jX6GJrCdbV95dM'
const LIMIT_PAGES = 500;
const baseURL = 'https://api.themoviedb.org/3';
const baseImageURL = 'https://image.tmdb.org/t/p';

const auth = '/authentication';
const movies = '/discover/movie';
const genres = '/genre/movie/list';
const movie = '/movie';
const search = '/search/movie';
const image = '/w500';
const imageOriginal = '/original';
const trendingByWeek = '/trending/movie/week';
const urls = {
    authAsGuest: auth + '/guest_session/new',
    movies,
    genres,
    movie,
    search,
    trendingByWeek,
    backdrop: baseImageURL + imageOriginal,
    image: baseImageURL + image
};


export {
    TOKEN,
    baseURL,
    urls,
    LIMIT_PAGES
}