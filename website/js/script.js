const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector("#search-btn");
const fantasyButton = document.querySelector("#fantasy-btn");
const hpButton = document.querySelector("#hp-btn");
const shakespeareButton = document.querySelector("#shakespeare-btn");
const booksList = document.querySelector(".books-list");

const searchBooks = async (searchTerm) => {
  if (!searchTerm) {
    alert("Please enter a keyword");
    return;
  }

  // Fetch book data from the API using the search term
  const url = 'https://student-api-proxy.onrender.com/api/goodreads-books.p.rapidapi.com/search?q=harry&page=1';
  const options = {
  method: "GET",
  headers: {
    "X-API-KEY": "27befe88c3ceb5637b63f8c5763c65fb8e436e4b11edd03a63897a8d6bab2609",
    },
  };
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