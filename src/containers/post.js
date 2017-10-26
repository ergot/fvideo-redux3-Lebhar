import React from 'react'
import PostContent from '../components/post-content'

class Post extends React.Component {
    render() {
        return (
            <div>
                post num: {this.props.params.id}
                <PostContent/>
            </div>
        )
    }
}

export default Post