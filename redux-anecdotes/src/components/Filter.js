import { useSelector, useDispatch } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'



const Filter = () => {

    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const onChange = (event) => {
        const newFilter = event.target.value;
        const action = filterChange(newFilter);
        console.log("Dispatching action:", action);
        dispatch(action);
    }

    return (
        <div>
            filter <input value={filter} onChange={onChange} />
        </div>
    )
}

export default Filter