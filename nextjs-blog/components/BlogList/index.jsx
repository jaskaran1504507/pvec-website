// Write your JS code here
import BlogItem from '../BlogItem'

// import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <div className="container mt-2">
    <ul className="blog-list">
      {blogsList.map(eachBlog => (
        <BlogItem key={eachBlog.id} blogDetails={eachBlog} />
      ))}
    </ul>
    </div>
  )
}

export default BlogList
