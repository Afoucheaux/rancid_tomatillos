const baseURL = 'https://rancid-tomatillos.herokuapp.com/api/v2';
   
export const getSingleMovieData = (id) => {
  const apiData = [fetch(`${baseURL}/movies/${id}`), fetch(`${baseURL}/movies/${id}/videos`)];

  return Promise.all(apiData)
  .then(responses => Promise.all(responses.map(response => response.json())))
  }

 export const getMovieData = () => {
   return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
   .then(response => response.json())
 }
