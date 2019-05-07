import {createStore, AnyAction, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

// Actions
const FETCH_START = 'FETCH_START';
const FETCH_SUCCES = 'FETCH_SUCCES';
const SWIPE_LEFT = 'SWIPE_LEFT';
const SWIPE_RIGHT = 'SWIPE_RIGHT';
const RESET_SWIPE = 'RESET_SWIPE';

// Action creators to use in components
export const fetchRandomUser = () => (dispatch) => {
    dispatch({type: FETCH_START});
  
    fetch("https://randomuser.me/api/")
      .then((response: Response) => response.json())
      .then((randomUser: ApiTypes.Result) => {
          dispatch({type: FETCH_SUCCES, payload: randomUser.results[0]})
          dispatch({type: 'RESET_SWIPE'})
      })
      .catch((error: any) => console.error(error));
  }
  export const swipeLeft = () => ({
      type: SWIPE_LEFT
  });
  export const swipeRight = () => ({
      type: SWIPE_RIGHT
  });

// Reducer
const reducer = (state: State, action: AnyAction) => {
  switch(action.type) {
    case FETCH_START:
      return {...state, loading: true};
    case FETCH_SUCCES:
      return {loading: false, response: action.payload};
    case SWIPE_LEFT:
      return { ...state, swipeStatus: 'LEFT' };
    case SWIPE_RIGHT:
      return { ...state, swipeStatus: 'RIGHT' }
    case RESET_SWIPE:
      return { ...state, swipeStatus: 'CENTER' }
    default:
      return state;
  }
}

// Create redux store.
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
export default createStore(reducer, {loading: false, response: null, swipeStatus: 'CENTER'}, composeEnhancers(applyMiddleware(thunk)));