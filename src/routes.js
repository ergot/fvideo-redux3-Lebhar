import React from 'react'
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router'
import PostList from './containers/post-list'
import PostForm from './containers/post-form'
import Post from './containers/post'
import NotFound from './components/not-found'

class Routes extends React.Component {
    render() {
        return (
            <div>
                <Router history={browserHistory}>
                    <Route path="/" component={PostList}/>
                    <Route path="create-post" component={PostForm}/>
                    <Route path="post/:id" component={Post}/>
                    <Route path="*" component={NotFound}/>
                </Router>
            </div>
        )
    }
}

export default Routes