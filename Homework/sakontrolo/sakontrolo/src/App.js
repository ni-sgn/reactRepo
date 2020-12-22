/**
 * Magali xarisxis suratebi localStorage-s male avseben
 * Tu gashvebamde localStorage sufta ar aris sxva monacemebisagan
 *                aplikacia gamartulad ver imushavebs
 */

//components
import {useState, useEffect, useRef} from 'react'
import ImageList from './Components/Gallery/ImageList'

//database
import * as db from './DB/dbInterface'

//styles
import './Styles/Styles.css';

//additional
import * as helper from "./Helpers/Validation"
import { render } from '@testing-library/react';


function App() {
  const [Images, setImages] = useState([])
  const ValRef = useRef()
  const FocusRef = useRef()


  useEffect( () =>
  {
    const InitialGallery = db.getImageList
    setImages(InitialGallery)
  }, [] )



const handleInsert = (event) =>
  {
    var input = event.target;
    var reader = new FileReader();
  
    reader.onload = function()
    {
      var dataURL = reader.result
      var FileName = helper.getNameAndExtension(input.files[0].name)

      //sending getImageList like this might be bad, reference to something already existing would be better
      //but when I send Image as a parameter, it isn't working...
      if(helper.ValImageExtension(FileName[1]) && helper.ValImageNameCollision(FileName[0], db.getImageList()))
      {
          ValRef.current.style.backgroundColor = "green"
          
          
          const newImage = 
          {
          name: FileName[0],
          data: dataURL
          }
          db.addImage(newImage)
          
          const UpdatedGallery = db.getImageList
          setImages(UpdatedGallery)  
          

      }else{
        ValRef.current.style.backgroundColor ="red"
        FocusRef.current.focus();
       }
    };
    
    if(input.files[0])
      reader.readAsDataURL(input.files[0])
  }

  const handleRemove = (ImageName) =>
  {
      const temp = Images.filter(element => element.name !== ImageName)
      const NewImageList = db.pseudoRemoveImage(temp)
      setImages(temp)
      
  }


  return (
    <div className="App">

        <form id="UploadForm" ref={ValRef}>

            <input type="file" onChange={handleInsert} id="Upload" ref={FocusRef}/>

        </form>
        <ImageList Images={Images} handleRemove={handleRemove}/>
    </div>
  );
}

export default App;
