import React from 'react'
import {Link} from 'react-router'

class PostForm extends React.Component {
    render() {
        return (
            <div>
                <h1>Nouveau post</h1>
                <form action="">
                    <div className="form-group">
                        <label >titre</label>
                        <input type="text" className="form-control"/>
                        <div></div>
                    </div>
                    <div className="form-group">
                        <label >descirption</label>
                        <input type="textarea" className="form-control"/>
                        <div></div>
                    </div>
                    <div className="form-group">
                        <label >Auteur</label>
                        <input type="text" className="form-control"/>
                        <div></div>
                    </div>
                    <Link to={'/'} className='button_space'><button className='btn btn-danger'>Retour</button></Link>
                    <button className="btn btn-primary" type='submit'>cree</button>
                </form>
            </div>
        )
    }
}

export default PostForm