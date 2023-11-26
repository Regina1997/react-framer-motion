import { Form } from 'react-router-dom'

const NewPost = ({submitting}) => {
  return (
    <Form action="/posts/new" method='post' className='new-post__form'>
      <label>
        Title:
        <input type="text" name="title" placeholder='create a title..'/>
      </label>
      <label>
        Description:
        <input type="text" name="description" placeholder='add description..'/>
      </label>  
      <input type="hidden" name="userId" value="1" />
      <input type="submit" value="Add post" disabled={submitting} />
    </Form>
  )
}

export default NewPost