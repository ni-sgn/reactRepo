export const addImage = (ImageBase64) => 
{
    const Images = getImageList()
    const ImagesExtended = [...Images, ImageBase64]
    localStorage.setItem('Images', JSON.stringify(ImagesExtended))
}

export const pseudoRemoveImage = (ImageList) =>
{
    localStorage.setItem('Images', JSON.stringify(ImageList));
}

export const getImageList = () =>
{
    const Images = JSON.parse(localStorage.getItem('Images')) || []
    return Images
}