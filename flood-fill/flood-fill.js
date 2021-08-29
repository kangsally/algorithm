/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const arr = new Array(image.length);
  for (let i=0; i<arr.length; i++) {
  arr[i] = new Array(image[0].length).fill(0);
}
  const search = (sr, sc) => {
    console.log(sr, sc, image[sr][sc])
    if(arr[sr][sc]){
      return;
    }
    const currentColor = image[sr][sc];
    arr[sr][sc] = 1;
    
    if (newColor !== currentColor) {
      image[sr][sc] = newColor;
    }
    if (
      image[sr - 1] !== undefined &&
      image[sr - 1][sc] !== undefined &&
      image[sr - 1][sc] === currentColor
    ) {
      search(sr - 1, sc);
    }
    if (
      image[sr + 1] !== undefined &&
      image[sr + 1][sc] !== undefined &&
      image[sr + 1][sc] === currentColor
    ) {
      search(sr + 1, sc);
    }
    if (image[sr] !== undefined && image[sr][sc - 1] !== undefined && image[sr][sc - 1] === currentColor) {
      search(sr, sc - 1);
    }
    if (image[sr] !== undefined && image[sr][sc + 1] !== undefined && image[sr][sc + 1] === currentColor) {
      search(sr, sc + 1);
    }
  };
  search(sr, sc);
  return image;
};
