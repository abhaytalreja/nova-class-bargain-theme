import Telescope from 'meteor/nova:lib';
import React, { PropTypes, Component } from 'react';
import { FormattedMessage, FormattedRelative } from 'react-intl';
import { Button } from 'react-bootstrap';
import moment from 'moment';
import { ModalTrigger } from "meteor/nova:core";
import { Link } from 'react-router';
import Posts from "meteor/nova:posts";
import Users from 'meteor/nova:users';

class CustomPostsItem extends Telescope.components.PostsItem {

  renderListVote(post) {
    if(this.props.display === 'list') {
      return (
        <div className="posts-item-vote">
          <Telescope.components.Vote post={post} />
        </div>
      )
    } else {
      return null;
    }
  }

  renderGridCategories(){
    if(this.props.display === 'grid'){
      return (
        <div className="posts-item-meta">
          {this.renderCategories()}
        </div>
      )
    } else {
      return null;
    }
  }

  renderListRow2(post){
    if(this.props.display === 'list'){
      return (
        <div className="posts-item-meta">
          {post.user? <div className="posts-item-user"><Telescope.components.UsersAvatar user={post.user} size="small"/><Telescope.components.UsersName user={post.user}/></div> : null}
          <div className="posts-item-date">{post.postedAt ? <FormattedRelative value={post.postedAt}/> : <FormattedMessage id="posts.dateNotDefined"/>}</div>
          <div className="posts-item-comments">
            <Link to={Posts.getPageUrl(post)}>
              <FormattedMessage id="comments.count" values={{count: post.commentCount}}/>
            </Link>
          </div>
          {this.context.currentUser && this.context.currentUser.isAdmin ? <Telescope.components.PostsStats post={post} /> : null}
          {this.renderActions()}
        </div>
      );
    } else {
      return null;
    }
  }

  renderGridRow2(post){
    if(this.props.display === 'grid'){
      return (
        <div>
          <div className="posts-item-meta">
            <div className="posts-item-vote">
              <Telescope.components.Vote post={post} currentUser={this.context.currentUser}/>
            </div>
            <div className="posts-item-comments">
              <Link to={Posts.getPageUrl(post)}>
                <FormattedMessage id="comments.count" values={{count: post.commentCount}}/>
              </Link>
            </div>
          </div>
          <div className="posts-item-meta">
            {post.user? <div className="posts-item-user"><Telescope.components.UsersAvatar user={post.user} size="small"/><Telescope.components.UsersName user={post.user}/></div> : null}
            <div className="posts-item-date"><FormattedRelative value={post.postedAt}/></div>
          </div>
          <div className="posts-item-meta">
            {(this.context.currentUser && this.context.currentUser.isAdmin) ?<Telescope.components.PostsStats post={post} />:null}
          </div>
          <div className="posts-item-meta">
            {this.renderActions()}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
  
  render() {

    const post = this.props.post;

    let postClass = "posts-item"; 
    if (post.sticky) postClass += " posts-sticky";

    // console.log(post)
    // console.log(post.user)

    return (
      <div className={postClass}>
        
        {this.renderListVote(post)}
        
        {post.thumbnailUrl ? <Telescope.components.PostsThumbnail post={post}/> : null}

        <div className="posts-item-content">
          <h3 className="posts-item-title">
            <Link to={Posts.getPageUrl(post)} className="posts-item-title-link">
              {post.title}
            </Link>
            {this.props.display === 'list' ? this.renderCategories() : null}
          </h3>

          {this.renderGridCategories(post)}

          {this.renderListRow2(post)}

          {this.renderGridRow2(post)}

        </div>        

        {this.props.display === 'list' ? this.renderCommenters() : null}
      
      </div>
    )
  }
};
  
CustomPostsItem.propTypes = {
  post: React.PropTypes.object.isRequired,
  display: React.PropTypes.string
}

CustomPostsItem.contextTypes = {
  currentUser: React.PropTypes.object
};

module.exports = CustomPostsItem;
export default CustomPostsItem;