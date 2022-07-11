import React from 'react'
const BoxDisplay = (props) => {
    return (
        <div className='flex'>
            {
                // the plural of messages helps indicate an array.
                props.boxes.map((box, i)=>(
                    <p key={i} className='box' style={{backgroundColor: box, width: 200, height: 200}}></p>
                ))
            }
        </div>
    )
}
export default BoxDisplay