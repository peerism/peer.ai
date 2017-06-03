import React, { Component } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

const remoteImageLogo = { uri:'https://images.pexels.com/photos/27403/pexels-photo-27403.jpg?w=470&h=325&auto=compress&cs=tinysrgb' };

export default class UserProfileSummaryComponent extends Component {
  render() {
    return (
      <Image source={remoteImageLogo} style={styles.container}>
        <Image source={require('../images/user.png')} style={styles.imageUser} />
        <View style={styles.containerMiddle}>
          <Text style={styles.username}>@ltfschoen</Text>
          <Text style={styles.motto}>Addicted to peerism</Text>
          <Text style={styles.balance}>$438 cash | $1480 invested</Text>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    flex: 3,
    flexDirection: 'column',
    alignSelf: 'stretch',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: null
  },
  imageUser: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 30,
    justifyContent: 'center',
    width: 80,
    height: 120,
    margin: 0
  },
  containerMiddle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  username: {
    color: '#fff',
    fontWeight: 'bold'
  },
  motto: {
    color: '#fff'
  },
  balance: {
    color: '#fff'
  }
});