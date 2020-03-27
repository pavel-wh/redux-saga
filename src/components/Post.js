import React from 'react'

export default ({post}) => {
    return (
        <div className="card mb-2">
            <div className="card-body">
                <h2 className="card-title">Title here {post.title}</h2>
            </div>
        </div>
    )
}