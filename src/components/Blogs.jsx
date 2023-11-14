import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';

const Blogs = () => {
    // consume data from AppContext
    const {posts, loading} = useContext(AppContext);

    // console.log("Printing inside Blogs Component:");
    // console.log(posts);

  return (
    <div className='w-1/2 mx-auto'>
        {/* if loading is true, show spinner. else check posts.length.  if length is 0, <p></p> else take every post using map function and make a Card */}
        
        {
            loading ? (<Spinner />) : 
            (posts.length === 0 ? (<div><p>No Post Found</p></div>) : 
            (<div className='my-28'>{posts.map( (post) => (
                <div key={post.id} className='flex flex-col my-10 '>
                    <p className='font-bold mb-1'>{post.title}</p>
                    <div className='mb-2 text-sm'>
                        <p>
                            By <span className='italic '>{post.author}</span> on <span className='underline font-semibold cursor-pointer'>
                            {post.category}
                            </span>
                        </p>
                        <p>
                            Posted on {post.date}
                        </p>
                    </div>
                    
                    <p className='mb-1'>{post.content}</p>
                    <div>
                        {post.tags.map( (tag, index) => {
                            return <span key={index}
                            className='text-blue-700 mx-1 text-xs font-semibold'>{`#${tag}`}</span>
                        } )}
                    </div>
                </div>
            )  )}</div>)
        )
        }
    </div>
  )
}

export default Blogs