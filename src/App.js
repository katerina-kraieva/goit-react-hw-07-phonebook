import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Loader from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './App.css';
import { clearError, contactsSelector } from './redux/contacts/index';
import Container from './Components/Container/Container';
import ContactForm from './Components/ContactForm/ContactForm';
import Filter from './Components/Filter/Filter';
import ContactList from './Components/ContactList/ContactList';

class App extends Component {
  componentDidUpdate() {
    if (this.props.error !== null) {
      toast.error('No Network');
      setTimeout(this.props.clearError(), 500);
    }
  }
   render() {
    return (
      <>
        <Container>
          <CSSTransition in={true} appear={true} timeout={250} classNames="Logo" unmountOnExit>
            <h1>Phonebook</h1>
          </CSSTransition>
          <ContactForm />
        </Container>
        <Container title="Contacts">
          <Filter />
          <ContactList />
        </Container>
        <ToastContainer position="top-right" />
      </>
    );
  }
}

const mapStateToProps = state => ({
  loading: contactsSelector.getLoading(state),
  error: contactsSelector.getError(state),
});

const mapDispatchToProps = dispatch => ({
  clearError: () => dispatch(clearError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
