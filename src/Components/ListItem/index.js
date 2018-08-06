import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';

export default class ListItem extends Component {
  static propTypes = {
    data: PropTypes.object,
    _click: PropTypes.func,
  }


  constructor(props) {
    super(props);
    // console.log(this.props)
  }

  render() {
    const { data } = this.props;

    return (
      <View style={styles.content}>
        <View style={styles.topCover}>
          <Image style={styles.cover} source={{ uri: data && data.cover }} />
          <Image style={styles.playIcon} source={require('../../assets/images/icon_play.png')} />
          <View style={styles.duration}>
            <Text style={{ color: '#fff', fontSize: 10, lineHeight: 16 }}>{data && data.duration}</Text>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={() => { this.props._click(data); }}>
          <View style={styles.info}>
            <Text style={styles.title}>{data.title}</Text>
            <View style={styles.bottom}>
              <View style={[styles.bottomLeft, { flexDirection: 'row' }]}>
                <View style={[styles.watches, styles.leftBtn]}>
                  <Image style={[styles.leftBtnIcon, { width: 15, height: 16 }]} source={require('../../assets/images/play.png')} />
                  <Text style={styles.word}>{data.watches}</Text>
                </View>
                <View style={[styles.likes, styles.leftBtn]}>
                  <Image style={styles.leftBtnIcon} source={require('../../assets/images/upvote_nor.png')} />
                  <Text style={styles.word}>{data.likes}</Text>
                </View>
              </View>
              <View style={[styles.bottomRight, { flexDirection: 'row' }]}>
                <Image style={styles.bottomBtn} source={require('../../assets/images/icon_circle.png')} />
                <Image style={styles.bottomBtn} source={require('../../assets/images/icon_wechat.png')} />
                <Image style={styles.bottomBtn} source={require('../../assets/images/icon_weibo.png')} />
                <Image style={[styles.bottomBtn, { width: 16, height: 16 }]} source={require('../../assets/images/icon_comments.png')} />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 23,
  },
  topCover: {
    position: 'relative',
    width: 375,
    height: 194,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cover: {
    position: 'absolute',
    width: 375,
    height: 194,
  },
  playIcon: {
    width: 22,
    height: 23,
  },
  duration: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .5)',
    height: 16,
    paddingHorizontal: 5,
  },
  info: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    color: '#202020',
    lineHeight: 25,
    marginTop: 8,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  word: {
    fontSize: 13,
    color: '#888'
  },
  leftBtn: {
    flexDirection: 'row',
    marginRight: 12,
  },
  leftBtnIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  bottomBtn: {
    width: 18,
    height: 16,
    marginHorizontal: 10,
  }
});
