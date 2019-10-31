// @flow strict
import React from 'react';
import type { Entry, WidgetFor } from '../../types';

type Props = {
  entry: Entry,
  widgetFor: WidgetFor
};

const PostPreview = ({ entry, widgetFor }: Props) => {
  const body = widgetFor('body');
  const journaltypes = widgetFor('journaltypes');
  const journal = widgetFor('journal');
  const pubmed = widgetFor('pubmed');
  const url = widgetFor('url');
  const impactfactor = widgetFor('impactfactor');
  const dateofacceptance = widgetFor('dateofacceptance');
  const author = widgetFor('tag');
  const category = widgetFor('category');
  const body = widgetFor('body');
  const title = entry.getIn(['data', 'title']);

  return (
    <div className="post">
      <h1 className="post__title">{title}</h1>
      <div className="post__body">
          Journal Types: {journaltypes} <br />
          Journal: {journal} <br />
          Pubmed: {pubmed} <br />
          URL: {url} <br />
          Impact Factor: {impactfactor} <br />
          Date of Acceptance: {dateofacceptance} 
      </div>
      <div className="post__body">{body}</div>
      <div className="post__body">
          Author: {author} <br />
          Group: {category} <br />
      </div>
    </div>
  );
};

export default PostPreview;
