const url = 'https://goodreads-books.p.rapidapi.com/search?q=harry&page=1';
const options = {
  method: "GET",
  headers: {
    "X-API-KEY": "27befe88c3ceb5637b63f8c5763c65fb8e436e4b11edd03a63897a8d6bab2609",
  },
};

fetch(url, options)
  .then((response) =>
    response.json().then((result) => {
      console.log(result.data); // Your API data
      console.log(`Cost: $${result.meta.cost}`);
      console.log(`Remaining: $${result.meta.remaining_budget}`);
    })
  )
  .catch((error) => {
    console.log(error);
  });