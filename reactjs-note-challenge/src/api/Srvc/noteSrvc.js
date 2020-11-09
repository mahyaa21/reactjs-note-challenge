import axios from 'axios';

export const saveNote = (data: any) => {

  return new Promise((resolve,reject) => {
    axios.post('https://challenge.pushe.co/api/v1/notes',
      {
        title: data.title,
        content: data.content
      }
      , {
        headers: {
          'Authorization': `jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDQ5NDU3NzgsImVtYWlsIjoibWFoeWFrYTEyQGdtYWlsLmNvbSIsImlhdCI6MTYwNDk0MjE3OH0.gTCuYVpQut9qPJsLUYyPC5EyX74e-XNvK7ASAt2Aeno`
        }
      }
    )
    .then((response) => Promise.resolve(response.data))
    .then(resolve)
    .then(reject)
    .catch((response) => Promise.resolve(response.data))
  })

}

export const getNoteList = async (data: any) => {
  try {
    const response = await axios.get('https://challenge.pushe.co/api/v1/notes', {
      headers: {
        'Authorization': `jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDQ5NDE4MjEsImVtYWlsIjoibWFoeWFrYTEyQGdtYWlsLmNvbSIsImlhdCI6MTYwNDkzODIyMX0.1i9L4zuHm7yYNC-MoHJyO2qa62KFBCz9UNJ9oTpyy7o`
      }
    }
    );
    const data = await response;
    console.log('user srvc', data)
    return data;
  } catch (e) {
    console.log(e)
  }
}

export const discardNote = async (data: any) => {
  try {
    const response = await axios.get(`https://challenge.pushe.co/api/v1/notes/${data.id}`, {
      headers: {
        'Authorization': `jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDQ5NDE4MjEsImVtYWlsIjoibWFoeWFrYTEyQGdtYWlsLmNvbSIsImlhdCI6MTYwNDkzODIyMX0.1i9L4zuHm7yYNC-MoHJyO2qa62KFBCz9UNJ9oTpyy7o`
      }
    }
    );
    const data = await response;
    alert('the note is removed successfully!');
    console.log('user srvc', data)
    return data;
  } catch (e) {
    console.log(e)
  }
}