import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Item({ noteId, title }) {
  return (
    <div type="button" className="px-4 py-2 bg-red-200 h-12">
      <Link to={`/update/${noteId}`}>
        <p className="bg-white h-full w-full">{title}</p>
      </Link>
    </div>
  );
}

Item.propTypes = {
  noteId: PropTypes.string,
  title: PropTypes.string,
};

Item.defaultProps = {
  noteId: '',
  title: '',
};
