import React from 'react';
import PropTypes from 'prop-types';

export default function BodyTextArea({ defaultText, bodyRef }) {
  return (
    <textarea
      ref={bodyRef}
      defaultValue={defaultText}
      id="note-body-textarea"
      type="text"
      spellCheck="false"
      className="px-4 py-2 rounded h-full w-full"
      placeholder="Body"
      onKeyDown={(e) => {
        if (e.key === 'Tab') {
          e.preventDefault();
          const textarea = document.querySelector('#note-body-textarea');

          textarea.setRangeText('    ', textarea.selectionStart, textarea.selectionStart, 'end');
        }
      }}
    />
  );
}

BodyTextArea.propTypes = {
  defaultText: PropTypes.string,
  bodyRef: PropTypes.bool,
};

BodyTextArea.defaultProps = {
  defaultText: '',
  bodyRef: null,
};
