// const reqPopulare = async () => {
//   const respJson = await fetch(
//     'https://api.themoviedb.org/3/trending/movie/day?api_key=3634b3d3506b5f3dc1d4858dbd6d21ce',
//   )
//     .then(resp => resp.json())
//     .catch(e => console.log(e));
//   console.dir(respJson);
// };
// reqPopulare();
// reqPopulare();
const API_KEY = 'e8ad9fce8be376ae39b35f64abca58d4';
const BASE_URL = 'https://api.themoviedb.org';
class NewsApiService {
    page = 1;
    // constructor() {
    // }
    fetchMovies = async (query, currentPage)=>{
        try {
            // currentPage ??= this.page || this.page === currentPage;
            currentPage ??= 1;
            const url = `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&include_adult=false&query=${query}&page=${currentPage}`;
            const response = await fetch(url);
            // this.page = currentPage;
            const movies = await response.json();
            const status = movies.results.length === 0 ? true : false;
            if (status) throw ReferenceError('0 films');
            return movies;
        } catch (error) {
            console.log(error.message);
        }
    };
}
const api = new NewsApiService();
api.fetchMovies('123213213213');
api.fetchMovies('Spider', 5);

//# sourceMappingURL=index.017db2f2.js.map
