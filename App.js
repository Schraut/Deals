import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

// My components
import ajax from './ajax';
import DealList from './src/components/DealList';
import DealDetail from './src/components/DealDetail';
import Searchbar from './src/components/SearchBar';
export default class App extends Component {
  state = {
    deals: [],
    dealsFromSearch: [],
    currentDealId: null,
  };

  async componentDidMount() {
    const deals = await ajax.fetchDeals();
    this.setState({ deals });
  }

  // Function to get deals based off search input
  searchDeals = async (searchTerm) => {
    let dealsFromSearch = [];
    if (searchTerm) {
      dealsFromSearch = await ajax.fetchDealsSearchResults(searchTerm);
    }
    this.setState({ dealsFromSearch });
  };

  setCurrentDeal = (dealId) => {
    this.setState({
      currentDealId: dealId,
    });
  };
  // unSetCurrentDeal makes currentDealId null so that it renders the list
  // it makes it so you can navigate back to the home page
  unsetCurrentDeal = () => {
    this.setState({
      currentDealId: null,
    });
  };

  currentDeal = () => {
    return this.state.deals.find(
      (deal) => deal.key === this.state.currentDealId
    );
  };

  render() {
    if (this.state.currentDealId) {
      return (
        <DealDetail
          initialDealData={this.currentDeal()}
          onBack={this.unsetCurrentDeal}
        />
      );
    }
    const dealsToDisplay =
      this.state.dealsFromSearch.length > 0
        ? this.state.dealsFromSearch
        : this.state.deals;

    if (dealsToDisplay.length > 0) {
      return (
        <SafeAreaView>
          <Searchbar searchDeals={this.searchDeals} />
          <DealList deals={dealsToDisplay} onItemPress={this.setCurrentDeal} />
        </SafeAreaView>
      );
    }

    return (
      <View style={styles.container}>
        <Text>Deals List</Text>
        {this.state.deals.length > 0 ? (
          <DealList
            deals={this.state.deals}
            onItemPress={this.setCurrentDeal}
          />
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
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
  },
});
