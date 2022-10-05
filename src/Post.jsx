import React from 'react'

const Post = ({ posts }) => {
    
  return (
    <div>
        {
        posts.map(post => (
            
            <div className='post'>
                <img src={post.img} alt="" />
                <div className="content">
                    <h3>{post.songName}</h3>
                    <p>{post.artistName}</p>
                </div>
            </div>
        ))
            
    }
    </div>
  )
}

export default Post