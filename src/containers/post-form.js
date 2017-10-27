import React from 'react'
import {Link} from 'react-router'
import {reduxForm} from 'redux-form'
import {createPost} from '../actions/index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

const formConfig = {
    form: 'createPostForm',
    fields: ['title', 'content', 'author']
}

class PostForm extends React.Component {
    render() {
        const {fields, handleSubmit} = this.props

        return (
            <div>
                <h1>Nouveau post</h1>
                <form onSubmit={handleSubmit(this.createPost.bind(this))} >
                    <div className="form-group">
                        <label >titre</label>
                        <input type="text" className="form-control" {...fields.title}/>
                        <div></div>
                    </div>
                    <div className="form-group">
                        <label >descirption</label>
                        <input type="textarea" className="form-control" {...fields.content}/>
                        <div></div>
                    </div>
                    <div className="form-group">
                        <label >Auteur</label>
                        <input type="text" className="form-control" {...fields.author}/>
                        <div></div>
                    </div>
                    <Link to={'/'} className='button_space'><button className='btn btn-danger'>Retour</button></Link>
                    <button className="btn btn-primary" type='submit'>cree</button>
                </form>
            </div>
        )
    }

    createPost(post) {
        this.props.createPost(post)
        browserHistory.push('/')
    }

}

// const mapStateToProps = (state) => {
//     return {
//         posts: state.posts
//     }
// }

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({createPost}, dispatch),
});

export default connect(null,mapDispatchToProps)(reduxForm(formConfig)(PostForm))