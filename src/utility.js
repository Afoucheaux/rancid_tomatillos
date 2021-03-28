export const trailerCleaner = (data) => {
  console.log(data);
  let trailer;
  if(data) {
    return false
  } else {
    trailer = `https://www.youtube.com/embed/${data.key}`;
    return trailer;  
  }
}