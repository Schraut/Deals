import React, { Component } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ajax from './ajax';
import DealList from './src/components/DealList';
export default class App extends Component {
  state = {
    deals: [],
  };

  async componentDidMount() {
    const deals = await ajax.fetchDeals();
    this.setState({ deals });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Deals List</Text>
        {this.state.deals.length > 0 ? (
          <DealList deals={this.state.deals} />
        ) : (
          <Text>No deals</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
  },
});
