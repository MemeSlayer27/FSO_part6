import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'


const AnecdoteList = () => {

    const filter = useSelector(state => state.filter)
    const anecdotes = useSelector(state => state.anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase())).sort((a, b) => b.votes - a.votes))
    const dispatch = useDispatch()

    const vote = (id) => {
        console.log('vote', id)
    
        dispatch(voteAnecdote(id))
    }

      
    return (
    <>
    {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
            <div>
            {anecdote.content}
            </div>
            <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
        </div>
        )}
    </>
    )

}

export default AnecdoteList