import React, { Component } from 'react';
import { AppRegistry, Button } from 'react-native';import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';

// You can use CircleButton, RoundButton, RectangleButton to instead ButtonComponent
<ButtonComponent
  states={{
    upload: {
      onPress: () => {
        this.imageUploader.upload();
        this.state.setState({ buttonState: 'uploading' });
      },
      image: require('upload-image.png'),
      text: 'Upload Image',
    },
    uploading: {
      onPress: () => {
        this.imageUploader.cancelUpload();
        this.state.setState({ buttonState: 'upload' });
      },
      spinner: true,
      text: 'Uploding Image...',
    },
  }}
>
</ButtonComponent>

export default class Bananas extends Component {
  buttonState={this.state.buttonState} // "upload" or "uploading"
  render() {
    return (

    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Bananas);
