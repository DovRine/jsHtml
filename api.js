const BASE_URL = "https://fakerapi.it/api/v1";


function getData(qty=1, callback, url, qs) {
    if (qty < 1 || qty > 1000 || `${qty}`.split("").includes(".")) {
      throw new Error("quantity must be an integer between 1 and 1000 inclusive");
    }
    qs = qs ? `&${qs}` : ''
    fetch(`${BASE_URL}/${url}?_quantity=${qty}&_locale=en_US${qs}`)
      .then((res) => res.json())
      .then((data) => callback(data));
  }
function getPeople(qty = 1, callback) {
    return getData(qty, callback, 'persons')
}

function getCompanies(qty = 1, callback) {
    return getData(qty, callback, 'companies')
}

function getBooks(qty=1, callback){
    return getData(qty, callback, 'books')
}

function getCreditCards(qty=1, callback){
    return getData(qty, callback, 'credit_cards')
}
function getUsers(qty=1, callback){
    return getData(qty, callback, 'users')
}
// getPeople(10, console.log)
// getCompanies(10, console.log)
// getBooks(10, console.log)
// getCreditCards(1, console.log)
// getUsers(1, console.log)