export default function ImageValidators(e) {
  if (e.target.files.length === 0)
    return "Please Upload an an Image"
  else if (e.target.files.length === 1) {
    let file = e.target.files[0]
    if (!(["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"].includes(file.type)))
      return `Invalid Pic Type, Please Upload a pic of type .jpg,.jpeg,.png,.gif,.webp`
    else if (file.size > 1048576)
      return "Pic is Too Heavy, Please Upload an Image Upto 1 MB"
    else
      return ""
  }
  else {
    let errorMessage = []
    let files = Array.from(e.target.files)
    files.forEach((x, index) => {
      if (!(["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"].includes(x.type)))
        errorMessage.push(`Invalid Pic${index + 1} Type, Please Upload a pic of type .jpg,.jpeg,.png,.gif,.webp`)
      else if (x.size > 1048576)
        errorMessage.push(`Pic${index + 1} is Too Heavy, Please Upload an Image Upto 1 MB`)
    })
    return errorMessage.length === 0 ? "" : errorMessage.join("|")
  }
}