import React, { useState } from 'react'
import axios from '../login/axios'

const UploadClearImg=()=>{ 
    const [imageData, setImageData] = useState([]);
    const [imagesUp, setImagesUp] = useState({});

    const handleImagesUp = () => { 
        const formData = new FormData();
        console.log(imagesUp)
        for (const item of imagesUp) {
            formData.append('photo', item)
            console.log(item)
        }
        if (imageData) {
            axios.put("/updata/orderdoneimages",formData)
        }
    }

    const handleImagePut=(e)=> {
        const images = [...e.target.files].map((file) => {
            return {
              name: file.name,
              url: URL.createObjectURL(file),
            }
        })
        setImagesUp(e.target.files)
        setImageData(images)
    }


    return (
        <>
            <form>
                <label className='orderBtn' htmlFor="lable">
                <input
                    multiple
                    style={{ display: 'none' }}
                    onInput={handleImagePut}
                    id='lable'
                    type="file"
                    accept="image/*"
                />
                    <div>+</div>
                </label>
                <button className='orderBtn' type="button" onClick={() => {handleImagesUp()}}>打掃完成</button>
            </form>
            <div style={{ width:"400px",display:"flex" ,flexWrap:"wrap"}}>
            {imageData && imageData.map((file) => {
                return (
                    <div key={file.name} style={{width:"120px"}}>
                        <img className='w-100' src={file.url} alt="aa" />
                    </div>
                )
            }) }
            </div>
            </>
)    
}
export default UploadClearImg