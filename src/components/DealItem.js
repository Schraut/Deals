import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Card } from 'react-native-paper';
// show the price in dollars
import { priceDisplay } from '../utils/util';

class DealItem extends React.Component {
  static propTypes = {
    deal: PropTypes.object.isRequired,
    onPress: PropTypes.func.isRequired,
  };
  handlePress = () => {
    this.props.onPress(this.props.deal.key);
  };
  render() {
    const { deal } = this.props;
    return (
      <TouchableOpacity style={styles.card} onPress={this.handlePress}>
        <Card>
          <Card.Cover source={{ uri: deal.media[0] }} style={styles.image} />
          <Text>{deal.title}</Text>
          <Text>{priceDisplay(deal.price)}</Text>
          <Text>{deal.cause.name}</Text>
        </Card>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
  },
  card: {
    paddingBottom: 20,
  },
});

export default DealItem;
