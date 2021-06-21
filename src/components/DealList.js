import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
// Deal item component
import DealItem from './DealItem';

class DealList extends React.Component {
  static propTypes = {
    deals: PropTypes.array.isRequired,
  };
  render() {
    return (
      <View style={styles.list}>
        <FlatList
          data={this.props.deals}
          renderItem={({ item }) => <DealItem deal={item} />}
        />
      </View>
    );
  }
}

export default DealList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: '100%',
    backgroundColor: 'blue',
    paddingTop: 50,
  },
});
