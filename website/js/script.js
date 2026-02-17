const searchInput = document.querySelector(".search-input");
const fantasyButton = document.querySelector("#fantasy-btn");
const hpButton = document.querySelector("#hp-btn");
const shakespeareButton = document.querySelector("#shakespeare-btn");
const booksList = document.querySelector(".books-list");

const loadBooksByKeyword = async (keyword) => {
  if (!keyword) {
    alert("Please enter a keyword");
    return;
  }
  // Fetch book data from the API using the search term
  const url = `https://student-api-proxy.onrender.com/api/goodreads-books.p.rapidapi.com/search?q=${encodeURIComponent(keyword)}&page=1`;
  const options = {
  method: "GET",
  headers: {
    "X-API-KEY": "27befe88c3ceb5637b63f8c5763c65fb8e436e4b11edd03a63897a8d6bab2609",
    },
  };

  booksList.innerHTML = "Loading...";

  const response = await fetch(url, options);
  const result = await response.json();
  const books = result.data; // Your API response

  booksList.innerHTML = "";

  if (!books || books.length === 0) {
    booksList.innerHTML = "<li>No results found.</li>";
    return;
  }

  books.forEach((book) => {
    const listItem = `
      <li>
        <strong>${book.title}</strong>
        (${book.publicationYear ?? "N/A"})
        — Rating: ${book.rating ?? "N/A"}/5
      </li>
    `;
    booksList.insertAdjacentHTML("beforeend", listItem);
  });

  searchInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const keyword = searchInput.value.trim();
    loadBooksByKeyword(keyword);
  }
});


  console.log(books);
};

  

loadBooksByKeyword("shakespeare");