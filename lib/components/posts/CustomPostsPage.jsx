import Telescope from 'meteor/nova:lib';
import React from 'react';
import Posts from "meteor/nova:posts";

const CustomPostsPage = ({document, currentUser, display}) => {
  
  const post = document;
  const htmlBody = {__html: post.htmlBody};
  const cssClass = "posts-page " + display;

  return (
    <div className={cssClass}>

      <Telescope.components.HeadTags url={Posts.getLink(post)} title={post.title} image={post.thumbnailUrl} />
      
      <Telescope.components.PostsItem post={post} display={display}/>

      {post.htmlBody ? <div className="posts-page-body" dangerouslySetInnerHTML={htmlBody}></div> : null}

      {/*<SocialShare url={ Posts.getLink(post) } title={ post.title }/>*/}

      <Telescope.components.PostsCommentsThread document={post} />

    </div>
  )
};

CustomPostsPage.displayName = "CustomPostsPage";

module.exports = CustomPostsPage;
export default CustomPostsPage;