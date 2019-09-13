import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import{ removeQuote } from '../actions/quotes'
import{ upvoteQuote } from '../actions/quotes'
import{ downvoteQuote } from '../actions/quotes'


class Quotes extends Component {

  render() {
    const { quotes, removeQuote, upvoteQuote, downvoteQuote } = this.props
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {quotes.map(q => {
                return <QuoteCard key={q.id} quote={q} remove={removeQuote} upvote={upvoteQuote} downvote={downvoteQuote} />
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({quotes: state.quotes}), {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
