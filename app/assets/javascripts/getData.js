import axios from 'axios';

const getFriendsData = () => new Promise((resolve, reject) => {
  axios.get('http://localhost:3001/friends')
    .then((data) => {
      console.log(data.data[0]);
      resolve(data.data[0]);
      
    })
    .catch((error) => {
      reject(error);
    });
});
export default { getFriendsData }