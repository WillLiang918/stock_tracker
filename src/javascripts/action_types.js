// Encapsulate all the stock item action types into one constant. 
// This will make it easier to scale as different resources are introduced.
export const STOCK_ITEM_ACTION_TYPES = {
  FETCH_STOCK_ITEMS_REQUEST: 'FETCH_STOCK_ITEMS_REQUEST',
  FETCH_STOCK_ITEMS_SUCCESS: 'FETCH_STOCK_ITEMS_SUCCESS',
  FETCH_STOCK_ITEMS_FAILURE: 'FETCH_STOCK_ITEMS_FAILURE',

  FETCH_STOCK_ITEM_REQUEST: 'FETCH_STOCK_ITEM_REQUEST',
  FETCH_STOCK_ITEM_SUCCESS: 'FETCH_STOCK_ITEM_SUCCESS',
  FETCH_STOCK_ITEM_FAILURE: 'FETCH_STOCK_ITEM_FAILURE',

  ADD_STOCK_ITEM: 'ADD_STOCK_ITEM'
};