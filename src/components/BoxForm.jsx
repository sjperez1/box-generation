import React, {useState} from 'react'
const BoxForm = (props) => {
    const [box, setBox] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        props.newBox(box); // Passes message from child to parent. When the form is submitted, it should be able to pass the input to the parent addBoxes, changing the SetBoxes and then passing it to the other child.
        setBox("") // This returns the form to empty after it is submitted.
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>
                    <label> Color </label>
                    <input type="text" placeholder="Enter a color." onChange={e => setBox(e.target.value)} value={box}/>
                    <button type='submit'>Add</button>
                </p>
            </form>
        </div>
    )
}
export default BoxForm