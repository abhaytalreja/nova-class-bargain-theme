import Telescope from 'meteor/nova:lib';
import React, { PropTypes, Component } from 'react';
import { ListContainer, DocumentContainer } from "meteor/utilities:react-list-container";
import Posts from "meteor/nova:posts";
import { Toggle } from 'react-filters/dist';

class CustomPostsHome extends Telescope.components.PostsHome {

  constructor(props) {
    super(props);
  
    this.state = {on: false, display: 'list'};
  }

  displayChange(){
    if(this.state.display === 'list'){
      this.setState({display: 'grid', on: true});
    } else {
      this.setState({display: 'list', on: false});
    }
  }
  
  render() {

    const params = {...this.getDefaultView(), ...this.props.location.query, listId: "posts.list.main"};
    const {selector, options} = Posts.parameters.get(params);

    return (
      <div className={this.state.display}>
        <div>
          <span style={{fontSize: 22}}>Display : </span>
            <span>
            <Toggle
              name='switch-icon-label'
              iconLabel={[' grid ', ' list']}
              onChange={() => this.displayChange()}
              value={this.state.on}
            />
          </span>
        </div>
        <ListContainer 
          collection={Posts} 
          publication="posts.list"
          selector={selector}
          options={options}
          terms={params} 
          joins={Posts.getJoins()}
          component={Telescope.components.PostsList}
          cacheSubscription={true}
          listId={params.listId}
          limit={Telescope.settings.get("postsPerPage", 10)}
          componentProps={{display: this.state.display}}
        />
      </div>
    )
  }
};

module.exports = CustomPostsHome;