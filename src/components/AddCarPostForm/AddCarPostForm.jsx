import React, { useState } from 'react';

import { Button, Form, Grid, Segment, Icon } from 'semantic-ui-react'

export default function AddPuppyForm(props){
  const [selectedFile, setSelectedFile] = useState('')
  const [state, setState] = useState({
    caption: ''
  })

  function handleFileInput(e){
    setSelectedFile(e.target.files[0])
  }


  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
             
    const formData = new FormData()
    formData.append('photo', selectedFile)
    formData.append('caption', state.caption)
    props.handleAddPost(formData); 
    
    // Have to submit the form now! We need a function!
  }


  return (
    
    <Grid textAlign='center' style={{ height: '25vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Segment inverted>
        
            <Form inverted autoComplete="off" onSubmit={handleSubmit}>
            
              <Form.Input
                  className="form-control"
                  name="caption"
                  value={state.caption}
                  placeholder="Add your Favorite Car pics!"
                  onChange={handleChange}
                  required
              />   
              <Form.Input
                className="form-control"
                type="file"
                name="photo"
                placeholder="upload image"
                onChange={handleFileInput}
              />   
              <Button size='medium' color="youtube" type="submit" animated>
                <Button.Content visible>Add Car Show</Button.Content>
                <Button.Content hidden>
                <Icon name='arrow right' />
                </Button.Content>
            </Button>
            </Form>
          </Segment>
      </Grid.Column>
    </Grid>
   
  ); 
}