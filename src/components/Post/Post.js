// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import Categories from './Categories';
import styles from './Post.module.scss';
import type { Node } from '../../types';
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here

type Props = {
  post: Node
};

const Post = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, categorySlugs, slug } = post.fields;
  const { tags, categories, title, date } = post.frontmatter;

  return (
    <div className={styles['post']}>
      <Link className={styles['post__home-button', 'mobile-only-button']} to="/">Back</Link>

      <div className={styles['post__content']}>
        <Content details={post.frontmatter} title={title} body={html}/>
      </div>

      <div className={styles['post__footer']}>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}

        {categories && categorySlugs && <Categories categories={categories} categorySlugs={categorySlugs} />}
        <Author />
      </div>

      <div className={styles['post__comments']}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
      <ScrollUpButton />
    </div>
  );
};

export default Post;
