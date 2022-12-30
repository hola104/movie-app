const ApiService = () => {
  const _apiBase =
    "https://api.themoviedb.org/3//discover/movie?api_key=1fb573444dbb7bcecf932088d33fa5db";

  return fetch(`${_apiBase}`).then((res) => res.json());

  // if (!res.ok) {
  //   throw new Error(`Ошибка ${res.status}`);
  // }
  // return await res.json();

  // async getAllMovies() {
  //   // const res = await this.getResource(
  //   //   `//discover/movie?api_key=1fb573444dbb7bcecf932088d33fa5db`
  //   // );
  //   return res.results;
  // }

  // getSpecificMovie(id) {
  //   return this.getResource(
  //     `/movie/${id}?api_key=1fb573444dbb7bcecf932088d33fa5db`
  //   );
  // }
};

export default ApiService;

// const api = new ApiService();

// api.getAllMovies().then((body) => {
//   console.log(body);
// });

// api.getAllMovies().then((movies) => {
//   movies.forEach((i) => {
//     console.log(i.original_title, i.release_date, i.overview);
//   });
// });

// api.getSpecificMovie(411).then((i) => {
//   console.log(i.original_title);
// });

//   "https://api.themoviedb.org/3/movie/550?api_key=1fb573444dbb7bcecf932088d33fa5db"
// https://api.themoviedb.org/3//discover/movie?api_key=1fb573444dbb7bcecf932088d33fa5db
