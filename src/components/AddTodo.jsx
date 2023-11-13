import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'


function AddTodo() {
    const [input, setInput] = useState('')

    //Dispatch : It is wireup between react and redux (how redux will work)
    // It uses reducer to store values in store
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        //we have to call reducer inside dispatch
        //we can send data using this reducer only
        dispatch(addTodo(input))
        //we have to clean input field,bcz jb todo agar bn gya hai ya fir add ho gya, toh user ko acha nhi lgega ki form waha pr bhar gya hai, for that use setInput
        setInput('')

    }
    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
          <input
            type="text"
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Enter a Todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Add Todo
          </button>
        </form>
      )
}

export default AddTodo