import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import './CreateNote.scss';

export const CreateNote = () => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <div className="create">
      {isShowing && <Input className="input--note" placeholder="Title" />}
      <Input
        placeholder="Take a note"
        className="input--note"
        onClick={() => setIsShowing(true)}
      />
      {isShowing && (
        <Button
          className="button--close"
          onClick={() => setIsShowing(false)}
          text="Close"
        />
      )}
    </div>
  );
};

CreateNote.propTypes = {};
