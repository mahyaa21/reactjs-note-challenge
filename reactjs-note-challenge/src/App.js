import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Note from './views/note/note';
import Header from './layouts/header/header';
import Footer from './layouts/footer/footer';
import { store } from './store';
const App = (props: Props) => {
  return (<Provider store={store}>
    <Header />
    <div className='app-container'>
      <Note />
    </div>
    <Footer />
  </Provider>);
}

export default App;
