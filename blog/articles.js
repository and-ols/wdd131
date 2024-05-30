const articles = [
   {
     id: 1,
     title: "Septimus Heap Book One: Magyk",
     date: "July 5, 2022",
     description:
       "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
     imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
     imgAlt: "Book cover for Septimus Heap 1",
     ages: "10-14",
     genre: "Fantasy",
     stars: "****"
   },
   {
     id: 2,
     title: "Magnus Chase Book One: Sword of Summer",
     date: "December 12, 2021",
     description:
       "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
     imgSrc:
       "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
     imgAlt: "Book cover for Magnus Chase 1",
     ages: "12-16",
     genre: "Fantasy",
     stars: "⭐⭐⭐⭐"
   }
];

// Grabs the HTML class book
const selectBook = document.querySelector('.book');

// The function to display the books
const displayBooks = (articles) => {

  // Separates out each article, taking care of each book selection one at a time
  articles.forEach((article) => {

    // Creates a section class and attaches the book class to it
    let book = document.createElement('section');
    book.classList.add('book');

    // Creates the h2 for the title and adds the text from the article
    let title = document.createElement('h2');
    title.textContent = article.title;

    // Creates the p element for the date and adds the text from the article
    let date = document.createElement('p');
    date.textContent = `Date: ${article.date}`;

    // Creates the p element for the description and adds the text from the article
    let description = document.createElement('p');
    description.textContent = article.description;

    // Creates the img element, creates the src, alt, and adds the width and height
    let img = document.createElement('img');
    img.setAttribute('src', article.imgSrc)
    img.setAttribute('alt', `Book Cover for ${article.name}`);
    img.setAttribute('width', 'auto');
    img.setAttribute('height', 'auto');

    // Creates the p element for the ages and adds the text from the article
    let ages = document.createElement('p');
    ages.textContent = article.ages;

    // Creates the p element for the genre and adds the text from the article
    let genre = document.createElement('p');
    genre.textContent = article.genre;

    // Creates the p element for the stars and adds the text from the article
    let stars = document.createElement('p');
    stars.textContent = article.stars;

    // Adds each element to the book section
    book.appendChild(title);
    book.appendChild(date); 
    book.appendChild(description);
    book.appendChild(img);
    book.appendChild(ages);
    book.appendChild(genre);
    book.appendChild(stars);
  
    // Adds all the books into the container
    selectBook.appendChild(book);
  });

}

displayBooks(articles);