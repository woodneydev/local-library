function findAccountById(accounts, id) {
 const results = accounts.find(account => account.id === id);
 return results;
}

function sortAccountsByLastName(accounts) {
 let results = accounts.sort((account1, account2) => (account1.name.last.toLowerCase() > account2.name.last.toLowerCase()) ? 1 : -1 );
 return results;
}

function getTotalNumberOfBorrows(account, books) {
  let result = books.reduce( (acc, book) => {
    let borrows = book.borrows;
    let numberOfIdAppearances = 0;
    for (let objects of borrows) {
      if (objects.id === account.id) {
        numberOfIdAppearances += 1;
      }
    }
    acc+= numberOfIdAppearances;
    return acc;

  } , 0)
  return result;
};
// could possible use helper function
function getBooksPossessedByAccount(account, books, authors) {
  let booksCheckedOutByAccount = books.filter( book => {
    let borrows = book.borrows;
    for (let object of borrows) {
      if (object.id === account.id) {
        return true;
      } else {
        return false;
      }
    }
  });
  let result = booksCheckedOutByAccount.map(book => {
    for (let object of authors) {
      if (object.id === book.authorId) {
        let newBookFormat = book;
        newBookFormat.author = object;
        return newBookFormat;
      }
    }
  })
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
