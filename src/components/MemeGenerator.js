import React from 'react'

import MemeGeneratorForm from './MemeGeneratorForm'
import MemeGeneratorImage from './MemeGeneratorImage'


class MemeGenerator extends React.Component
{
    constructor(props)
    {
        super()
        this.state = {
            topText: "",
            bottomText:"",
            randomImage: "",
            allMemeImages: [],
            isLoading: true
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.setRandomImage = this.setRandomImage.bind(this);
    }
    
    componentDidMount()
    {
        
        /* global fetch */
        fetch('https://api.imgflip.com/get_memes')
            .then( response => response.json() ) // must parse into JSON
            .then( memeData => {
                this.setState(
                    {
                        allMemeImages: memeData.data.memes,
                        isLoading: false
                    })
            })
            .then(this.setRandomImage)
    }
    
    handleChange(event)
    {
        const {name, value} = event.target;
        
        this.setState( {
            [name] : value
        } )
    }
    
    handleClick(event)
    {
        event.preventDefault(); // prevent from refreshing
        this.setState({isLoading: true})
        this.setRandomImage();
        this.setState({isLoading: false});
        
    }
    
    setRandomImage()
    {
        const currentMemeIndex = Math.floor(Math.random()*this.state.allMemeImages.length)
        const currentMeme = this.state.allMemeImages[currentMemeIndex];
        
        this.setState(
            {
                randomImage: currentMeme.url
            })
    }
    
    render()
    {
        return (
            <div class="meme">
                <MemeGeneratorForm 
                    handleChange={this.handleChange}
                    handleClick={this.handleClick}
                    data={this.state} />
                
                <MemeGeneratorImage 
                    data={this.state} />
            </div>
        )
    }
}

export default MemeGenerator;