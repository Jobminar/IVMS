import React from 'react';
import blogsArray from './blogsdata';
import '../styles/blogs.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
    const navigate = useNavigate()
    // view page
    const [selectedblog, setSelectedblog] = useState('');
  
    const handleProduct = (item) => {
        console.log('blog redirected')
      setSelectedblog(item);
      navigate('/blogview', { state: { selectedblog: item } });
      console.log(item,'data')
    };

  return (
    <>
        <div className="blog-container">
          {blogsArray.map((blog, index) => (
            <div key={index} className="blog-item"  onClick={() => handleProduct(blog)}>
               <img src={blog.image} alt='blogimage'/>
              <div className='relative-content'>
                <h2>{blog.title}</h2>
              </div>
            </div>
          ))}
        </div>
    </>
    
  );
};

export default Blogs;
