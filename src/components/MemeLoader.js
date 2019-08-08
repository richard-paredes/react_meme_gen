import React from 'react'
import logo from '../logo.svg'

import MemeGeneratorImage from './MemeGeneratorImage'

function MemeLoader(props)
{
    if (props.data.isLoading) {
        
        
        return (
            <div className="App">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Fetching your memes <code>!</code>
                </p>
            </div>
        )
    }
    
    return <MemeGeneratorImage data={props.data} />
}

export default MemeLoader;