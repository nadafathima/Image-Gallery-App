import React,{useState,useEffect} from 'react'
import './Gallery.css'

function Gallery() {

    const [images, setImages] = useState([])

    useEffect(() => {

        const fetchImages =()=>{
            const data = [
                {
                    id:1,
                    url:'https://picsum.photos/id/1//300/200',
                    title:'Image1'
                },
                {
                    id:2,
                    url:'https://picsum.photos/id/2//300/200',
                    title:'Image2'
                },
                {
                    id:3,
                    url:'https://picsum.photos/id/3//300/200',
                    title:'Image3'
                },
                {
                    id:4,
                    url:'https://picsum.photos/id/4//300/200',
                    title:'Image4'
                },
                {
                    id:5,
                    url:'https://picsum.photos/id/5//300/200',
                    title:'Image5'
                },
                {
                    id:6,
                    url:'https://picsum.photos/id/6//300/200',
                    title:'Image6'
                },
        
            ]
        
            setImages(data)
    
        }
        fetchImages()
    
    }, [])

    const handleDeleteImage = (id)=> {
        setImages(images.filter((image)=>image.id !== id))
    }
    



  return (
    <>
    <div>
        <h1 className='title'>Image Gallery App</h1>
    </div>
    {
        images.length > 0 ?(
            <div className='img-grid'>

            {
                images.map((image)=>(
                    <div className='img-card' key={image.id}>
                        <img src={image.url} alt="" />
                
                    <div className="img-details">
                        <h3>{image.title}</h3>
                        <button onClick={()=>handleDeleteImage(image.id)}>Delete</button>
                    </div>
                    </div>
        
                ))

            }

        </div>

        )

        :

        <p className='no-imgs'>No Images Found!!</p>
    }
    </>
  )
}

export default Gallery
