import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import UserProfileSummaryComponent from './UserProfileSummaryComponent';
import TabBarComponent from './TabBarComponent';
import data from '../data/usersData.json';

export default class CandidateListComponentScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: data,
    };
  }

  render() {
    let { userData } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.containerTop}>
          <UserProfileSummaryComponent />
        </View>
        <View style={styles.containerBottom}>
          <TabBarComponent userData={userData} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  containerTop: {
    flex: 1,
    flexDirection: 'row',
  },
  containerBottom: {
    flex: 3,
    flexDirection: 'row'
  }
});
