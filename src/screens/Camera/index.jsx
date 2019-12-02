import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar } from 'react-native';
import { RNCamera } from 'react-native-camera';

import { IconButton } from '../../common/components';
import { colors } from '../../common/styles';
import * as strings from '../../common/strings';

import styles from './styles';

class Camera extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { preview: false, snap: null };
  }

  goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  hidePreview = () => {
    this.camera.resumePreview();
    this.setState({ preview: false });
  };

  accept = () => {
    const { navigation } = this.props;
    const { onPictureTaken } = navigation.state.params;
    const { snap } = this.state;

    this.camera.resumePreview();
    onPictureTaken(snap);
    this.goBack();
  };

  renderFooter = () => {
    const { preview } = this.state;

    return (
      <View style={[styles.footer, !preview ? styles.centered : styles.spaced]}>
        {preview && (
          <IconButton onPress={this.hidePreview} name="x" color={colors.red} iconSize={40} />
        )}
        {!preview && (
          <IconButton onPress={this.takePicture} name="camera" color={colors.white} iconSize={35} />
        )}
        {preview && (
          <IconButton onPress={this.accept} name="check" color={colors.green} iconSize={40} />
        )}
      </View>
    );
  };

  takePicture = async () => {
    if (this.camera) {
      const options = {
        quality: 0.4,
        skipProcessing: true,
        pauseAfterCapture: true,
      };
      try {
        const data = await this.camera.takePictureAsync(options);
        this.setState({ snap: data.uri, preview: true });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    }
  };

  setCameraRef = cam => {
    this.camera = cam;
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <RNCamera
          ref={this.setCameraRef}
          style={styles.camera}
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
          androidCameraPermissionOptions={{
            title: strings.CAMERA_PERMISSION_TITLE,
            message: strings.CAMERA_PERMISSION_MESSAGE,
            buttonPositive: strings.CAMERA_PERMISSION_OK,
            buttonNegative: strings.CAMERA_PERMISSION_CANCEL,
          }}
        />
        {this.renderFooter()}
        <View style={styles.header}>
          <IconButton onPress={this.goBack} name="arrow-left" color={colors.white} />
        </View>
      </View>
    );
  }
}

Camera.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    state: PropTypes.shape({
      params: PropTypes.shape({
        onPictureTaken: PropTypes.func,
      }),
    }),
  }).isRequired,
};

export default Camera;
