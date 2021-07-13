/* eslint-disable import/no-anonymous-default-export */

/* rule of reducers:
1) must return a value besides undefined (null is okay) -> this is generally a problem during initialization 

2) produces dtate, or data to be used inside the app using only previous state and the action

3) reducers must not reach out of its function to decide what value to return. Meaning that reducers should take only the state and action, it cannot reach an API or ask for some user input, reach to DOM to pull some value out of it (i.e., document.querySelector kind of stuff)

It should return variation (computation) of state and action objects

4) Must not mutate the input of state argument

mutate inside js:
- adding element, removing element, by changing existing element from a javascript object

meaning don't manuplate state inside the reducer.

If your reducer is returning string or number, don't worry about the mutation.

The problem is, if you mutate the sstate argument, redux won't give you any errors. 

Mutating state will cause your application not to work on the way you expect. (corner case)

Let's say you decided to manuplate state values inside your reducer, if you return state, the program will act like nothing has changed inside the state and not going to re-render

*/


/* there are ways that are acceptable for mutating the state which will effect the ending result.

Ways: They are not touching the original value of the states they are creating new ones to be manuplated

In arrays:

[...state, 'hi'] -> new array in memory
state.map(w => e === 'hi' ? 'bye' : e)
state.filter(e => e !== 'hi) -> removing element in array

In objects:
{...state, name: 'Sam'}
{...state, age: 30}
{...state, age: undefined} -> deleting / override a property
_.omit(state,'age') -> deleting (better) lowdash library

*/

export default (state = [], action) => {
    switch(action.type) {
        case 'FETCH_POSTS':
            return action.payload;
    default:
        return state;
    }

};