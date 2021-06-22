import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {
  Image,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
// show the price in dollars
import { priceDisplay } from '../utils/util';
import ajax from '../../ajax';

class DealDetail extends React.Component {
  static propTypes = {
    initialDealData: PropTypes.object.isRequired,
    onBack: PropTypes.func.isRequired,
  };
  state = {
    deal: this.props.initialDealData,
  };

  async componentDidMount() {
    const fullDeal = await ajax.fetchDealDetail(this.state.deal.key);
    console.log(fullDeal);
    this.setState({
      deal: fullDeal,
    });
  }

  render() {
    const { deal } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={this.props.onBack}>
          <Text>Back</Text>
        </TouchableOpacity>
        <Image source={{ uri: deal.media[0] }} style={styles.image} />
        <View>
          <Text>{deal.title}</Text>
          <Text>{priceDisplay(deal.price)}</Text>
          <Text>{deal.cause.name}</Text>
        </View>

        {deal.user && (
          <View>
            <Image
              style={styles.image}
              source={{ uri: deal.user.avatar }}
            ></Image>
            <Text>{deal.user.name}</Text>
          </View>
        )}
        <View>
          <Text>{deal.description}</Text>
        </View>
        <ExpoStatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    marginTop: 50,
  },
  container: {
    flex: 1,
  },
});

export default DealDetail;
