import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, Image, StyleSheet, View, ListView } from 'react-native';

export default class UserSkillsCurrentListComponent extends Component {
  constructor(props) {
    super(props);

    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(this.props.userData[0]["skills"]),
    };
  }

  static renderRow(record) {
    return (
      <View style={styles.row}>
        <View style={styles.colSkills}>
          <Text style={styles.itemSkills}>
            #{record["skill"] ? record["skill"] : null }
          </Text>
        </View>
        <View style={styles.colTokens}>
          <Text style={styles.itemTokens}>
            <Image source={require('../images/coin.png')} style={styles.imageCoin} />
            {record["tokens"] ? record["tokens"] : null }
          </Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={UserSkillsCurrentListComponent.renderRow}
        />
      </View>
    );
  }
}

UserSkillsCurrentListComponent.propTypes = {
  userData: PropTypes.array
};

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
  },
  row: {
    borderColor: '#f1f1f1',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  colSkills: {
    flex: 3,
    flexDirection: 'column',
  },
  colTokens: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#B000B0',
    borderColor: '#B000B0',
    borderRadius: 30,
    borderWidth: 0,
    justifyContent: 'center',
    width: 30,
    padding: 5,
    marginRight: 0
  },
  itemSkills: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  itemTokens: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  imageCoin: {
    width: 20,
    height: 20,
    backgroundColor: 'transparent'
  }
});
