import React, { Component } from 'react'
import { Text, TextInput, Button } from 'react-native'

class CreatePost extends Component {

  state = {
    title: 'Post Title',
    body: 'Post Body'
  }

  render() {
    return (
      <Text>
        <Text className='flex flex-column mt3'>
          <TextInput
            className='mb2'
            value={this.state.title}
            onChange={(title) => this.setState({ title })}
            placeholder='A title for the link'
          />
          <TextInput
            className='mb2'
            value={this.state.body}
            onChange={(body) => this.setState({ body })}
            placeholder='The body for the link'
          />
        </Text>
        <Button
          onPress={() => this._createPost()}
        />
      </Text>
    )
  }

  _createPost = async () => {
    // ... you'll implement this in a bit
  }

}

export default CreatePost