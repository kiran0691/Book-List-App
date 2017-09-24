import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{

  render(){
    if(!this.props.book){
      return (<h5>Select a book to view details</h5>)
    }

    return(
    <div className='book-detail'>
      <h5>Title: {this.props.book.title}</h5>
      <h5>Pages: {this.props.book.pages}</h5>
    </div>
  )};
}

function mapStateToReducers(state){
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToReducers)(BookDetail);
