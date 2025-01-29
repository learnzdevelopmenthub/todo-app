import { useState } from "react";

const AddTodo = ({addTodo, todos}) => {
    const [text, setText] = useState('')

    const handleSubmit = () => {
        if( text == '') {
            return
        }

        const todo = todos.find( item => item.text == text)
        if (todo) {
            alert("Already exist")
            return
        }
        addTodo(text)
        setText('')
    }

    return(
        <>
            <input type="text" onChange={(e) => setText(e.target.value)} value={text}/>
            <button onClick={handleSubmit}>Add</button>
        </>
    )
}

export default AddTodo;