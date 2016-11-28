// TODO: Separate the stock item actions into a separate file when needed.
import fetch from 'isomorphic-fetch'
import {STOCK_ITEM_ACTION_TYPES} from './action_types'

// Returns the stock items using the user's api key.
// Consider this:
//  - owners might want to be able to group and sort their items.
//  - include stock images (:thumbnail)
//  - pagination of stock items.
//    - reduces the stress of the server
//    - improves response time (if cached, we still don't need such a large payload)
//    - improves render speed with less objects to iterate through
export function fetchStockItems(user_api_key) {
  // Mock data
  let json = {
    stockItems: [
      {
        name: 'Broken Pen',
        description: 'The best pen you will ever own!',
        price: '2.99',
        taxable: true
      },
      {
        name: 'Canned Water',
        description: 'Same great taste but in a can.',
        price: '3.99',
        taxable: false
      },
      {
        name: 'Paper Candles',
        description: 'Fastest burning candles in the market!',
        price: '0.59',
        taxable: true
      }
    ]
  };

  return receiveStockItems(json);

  // return function(dispatch) {
  //   dispatch(requestStockItems(ownerId));
  //
  //   return fetch(`http://www.stock.com/api/v1/items`, {
  //     user_api_key: user_api_key
  //   })
  //       .then(response => response.json())
  //       .then(json =>
  //           dispatch(receiveStockItems(json))
  //       )
  // };
}

// Returns the stock item using the item's uuid
// Consider this:
//  - owners should be able to edit an item
//  - multiple images (carousel)
//  - a stock item should have a quantity count
export function fetchStockItem(itemId) {
  return {
    type: STOCK_ITEM_ACTION_TYPES.FETCH_STOCK_ITEM,
    itemId: itemId
  }
}

// Allows the user to fetch data independently
export function requestStockItems(apiKey) {
  return {
    type: STOCK_ITEM_ACTION_TYPES.FETCH_STOCK_ITEMS_REQUEST,
    apiKey: apiKey
  }
}

// Allows the user to fetch data independently
export function requestStockItem(itemId) {
  return {
    type: STOCK_ITEM_ACTION_TYPES.FETCH_STOCK_ITEM_REQUEST,
    itemId: itemId
  }
}

export function receiveStockItems(json) {
  return {
    type: STOCK_ITEM_ACTION_TYPES.FETCH_STOCK_ITEM_SUCCESS,
    stockItems: json.stockItems.map(stockItem => stockItem)
  }
}

export function addStockItem(item) {
  return {
    type: STOCK_ITEM_ACTION_TYPES.ADD_STOCK_ITEM,
    name: item.name,
    description: item.description,
    date: item.date,
    price: item.price,
    taxable: item.taxable
  }
}

// TODO: Implement toggleTaxable action
// export function toggleTaxable(itemId) {
//
// }