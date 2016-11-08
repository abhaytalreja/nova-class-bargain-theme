/*
This file centralizes all our custom component overrides. 
*/

import Telescope from 'meteor/nova:lib';

import CustomVote from "./components/posts/CustomVote.jsx";
import CustomFooter from "./components/CustomFooter.jsx";
import CustomPostsHome from "./components/posts/CustomPostsHome.jsx";
import CustomPostsPage from "./components/posts/CustomPostsPage.jsx";
import CustomPostsItem from "./components/posts/CustomPostsItem.jsx";
import CustomPostsList from "./components/posts/CustomPostsList.jsx";
// import CustomNewsletter from "./components/CustomNewsletter.jsx";
// import CustomPostsItem from "./components/CustomPostsItem.jsx";

Telescope.components.Vote = CustomVote;
Telescope.components.Footer = CustomFooter;
Telescope.components.PostsHome = CustomPostsHome;
Telescope.components.PostsPage = CustomPostsPage;
Telescope.components.PostsList = CustomPostsList;
Telescope.components.PostsItem = CustomPostsItem;
// Telescope.components.Newsletter = CustomNewsletter;
// Telescope.components.PostsItem = CustomPostsItem