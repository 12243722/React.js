import React, { Component } from 'react';

import TopRated from './ui/TopRated';

// import { getRatedListApi } from '@/utils/api';
import { connect } from 'react-redux';
import { getRatedListAsync } from './actionCreate';

const mapStateToProps = state => {
  return {
    // ratedList: state.get('ratedList')
    ratedList: state.getIn(['hotReducer','ratedList'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getData() {
      dispatch(getRatedListAsync())
    }
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class Index extends Component {
  // state = {
  //   ratedList: []
  // }
  render() {
    return (
      <div>
        <TopRated ratedList={this.props.ratedList} />
      </div>
    );
  }

  componentDidMount() {
    this.props.getData()
  }
}

export default Index;