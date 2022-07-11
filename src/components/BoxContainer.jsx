import React, {useState} from 'react'
import BoxForm from './BoxForm'
import BoxDisplay from './BoxDisplay'

const BoxContainer = () => {
    const [boxes, setBoxes] = useState([])

    // passing the following function to the BoxForm child below. In the form component, this function will be called newMsg
    const addBoxes=(newBox) => {
        // Since state is immutable, you cannot just push something to it. You have to make it into a new array with all of the elements of the old array plus the new info to add.
        setBoxes([...boxes, newBox])
    }

    return (
        <div>
            <BoxForm newBox={addBoxes}/>
            <BoxDisplay boxes={boxes}/>
        </div>
    )
}

export default BoxContainer