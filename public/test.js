// const url =
//   "https://wrapapi.com/use/chadbowen248/comics/comics/latest?wrapAPIKey=Z9JmPx0za31dMxIkLQJr88cFyIpeJCfJ&year=2017&month=7";

// function transformArr(arr) {
//   const objects = [];
//   for (let i = 0; i < arr[0].length; i =+ 1 ) {
//     objects.push({
//       title: arr[0][i],
//       image: arr[1][i],
//       date: arr[2][i],
//       url: arr[3][i]
//     });
//   }
//   return objects;
// }
// fetch(url)
//   .then(res => res.json())
//   .then(data => data.data)
//   .then(final => Object.values(final))
//   .then(arr => transformArr(arr))
//   //   set state here
//   .then(blob => console.log(blob));
