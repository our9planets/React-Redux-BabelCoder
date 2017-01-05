import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class PageForm extends Component {
    render(){
        const { handleSubmit } = this.props
        return(
            <form onSubmit={handleSubmit(this.props.createPage)}>
                <div>
                    <label>Title</label>
                    <div>
                        <Field name="title" component="input" type="text" />
                    </div> 
                </div>
                <div>
                    <label>Content</label>
                    <div>
                        <Field name="content" component="input" type="text" />
                    </div> 
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
             </form>
        )
    }
}


PageForm = reduxForm({
    form: 'simple',
})(PageForm)

export default PageForm