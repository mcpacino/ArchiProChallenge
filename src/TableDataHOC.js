import React from 'react';
import lodash from 'lodash';

export function TableDataHoc(WrappedComponent, data) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: data,
        column: null,
        direction: null,
      };
    }

    toggleSortState = (column) => {
      let direction = this.state.direction;
      if (this.state.column === column) {
        if (!direction) {
          direction = 'az';
        } else if (direction === 'az') {
          direction = 'za';
        } else {
          direction = null;
        };
      }

      let newData = data;
      if (direction !== null) {
        newData = lodash.sortBy(data, [column]);
        if (direction === 'za') {
          newData = lodash.revert(newData);
        }
      }

      this.setState({
        data: newData,
        column,
        direction
      })
    }

    render() {
      return <WrappedComponent
        {...this.props}
        data={this.state.data}
        column={this.state.column}
        direction={this.state.direction}
        toggleSortState={this.toggleSortState}
      />;
    }
  };
}
