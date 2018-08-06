/**
 * app首页
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
const TabItem = TabNavigator.Item;

import Mine from '../Mine';
import Hot from '../Hot';

const TAB = {
  tab_hot: 'tab_hot',
  tab_boutique: 'tab_boutique',
  tab_mine: 'tab_mine',
};

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: TAB.tab_hot,
    };
  }

  _selectTab = (tab) => {
    this.setState({
      selected: tab,
    });
  }

  render() {
    const { navigator } = this.props;
    const { selected } = this.state;

    return (
      <TabNavigator
        tabBarStyle={styles.tabBar}
        tabBarShadowStyle={styles.tabBarShadow}
      >
        <TabItem
          selected={selected === TAB.tab_hot}
          title="热播"
          titleStyle={styles.titleStyle}
          selectedTitleStyle={styles.titleStyle}
          tabStyle={styles.tabStyle}
          renderIcon={() => <Image style={styles.icon} source={require('../../assets/images/tabs/hot.png')} />}
          renderSelectedIcon={() => <Image style={styles.icon} source={require('../../assets/images/tabs/hot_sel.png')} />}
          onPress={() => { this._selectTab(TAB.tab_hot); }}
        >
          <Hot {...this.props} />
        </TabItem>
        <TabItem
          selected={selected === TAB.tab_boutique}
          title="精选"
          titleStyle={styles.titleStyle}
          selectedTitleStyle={styles.titleStyle}
          tabStyle={styles.tabStyle}
          renderIcon={() => <Image style={styles.icon} source={require('../../assets/images/tabs/boutique.png')} />}
          renderSelectedIcon={() => <Image style={styles.icon} source={require('../../assets/images/tabs/boutique_sel.png')} />}
          onPress={() => { this._selectTab(TAB.tab_boutique); }}
        >
          <View>
            <Text>热门</Text>
          </View>
        </TabItem>
        <TabItem
          selected={selected === TAB.tab_mine}
          title="我的"
          titleStyle={styles.titleStyle}
          selectedTitleStyle={styles.titleStyle}
          tabStyle={styles.tabStyle}
          renderIcon={() => <Image style={styles.icon} source={require('../../assets/images/tabs/mine.png')} />}
          renderSelectedIcon={() => <Image style={styles.icon} source={require('../../assets/images/tabs/mine_sel.png')} />}
          onPress={() => { this._selectTab(TAB.tab_mine); }}
        >
          <Mine {...this.props} />
        </TabItem>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    height: 49,
    backgroundColor: 'rgba(255, 255, 255, .9)',

  }, // tabBar样式
  tabBarShadow: {
    // height: 0
  }, // tabBar阴影样式
  titleStyle: {
    fontSize: 10,
    color: '#202124',
  }, // tabBar文字样式
  tabStyle: {
    // height: 38,
    // marginVertical: 11
    // backgroundColor: 'red'
  }, // tab样式
  icon: {
    width: 27,
    height: 27,
  }, // tab icon样式
});

export default HomePage;
