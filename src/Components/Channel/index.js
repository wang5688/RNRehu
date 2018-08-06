/**
 * 顶部导航组件
 */
import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Animated,
} from 'react-native';
import PropTypes from 'prop-types';

// <ScrollView
//   horizontal
//   directionalLockEnabled // 锁定滚动方向
//   snapToAlignment="center"
//   showsHorizontalScrollIndicator={false}
//   scrollEventThrottle={16}
// >
//   {
//     tabs.map((tab, index) => (
//       <Text
//         onPress={() => { this.props.goToPage(index); }}
//         style={[styles.tab, this.selected === tab && styles.selectedTab ]}
//         key={index}
//       >{tab}</Text>
//     ))
//   }
// </ScrollView>

class Channel extends Component {
  static propTypes = {
    goToPage: PropTypes.func, // 跳转到对应tab的方法
    activeTab: PropTypes.number, // 被选中tab
    tabs: PropTypes.array, // 所有tabs集合
    backgroundColor: PropTypes.string,
    activeTextColor: PropTypes.string,
    textStyle: PropTypes.object,
    underlineStyle: PropTypes.object,
    tabStyle: PropTypes.object,
  }

  static defaultProps = {
    backgroundColor: '#fff',
    activeTextColor: '#333',
  }

  constructor(props) {
    super(props);
    this.state = {
      selected: props.activeTab,
    }
  }

  render() {
    const { tabs } = this.props;

    return (
      <View style={[styles.container, this.props.tabStyle]}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 32,
    backgroundColor: '#fff',
  },
  tab: {
    fontSize: 16,
    color: '#333',
    height: 32,
    lineHeight: 32,
    marginHorizontal: 10,
  },
  selectedTab: {

  }
});

module.exports = Channel;
