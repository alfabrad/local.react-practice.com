import React from 'react';
import PropTypes from 'prop-types';
import { FormattedHTMLMessage } from 'react-intl';

function Comment(props) {
  return (
    <article id={`comment-${props.id}`}>
      <div>
        <FormattedHTMLMessage
          id="comment.meta.author"
          values={{
            email: props.email,
            name: props.name,
          }}
        />
      </div>

      <p>
        {props.body}
      </p>
    </article>
  );
}

Comment.defaultProps = {
  id: 0,
  email: '',
  name: '',
  body: '',
};

Comment.propTypes = {
  id: PropTypes.number,
  email: PropTypes.string,
  name: PropTypes.string,
  body: PropTypes.string,
};

export default Comment;
