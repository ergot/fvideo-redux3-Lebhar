import React from 'react'
import {Link} from 'react-router'
import {reduxForm} from 'redux-form'
import {createPost} from '../actions/index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

const formConfig = {
    form: 'createPostForm',
    fields: ['title', 'content', 'author'],
    validate: validate,
    initialValues: {author:'moi'}
}

class PostForm extends React.Component {
    render() {
        const {fields:{title, content, author}, handleSubmit, errors} = this.props

        return (
            <div>
                <h1>Nouveau post</h1>
                <form onSubmit={handleSubmit(this.createPost.bind(this))} >

                    <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : '' }`}>
                        <label >titre</label>
                        <input type="text" className="form-control" {...title}/>
                        <div>{title.touched && errors.title}</div>
                    </div>
                    <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : '' }`}>
                        <label >descirption</label>
                        <input type="textarea" className="form-control" {...content}/>
                        <div>{content.touched && errors.content}</div>
                    </div>
                    <div className={`form-group ${author.touched && author.invalid ? 'has-danger' : '' }`}>
                        <label >Auteur</label>
                        <input type="text" className="form-control" {...author}/>
                        <div>{author.touched && errors.author}</div>
                    </div>
                    <Link to={'/'} className='button_space'><button className='btn btn-danger'>Retour</button></Link>
                    <button className="btn btn-primary" type='submit' disabled={this.props.invalid}>cree</button>
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

 function validate(values) {
    const errors = {}
    if(!values.title){
        errors.title = 'veuillez remplir le titre'
    }
    if(!values.content){
        errors.content = 'veuillez remplir le content'
    }
    if(!values.author){
        errors.author = 'veuillez remplir l author'
    }

    return errors

 }

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({createPost}, dispatch),
});

export default connect(null,mapDispatchToProps)(reduxForm(formConfig)(PostForm))