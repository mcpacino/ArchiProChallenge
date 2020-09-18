import React from 'react';

export function TableDataHoc(WrappedComponent, data) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: data,
        sortState: {
          column: null,
          direction: 'az',
        }
      };
    }

    handleChange() {
      this.setState({
        // data: selectData(DataSource, this.props)
      });
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };

}
