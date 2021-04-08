function findAuthorById(authors, id) {
  return authors.find( author => author.id === id);
}

function findBookById(books, id) {
  return books.find( book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const firstArr = books.filter(book => book.borrows[0].returned === false);
  const secondArr = books.filter(book => book.borrows[0].returned === true);
  return [firstArr, secondArr];
}

function getBorrowersForBook(book, accounts) {
  const allTransactions = book.borrows;
  const arrOfTransactions = allTransactions.map( transaction => {
    for (let account of accounts) {
      if (account.id === transaction.id) {
        return {...transaction, ...account}
      }
    }
  })
  const [one, two, three, four, five, six, seven, eight, nine, ten ] = arrOfTransactions
  let arrToTen= [one, two, three, four, five, six, seven, eight, nine, ten ]
  return arrToTen;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
