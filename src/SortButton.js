import React from 'react';

export function SortButton({currentColumn, column, direction, toggleSortState}) {

  const GetIcon = () => {
    if (currentColumn === column) {
      if (direction === 'az') {
        return (<i className="fas fa-sort-alpha-down"></i>);
      } else if (direction === 'za') {
        return (<i className="fas fa-sort-alpha-down-alt"></i>);
      } else {
        return (<i className="fas fa-sort-alpha-down" style={{color: '#cccccc'}}></i>);
      }
    } else {
      return (<i className="fas fa-sort-alpha-down" style={{color: '#cccccc'}}></i>);
    }
  }

  return (
    <span
      onClick={(e) => {
        toggleSortState && toggleSortState(currentColumn);
      }}
      style={{cursor: 'pointer'}}
    >
      {
        GetIcon()
      }
    </span>
  );
}
