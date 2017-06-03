import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TabBarIconsComponent extends Component {
  static tabIcons = [];

  componentDidMount() {
    this._listener = this.props.scrollValue.addListener(TabBarIconsComponent.setAnimationValue);
  }

  static setAnimationValue({ value, }) {
    TabBarIconsComponent.tabIcons.forEach((icon, i) => {
      const progress = Math.min(1, Math.abs(value - i));
      icon.setNativeProps({
        style: {
          color: TabBarIconsComponent.iconColor(progress),
        },
      });
    });
  }

  // color between rgb(59,89,152) and rgb(204,204,204)
  static iconColor(progress) {
    const red = 59 + (204 - 59) * progress;
    const green = 89 + (204 - 89) * progress;
    const blue = 152 + (204 - 152) * progress;
    return `rgb(${red}, ${green}, ${blue})`;
  }

  render() {
    return (
      <View style={[styles.tabs, this.props.style]}>
        {this.props.tabs.map((tab, i) => {
          return (
            <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
              <Icon
                name={tab}
                size={30}
                color={this.props.activeTab === i ? 'rgb(59,89,152)' : 'rgb(204,204,204)'}
                ref={(icon) => { TabBarIconsComponent.tabIcons[i] = icon; }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

TabBarIconsComponent.propTypes = {
  goToPage: React.PropTypes.func,
  activeTab: React.PropTypes.number,
  tabs: React.PropTypes.array
};

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  tabs: {
    height: 45,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
});
