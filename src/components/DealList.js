import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
// Deal item component
import DealItem from './DealItem';

class DealList extends React.Component {
  static propTypes = {
    deals: PropTypes.array.isRequired,
    onItemPress: PropTypes.func.isRequired,
  };
  render() {
    return (
      <View style={styles.list}>
        <FlatList
          data={this.props.deals}
          renderItem={({ item }) => (
            <DealItem deal={item} onPress={this.props.onItemPress} />
          )}
        />
      </View>
    );
  }
}

export default DealList;

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
});
