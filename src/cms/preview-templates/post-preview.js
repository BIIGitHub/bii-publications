// @flow strict
import React from 'react';
import type { Entry, WidgetFor } from '../../types';

type Props = {
  entry: Entry,
  widgetFor: WidgetFor
};

const PostPreview = ({ entry, widgetFor }: Props) => {
  const body = widgetFor('body');
  const title = entry.getIn(['data', 'title']);

  return (
    <div className="post">
      <h1 className="post__title">{title}</h1>
      <div className="post__body">Journal Type: {journaltypes} <br />
                                  Journal: {journal} <br />
                                  Pubmed: {pubmed} <br />
                                  URL: <a href="#">{url}</a> <br />
                                  Impact Factor: {impactfactor} <br />
                                  Date of Acceptance: {dateofacceptance} <br />
      </div>
      <div className="post__body">{body}</div>
      
    </div>
  );
};

export default PostPreview;
