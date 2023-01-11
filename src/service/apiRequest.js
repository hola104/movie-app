const apiService = (value, page) => {
  // console.log(value);
  const _apiBase = `https://api.themoviedb.org/3/search/movie?api_key=1fb573444dbb7bcecf932088d33fa5db&language=en-EN&query=${value}&page=${page}`;

  return fetch(`${_apiBase}`).then((res) => res.json());
};

export default apiService;

// `https://api.themoviedb.org/3//discover/movie?api_key=1fb573444dbb7bcecf932088d33fa5db&language=en-EN&query=${value}`

//   "https://api.themoviedb.org/3/movie/550?api_key=1fb573444dbb7bcecf932088d33fa5db"
// https://api.themoviedb.org/3//discover/movie?api_key=1fb573444dbb7bcecf932088d33fa5db
