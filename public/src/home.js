function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
 let arr = books.map(book => book.borrows[0]);

  let acc = 0
  for (let object of arr) {
    if (object.returned === false) {
      acc += 1;
    }
  }
  return acc;
}

function sliceToFive(arr) {
  return arr.slice(0, 5);
}

function getMostCommonGenres(books) {
  let obj = books.reduce((acc, book) => {
    if(acc[book.genre]) {
      acc[book.genre] += 1;
    } else {
      acc[book.genre] = 1;
    }
    return acc;
  } , {});

  let arr = [];
  for (let category in obj) {
    let count = obj[category];
    arr.push({name: category, count} );
  }
  let sorted = arr.sort((genreA, genreB) => genreB.count - genreA.count);
  return sliceToFive(sorted);
}


function getMostPopularBooks(books) {
  let booksArranged = books.sort((bookA , bookB) => bookB.borrows.length - bookA.borrows.length);
  
  let shortOrderedBooks = sliceToFive(booksArranged);

  let result = shortOrderedBooks.map (book => {
    let obj = { name: book.title, count: book.borrows.length};

    return obj;

  } )
  return result;
};


function getMostPopularAuthors(books, authors) {
  let obj = books.reduce((acc, book) => {
    let author = authors.find(author => author.id === book.authorId)
    let authorName = `${author.name.first} ${author.name.last}`
    if(acc[authorName]) {
      acc[authorName].count += book.borrows.length;
    } else {
      acc[authorName] =  {name: authorName, count: book.borrows.length};
    }
    return acc;
  } , {});
  let sortedAuths = Object.values(obj).sort((authsA, authsB) => authsB.count - authsA.count).slice(0,5)
  return sortedAuths
};

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
