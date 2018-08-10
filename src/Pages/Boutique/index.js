import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Video from 'react-native-video';
import NavigationBar from '../../Components/NavigationBar';
import LinearGradient from 'react-native-linear-gradient';

const SCREEN = Dimensions.get('window');
const PLAYER_RATIO = 750 / 388;
const PLAYER_WIDTH = SCREEN.width;
const PLAYER_HEIGHT = Math.floor(SCREEN.width / PLAYER_RATIO);

export default class Boutique extends Component {

  render() {

    return (
      <View style={styles.container}>
        <NavigationBar title="精选" />

        <View style={styles.playerDom}>
          <Video
            source={require('../../assets/video_1.mp4')}
            resizeMode="contain"
            style={[styles.player]}
          />
          <LinearGradient colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, .47)']} style={styles.control}>
            <Image source={require('../../assets/images/icon_play.png')} style={styles.play}></Image>
            <Image source={require('../../assets/images/pause.png')} style={styles.pause}></Image>
            <View style={styles.progress}>
              <Text style={styles.duration}>00:00</Text>
              <View style={styles.progressBar}>
                <View style={styles.currentProgress}>
                  <View style={styles.currentBar}></View>
                </View>
              </View>
              <Text style={styles.duration}>04:35</Text>
            </View>
            <Image source={require('../../assets/images/volume.png')} style={styles.volume}></Image>
            <Image source={require('../../assets/images/full_screen.png')} style={styles.fullScreen}></Image>
          </LinearGradient>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  playerDom: {
    position: 'relative',
    backgroundColor: '#000',
    width: PLAYER_WIDTH,
    height: PLAYER_HEIGHT,
  },
  player: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: PLAYER_WIDTH,
    height: PLAYER_HEIGHT,
    zIndex: 1,
  },
  control: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: PLAYER_WIDTH,
    height: 36,
    zIndex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  play: {
    width: 15,
    height: 18,
  },
  pause: {
    width: 12,
    height: 16,
  },
  volume: {
    width: 22,
    height: 22,
  },
  fullScreen: {
    width: 19,
    height: 19,
  },
  progress: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    position: 'relative',
    width: 145,
    height: 2,
    backgroundColor: '#fff',
  },
  currentProgress: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 50,
    height: 2,
    backgroundColor: '#FF3644',
  },
  currentBar: {
    position: 'absolute',
    right: -4,
    top: -3,
    width: 8,
    height: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#FF3644',
  },
  duration: {
    color: '#FFFBFB',
    fontSize: 12,
    marginHorizontal: 8,
  }
});
