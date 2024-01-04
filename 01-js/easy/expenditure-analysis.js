/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const outPut = [];

  for (const payment of transactions) {
    let categorieExists = false;

    for (const objOfCategory of outPut) {
      if (objOfCategory.category === payment.category) {
        objOfCategory.totalSpent += payment.price;
        categorieExists = true;
        break;
      }
    }

    if (!categorieExists) {
      outPut.push({ category: payment.category, totalSpent: payment.price });
    }
  }
  return outPut;
}

module.exports = calculateTotalSpentByCategory;
