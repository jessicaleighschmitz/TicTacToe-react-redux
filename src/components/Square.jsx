import React from 'react';
import PropTypes from 'prop-types';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}//showing X & O 

Square.propTypes = {
  handleSquare:  Prop.func
};

export default Square;
