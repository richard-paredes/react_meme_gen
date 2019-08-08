import React from 'react'

function MemeGeneratorForm(props)
{
    return (
        <form className="meme-form" >
            <input type="text" 
                placeholder="Upper Text"
                name="topText"
                value={props.data.topText}
                onChange={props.handleChange} />
            <br />
            <input type="text" 
                placeholder="Lower Text"
                name="bottomText"
                value={props.data.bottomText}
                onChange={props.handleChange} />
            
            <button onClick={props.handleClick} >Generate Meme</button>
        </form>
    )
}

export default MemeGeneratorForm;