import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
// show the price in dollars
import { priceDisplay } from '../utils/util';

class DealItem extends React.Component {
  static propTypes = {
    deal: PropTypes.object.isRequired,
  };
  render() {
    const { deal } = this.props;
    return (
      <View>
        <Image source={{ uri: deal.media[0] }} style={styles.image} />
        <View>
          <Text>{deal.title}</Text>
          <Text>{priceDisplay(deal.price)}</Text>
          <Text>{deal.cause.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
  },
});

export default DealItem;
