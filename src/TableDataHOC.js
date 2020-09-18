import React from 'react';
import lodash from 'lodash';

// This HOC maintains filter, sort mode and processed data, and handles toggling the sort mode.
// Props (in):
//   WrappedComponent: the original table component.
//   data: the original data of the table.
// Props (out) that are injected into WrappedComponent:
//    data: sorted data by column and direction
//    column: column by which the data is sorted
//    direction: sort direction. 'az' / 'za' / null
//    toggleSortState: handler for toggle sort mode.
//    filter: filter
//    onFilterChanged: to update filter
export function TableDataHoc(WrappedComponent, data) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: data,
        column: null,
        direction: null,
        filter: '',
      };
    }

    processData = (data, column, direction, filter) => {
      let newData = [...data];
      filter = filter.toLocaleLowerCase();

      newData = lodash.filter(newData, function(o) {
        return o.name.toLocaleLowerCase().includes(filter) || o.phone.toLocaleLowerCase().includes(filter) || o.email.toLocaleLowerCase().includes(filter);
      })

      if (direction !== null) {
        newData = lodash.sortBy(newData, [column]);
        if (direction === 'za') {
          newData = lodash.reverse(newData);
        }
      }

      return newData;
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
        }
      } else {
        direction = 'az';
      }

      const newData = this.processData(data, column, direction, this.state.filter);

      this.setState({
        data: newData,
        column,
        direction
      })
    }

    onFilterChanged = (filter) => {
      const newData = this.processData(data, this.state.column, this.state.direction, filter);
      this.setState({
        data: newData,
        filter,
      })
    }

    render() {
      return <WrappedComponent
        {...this.props}
        data={this.state.data}
        column={this.state.column}
        direction={this.state.direction}
        toggleSortState={this.toggleSortState}
        filter={this.state.filter}
        onFilterChanged={this.onFilterChanged}
      />;
    }
  };
}
