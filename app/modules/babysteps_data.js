var axios = require('axios');

const BASE_URL = '../baby-steps.json';

const get_babysteps = async () => {
  try {
    const res = await axios.get(`${BASE_URL}`);

    const babysteps_data = res.data;

    console.log(`GET: Here's the list of babysteps`, babysteps_data);

    return babysteps_data;
  } catch (e) {
    console.error(e);
  }
};

module.exports = babysteps_data;