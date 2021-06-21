const apiHost = 'https://bakesaleforgood.com';

export default {
  async fetchDeals() {
    try {
      let response = await fetch(apiHost + '/api/deals');
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.log(error);
    }
  },
};
