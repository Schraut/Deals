import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

export default class SearchBar extends React.Component {
  static PropTypes = {
    searchDeals: PropTypes.func.isRequired,
  };
  state = {
    searchTerm: '',
  };

  debouncedSearchDeals = debounce(this.props.searchDeals, 300);

  handleChange = (searchTerm) => {
    this.setState({ searchTerm }, () => {
      this.debouncedSearchDeals(this.state.searchTerm);
    });
  };
  render() {
    return (
      <TextInput
        style={styles.input}
        placeholder="Search what we got"
        onChangeText={this.handleChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    marginHorizontal: 12,

    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});
