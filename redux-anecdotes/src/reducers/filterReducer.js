



const initialState = ''

const filterReducer = (state = initialState, action) => {

    console.log('state now: ', state)
    console.log('action', action)
    if (action.type === 'SET_FILTER') {
        state =  action.payload
    }

    return state
}


export const filterChange = (filter) => {
    return {
      type: 'SET_FILTER',
      payload: filter
    }
  }



export default filterReducer