import axios from 'axios';

export const saveNote = (data: any) => {

  return new Promise((resolve,reject) => {
    axios.post('https://challenge.pushe.co/api/v1/notes',
      {
        title: data.note.title,
        content: data.note.content
      }
      , {
        headers: {
          'Authorization': `jwt ${data.token}`
        }
      }
    )
    .then((response) => Promise.resolve(response.data))
    .then(resolve)
    .then(reject)
    .catch((response) => Promise.resolve(response.data))
  })

}
export const getNoteList = (data: any) => {

  return new Promise((resolve,reject) => {
    axios.get('https://challenge.pushe.co/api/v1/notes'
      , {
        headers: {
          'Authorization': `jwt ${data.payload}`
        }
      }
    )
    .then((response) => response)
    .then(resolve)
    .then(reject)
    .catch((response) => Promise.resolve(response.data))
  })

}

// export const getNoteList = async (data: any) => {
//   try {
//     const response = await axios.get('https://challenge.pushe.co/api/v1/notes', {
//       headers: {
//         'Authorization': `jwt ${data.payload}`
//       }
//     }
//     );
//     const data = await response;
//     console.log('user srvc', data)
//     return data;
//   } catch (e) {
//     console.log(e)
//   }
// }

export const discardNote = async (data: any) => {
  return new Promise((resolve,reject) => {
    axios.delete(`https://challenge.pushe.co/api/v1/notes/${data.id}`
      , {
        headers: {
          'Authorization': `jwt ${data.token}`
        }
      }
    )
    .then((response) => Promise.resolve(response))
    .then(resolve)
    .then(reject)
    .catch((response) => Promise.resolve(response))
  })
}