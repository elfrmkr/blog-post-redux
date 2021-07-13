import jsonPlaceholder from '../apis/jsonPlaceholder';


export const fetchPosts = () => 
/* this approach is wrong Actions must be plain JS objects. Instead, the actual type was: BECASUSE WE HAVE ASYNC AND AWAIT SYNTAX 'Promise'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions.

*/
/* this approach also won't work because before we weven get the data from the server, return function finishes its work. Usage of middleware is necessary (async action creator) */

/* middleware insde of the world of redux:  
1) create action creators
2) which returns actions
3) to be dispatched (initiate changes to the data in redux side)
4) forwards action to middleware(we can have as may as we want; hooked up to redux store)

middleware is a function that gets called with every action we dispatched, can modify actions. Most popular usage is dealing with async action creators

5)reducers*/


/* Normal rules around action creators:
- creators must return action objects(js)
- actions must have object property
- actions optionally have payload

-> redux-thunk relaxes these rule around action creator. With redux thunk it can have also return a function -> if you return a function, redux-thunk will automatically call the function for you

it will take any object that shows up and if it is a function, it is gonna call dispatch and getState functions.

with redux-thunk, we can manually dispatch a function any time we want, it will return an object and come back to dispatching circle, then it will go through to reducers from middleware because it is not a function anymore. 
 */
/* with redux thunk, we can use async and await without any problem anymore*/
async dispatch => {
const response = await jsonPlaceholder.get('/posts');
        dispatch({type: 'FETCH_POSTS', payload: response.data})
    };

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}` );;

    dispatch({type: 'FETCH_USER', payload: response.data})

} ;
