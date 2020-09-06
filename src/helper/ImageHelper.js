import React from 'react'

const ImageHelper=(props)=> {
    return (
        <div className="rounded bg-light border-success p-2">
                <img
                  src={props.imageURL}
                  alt="No Image Found"
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                  className="mb-3 rounded"
                />
              </div>
    )
}


export default ImageHelper