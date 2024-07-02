// GET
// https://api.newtimes.az/api/dashboard/tags/index?page=1&limit=10

// POST
// https://api.newtimes.az/api/dashboard/tags/store

// name
// : 
// "TTT"

// https://api.newtimes.az/api/dashboard/tags/delete/51

// method DELETE

// https://api.newtimes.az/api/dashboard/tags/update/51
//  Name göndərmək lazımdır
// 51in yerində isə seçdiyiniz tagin idsi olmalıdı






const getTags = async (page = 1, limit = 10) => {
    const url = `https://api.newtimes.az/api/dashboard/tags/index?page=${page}&limit=${limit}`
    try {
      const response = await fetch(url, { method: "GET" })
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
  
getTags()
  



const createTag = async (name) => {
    const url = "https://api.newtimes.az/api/dashboard/tags/store"
    const payload = { name: name }
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.error("Failed to create tag:", error)
    }
}
createTag("TTT")




const deleteTag = async (id) => {
    const url = `https://api.newtimes.az/api/dashboard/tags/delete/${id}`
    try {
        const response = await axios.delete(url)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error("Failed to delete tag:", error)
    }
}
deleteTag(51)




const updateTag = async (id, name) => {
    const url = `https://api.newtimes.az/api/dashboard/tags/update/${id}`
    const payload = { name: name }
    try {
        const response = await axios.put(url, payload)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error("Failed to update tag:", error)
    }
}
updateTag(51, "Updated Name")