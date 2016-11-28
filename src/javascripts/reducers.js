import { combineReducers } from 'redux'
import { STOCK_ITEM_ACTION_TYPES } from './action_types'

function stockItems(state = [], action) {
  switch (action.type) {
    case STOCK_ITEM_ACTION_TYPES.FETCH_STOCK_ITEMS_REQUEST:
      return Object.assign({}, state, {
        stockItems: [
          ...state.stockItems,
          {
            text: 'Fetches all the stock items via API'
          }
        ]
      });
    case STOCK_ITEM_ACTION_TYPES.FETCH_STOCK_ITEM_REQUEST:
      //  Fetch the stock item using item id
      return {};
    case STOCK_ITEM_ACTION_TYPES.ADD_STOCK_ITEM:
      return [
        ...state,
        {
          ...action
        }
      ];
    default:
      return state;
  }
}

function user(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const stockApp = combineReducers({
  stockItems,
  user
});

export default stockApp;