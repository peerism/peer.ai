import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TabBarIconsComponent from './TabBarIconsComponent';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import ChatComponentScreen from './ChatComponentScreen';
import UserSkillsCurrentListComponent from './UserSkillsCurrentListComponent';
import UserSkillsHistoryListComponent from './UserSkillsHistoryListComponent';

export default class TabBarComponent extends Component {
  render() {
    let { userData } = this.props;
    return (
      <ScrollableTabView
        style={{marginTop: 5, }}
        initialPage={1}
        renderTabBar={() => <TabBarIconsComponent />}
      >
        <ScrollView tabLabel="question-circle" style={styles.tabView}>
          <View style={styles.card}>
            <Text>Info Coming Soon!</Text>
          </View>
        </ScrollView>
        <ScrollView tabLabel="check-circle-o" style={styles.tabView}>
          <View style={styles.card}>
            <Text>Matches Coming Soon!</Text>
          </View>
        </ScrollView>
        <ScrollView tabLabel="plus-square-o" style={styles.tabView}>
          <View style={styles.card}>
            <Text>Extras Coming Soon!</Text>
          </View>
        </ScrollView>
        <ScrollView tabLabel="comments-o" style={styles.tabView}>
          <View style={styles.card}>
            <ChatComponentScreen />
          </View>
        </ScrollView>
        <ScrollView tabLabel="user" style={styles.tabView}>
          <View style={styles.card}>
            <View style={styles.containerCard}>
              <ScrollableTabView
                style={styles.containerScrollTabView}
                renderTabBar={()=><DefaultTabBar backgroundColor='rgba(255, 255, 255, 0.7)' />}
                tabBarPosition='overlayTop'>
                <UserSkillsCurrentListComponent
                  tabLabel="Skills"
                  userData={userData}
                />
                <UserSkillsHistoryListComponent tabLabel="History" />
              </ScrollableTabView>
            </View>
          </View>
        </ScrollView>
      </ScrollableTabView>
    );
  }
}

// https://www.npmjs.com/package/prop-types
TabBarComponent.propTypes = {
  userData: PropTypes.array
};

const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 300,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  icon: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  containerCard: {
    flex: 3,
    flexDirection: 'row',
  },
  containerScrollTabView: {
    marginTop: 0,
  }
});