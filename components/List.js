export default function List(props)
{
    const posts = props.posts
    return(
        <>
        <table className="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Content</th>
            <th scope="col">Author</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {posts.length && posts.map((user,key) => (
                <tr key={key}>    
                <th scope="row">{key}</th>
                <td>{user.title}</td>
                <td>{user.content}</td>
                <td>{user.author}</td>
                <td>
                <button className='btn btn-primary btn-sm' onClick={()=>props.handleEdit(user.id)}>Edit</button>
                <button className='btn btn-danger btn-sm' onClick={()=>props.handleDelete(user.id)}>Delete</button>
                </td>
                </tr>
            ))}
        </tbody>
        </table>
        </>
    )
}