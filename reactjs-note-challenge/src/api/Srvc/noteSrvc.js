import axios from 'axios';
function api() {
  return {
    getNoteList: () => {
      axios.get('https://challenge.pushe.co/api/v1/notes')
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  };

}
export default api();