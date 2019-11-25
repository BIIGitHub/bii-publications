// @flow strict
import React from 'react';
import type { Entry, WidgetFor } from '../../types';
import moment from 'moment';

type Props = {
  entry: Entry,
  widgetFor: WidgetFor
};

const PostPreview = ({ entry, widgetFor }: Props) => {
  const body = widgetFor('body');
  const title = entry.getIn(['data', 'title']);
  const journaltypes = entry.getIn(['data', 'journaltypes']);
  const journal = entry.getIn(['data', 'journal']);
  const pubmed = entry.getIn(['data', 'pubmed']);
  const url = entry.getIn(['data', 'url']);
  const impactfactor = entry.getIn(['data', 'impactfactor']);
  const dateofacceptance = widgetFor('dateofacceptance');


  return (
    <div className="post">
      <h1 className="post__title">{title}</h1>
      {journaltypes &&
        <div>
          <b>Journal Type: </b>&nbsp;
          <span className="post__title">{journaltypes}</span>
        </div>    
      }
      {journal &&
        <div>
          <b>Journal: </b>&nbsp;
          <span className="post__title">{journal}</span>
        </div>    
      }
      {pubmed &&
        <div>
          <b>Pubmed: </b>&nbsp;
          <span className="post__title">{pubmed}</span>
        </div>    
      }
      {url &&
        <div>
          <b>URL: </b>&nbsp;
          <span className="post__title">{url}</span>
        </div>    
      }
      {impactfactor &&
        <div>
          <b>Impact Factor: </b>&nbsp;
          <span className="post__title">{impactfactor}</span>
        </div>    
      }
      {dateofacceptance &&
        <div>
          <b>Date of Acceptance: </b>&nbsp;
          <span className="post__title">{moment(dateofacceptance).format('D MMM YYYY')}</span>
        </div>    
      }
         
      {/* <div className="post__title">Journal Type: {journaltypes}</div> */}
      <div className="post__body">{body}</div>
    </div>
  );
};

export default PostPreview;
