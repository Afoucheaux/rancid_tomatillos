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
export const trailerCleaner = (data) => {
    if (data.videos.length === 0 ) {
      return data.videos = [ {key: '000000'} ];
    } else {
      return data.videos
    }
}
