export const generateFormData = (data: any) => {
  const formData = new FormData()

  for (const key in data) {
    let value = data[key]

    if (key === 'images' && data.images) {
      for (let i = 0; i < data.images.length; i++) {
        formData.append(`images[${i}]`, data.images[i])
      }
    } else if (typeof value === 'boolean') {
      formData.append(key, Number(value).toString())
    } else {
      formData.append(key, value)
    }
  }

  return formData
}
