import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import { Input } from '../Input/Input';
import './CreateNote.scss';

export const CreateNote = () => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <div className="create">
      {isShowing && <Input className="input__note" placeholder="Title" />}
      <Input
        placeholder="Take a note"
        className="input__note"
        onClick={() => setIsShowing(true)}
      />
      {isShowing && (
        <button
          className="create__close"
          type="button"
          onClick={() => setIsShowing(false)}
        >
          Close
        </button>
      )}
    </div>
  );
};

CreateNote.propTypes = {};
