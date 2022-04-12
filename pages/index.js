import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header'
import List from '../components/List'
import axios from 'axios'
import React, { useState,useEffect } from 'react'; // <--- import the hook
export default function FormPost() {
    
    
    const [posts, setAllPosts] = useState('');
    const [action,setAction] = useState('add');
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    
    useEffect(() => {
        listPosts();
    }, []);

     /* The handleChange() function to set a new state for input */
    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    }
    const handleChangeContent = (event) => {
        setContent(event.target.value);
    }
    const handleChangeAuthor = (event) => {
        setAuthor(event.target.value);
    }
    const savePost = async (event) => {
        event.preventDefault()

        const btnAction = event.target.btnAction.value
        let endPoint = '';
        if(btnAction=='add')
        {
            endPoint = '/api/create'
        }
        else{
            endPoint = '/api/update'
        }
        
        axios.post(endPoint, {
            id: id,
            title: title,
            content: content,
            author: author,
        })
        .then(function (response) {
            setId('')
            setTitle('')
            setContent('')
            setAuthor('')
            listPosts()
        })
        .catch(function (error) {
        console.log(error);
        });
      }

    const listPosts = () => {
        const endPoint = "api/get-posts"
        axios.get(endPoint)
        .then((response)=>{
            const postsData = response.data
            setAllPosts(postsData)
        })
        .catch(error=>console.log(`Error: ${error}`))
    }

    const  handleDeletePost = (postid)=>{

        if(!confirm("Are you sure want to delete ?"))
        return false

        axios.post('/api/delete', {
            uid: postid,
        })
        .then(function (response) {
            setAction('add')
            setId('')
            setTitle('')
            setContent('')
            setAuthor('')
            listPosts()
        })
        .catch(function (error) {
        console.log(error);
        });
    }


    const  handleEditPost = (postid)=>{
        axios.post('/api/get-post', {
            uid: postid,
        })
        .then(function (response) {
            setAction('update')
            setId(response.data[0].id)
            setTitle(response.data[0].title)
            setContent(response.data[0].content)
            setAuthor(response.data[0].author)
        })
        .catch(function (error) {
        console.log(error);
        });
    }

  
    return (
      <>
      <div className="container">
      <Header/>
      <div className='row'>
        <div className='col-8'>
        <List posts={posts} handleDelete={(postid)=>{handleDeletePost(postid)}} handleEdit={(postid)=>{handleEditPost(postid)}}/>
        </div>
        <div className='col-4'>
        <form onSubmit={savePost}>
            <input type="hidden" value={id} />
        <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
        <input type="text" name="title" value={title} onChange={handleChangeTitle} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="title" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Content</label>
        <input type="text" name="content" value={content} onChange={handleChangeContent} className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
        <label htmlFor="exampleInputPassword2" className="form-label">Author</label>
        <input type="text" name="author" value={author} onChange={handleChangeAuthor} className="form-control" id="exampleInputPassword2" />
        </div>
        <button type="submit" name='btnAction' value={action} className="btn btn-primary">{action}</button>
        </form>
        </div>
      </div>
      </div>
      </>
    )
  }