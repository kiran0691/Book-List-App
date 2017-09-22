import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      console.log(book.title);
      return (
          <li key={book.title} className='list-group-item'> {book.title} </li>
      );
    });
  }

  render() {
    return(
      <ul className='list-group col-sm-6'>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToReducers(state) {
  return {
     books: state.books
   };
}

export default connect(mapStateToReducers)(BookList);
