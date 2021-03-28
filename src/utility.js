export const trailerCleaner = (data) => {
    if (data.videos.length === 0 ) {
      return data.videos = [ {key: '000000'} ];
    } else {
      return data.videos
    }
}
