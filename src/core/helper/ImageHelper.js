import React from "react"
import { API } from "../../backend";

const ImageHelper = ({product}) =>{
    const imageurl = product ? `${API}product/photo/${product._id}` : `https://images.pexels.com/photos/4322501/pexels-photo-4322501.jpeg?cs=srgb&dl=green-palm-tree-under-white-sky-4322501.jpg&fm=jpg`
    return(
        <div>
            <div
              class="bg-light box-shadow mx-auto"
              style={{
                width: "80%",
                height: "300px",
              }}
            >
                <img style={{
                width: "30%",
                height:"100%"
              }}  src={imageurl} />
            </div>
        </div>
    )
}

export default ImageHelper;