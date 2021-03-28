export const singleMovieCleaner = (data) => {
  let cleanedData = data.movie
  if(data.movie.backdrop_path.includes("NoPhotoAvailable")) {
    cleanedData = {...data.movie, backdrop_path: ""}
  } 
  if(!data.movie.runtime) {
    cleanedData = {...cleanedData, runtime: "unavailable"};
  }
  return cleanedData;
}