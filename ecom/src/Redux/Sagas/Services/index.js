//Create Record Function to Call POST API When Record Has Only Text Data
export async function createRecord(collection, payload) {
    try {
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        response = await response.json()
        return response
    } catch (error) {
        console.log(error)
        return []
    }
}

//Create Record Function to Call POST API When Record Has FOrm Data i.e file field
export async function createMultipartRecord(collection, payload) {
    try {
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`, {
            method: "POST",
            headers: {
            },
            body: payload
        })
        response = await response.json()
        return response
    } catch (error) {
        console.log(error)
        return []
    }
}

//get Record Function to Call GET API
export async function getRecord(collection, payload) {
    try {
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })
        response = await response.json()
        return response
    } catch (error) {
        console.log(error)
        return []
    }
}

//Update Record Function to Call PUT API When Record Has Only Text Data
export async function updateRecord(collection, payload) {
    try {
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}/${payload.id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        response = await response.json()
        return response
    } catch (error) {
        console.log(error)
        return []
    }
}

//Update Record Function to Call PUT API When Record Has FOrm Data i.e file field
export async function updateMultipartRecord(collection, payload) {
    try {
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}/${payload.get("id")}`, {
            method: "PUT",
            headers: {
            },
            body: payload
        })
        response = await response.json()
        return response
    } catch (error) {
        console.log(error)
        return []
    }
}

//Delete Record Function to Call DELETE API When Record Has Only Text Data
export async function deleteRecord(collection, payload) {
    try {
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/${collection}/${payload.id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        })
        response = await response.json()
        return response
    } catch (error) {
        console.log(error)
        return []
    }
}