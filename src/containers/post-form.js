import React from 'react'
import {Link} from 'react-router'
import {reduxForm} from 'redux-form'
import {createPost} from '../actions/index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

const formConfig = {
    form: 'createPostForm',
    fields: ['title', 'content', 'author']
}

class PostForm extends React.Component {
    render() {
        const {fields} = this.props

        return (
            <div>
                <h1>Nouveau post</h1>
                <form action="">
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
}

export default connect(null,null)(reduxForm(formConfig)(PostForm))