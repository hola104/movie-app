const apiDiscover = (pageNumber) => {
  // console.log(value);
  const _apiBase = `https://api.themoviedb.org/3//discover/movie?api_key=1fb573444dbb7bcecf932088d33fa5db&page=${pageNumber}`;

  return fetch(`${_apiBase}`).then((res) => res.json());
};

export default apiDiscover;

// `https://api.themoviedb.org/3//discover/movie?api_key=1fb573444dbb7bcecf932088d33fa5db&language=en-EN&query=${value}`

//   "https://api.themoviedb.org/3/movie/550?api_key=1fb573444dbb7bcecf932088d33fa5db"
// https://api.themoviedb.org/3//discover/movie?api_key=1fb573444dbb7bcecf932088d33fa5db
