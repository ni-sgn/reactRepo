export const getNameAndExtension = (fullName) =>
{
  const name = fullName.substring(0, fullName.lastIndexOf(".")).toUpperCase()
  const extension = fullName.substring(fullName.lastIndexOf(".")+1).toUpperCase()
  return [name, extension]
}

export const ValImageExtension = (ImageExtension) =>
{
    if (SUPPORTED_IMAGE_EXTENSIONS.includes(ImageExtension))
        return true;
    return false;
}

export const ValImageNameCollision = (ImageName, ImageList) =>
{
    for(var i = 0; i < ImageList.length; i++)
    {
        if(ImageList[i].name === ImageName)
            return false;
        console.log(ImageList[i].name)
    }
    return true;
}



const SUPPORTED_IMAGE_EXTENSIONS = ["JPG", "JPEG", "PNG", "GIF", "BMP", "SVG"]