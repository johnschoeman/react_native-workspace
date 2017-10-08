import React, { Component } from 'react'
import { Text, TextInput, Button, View } from 'react-native'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class CreatePost extends Component {

  state = {
    title: 'Post Title',
    body: 'Post Body'
  }

  render() {
    return (
      <View style={{width: 300, height: 200}}>
        <View style={{width: 300, height: 200}}>
          <Text>Create Post{"\n"}</Text>
          <TextInput
            value={this.state.title}
            onChange={(title) => this.setState({ title })}
            placeholder='A title for the post'
          />
          <Text>{"\n"}</Text>
          <TextInput
            value={this.state.body}
            onChange={(body) => this.setState({ body })}
            placeholder='The body for the post'
          />
        </View>
        <Button
          title="Submit"
          onPress={() => this._createPost()}
        />
      </View>
    )
  }

  _createPost = async () => {
    // ... you'll implement this in a bit
  }

}

const CREATE_LINK_MUTATION = gql`
  mutation CreatePostMutation($title: String!, $body: String) {
    createPost(
      title: $title,
      body: $body,
    ) {
      id
      title
      body
    }
  }
`;

export default CreatePost