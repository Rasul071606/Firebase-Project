import { ref, push, set, database, onValue } from "./firebase.js";
// (Copy this into the new js file)

//get elements from index.html
let titleInput = document.getElementById("title")
let authorInput = document.getElementById("author")
let contentInput = document.getElementById("content")
let submitBtn = document.getElementById("submitBtn")

//referencing a part of our database (copy this into your new js file)
let blogRef = ref(database, "blogs")

//adding the items to the databse
submitBtn.onclick = function(event){
    event.preventDefault()
    let titleInputVal = titleInput.value
    let authorInputVal = authorInput.value
    let contentInputVal = contentInput.value
    console.log(titleInputVal)
    console.log(authorInputVal)
    console.log(contentInputVal)
    authorInput.value = ""
    titleInput.value = ""
    contentInput.value = ""

    let newBlogRef = push(blogRef)
    let blogVar = {
        title: titleInputVal,
        author: authorInputVal,
        content: contentInputVal,
     }
    set(newBlogRef,blogVar)
}

