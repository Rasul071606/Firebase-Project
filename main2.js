import { ref, push, set, database, onValue } from "./firebase.js";

let blogRef = ref(database, "blogs")
//get elements from index.html
let itemsContainer = document.getElementById("results")

//show itemsContainer on firebase in our itemsContainer container
onValue(blogRef, (snapshot)=>{
    itemsContainer.innerHTML = ""
    let data = snapshot.val();
    console.log(data)
    for(let key in data){
        console.log(data[key])

        let newDiv = document.createElement("div")

        let newh1 = document.createElement("h1")
        newh1.innerHTML = data[key].title
        newDiv.append(newh1)

        let newh2 = document.createElement("h2")
        newh2.innerHTML = data[key].author
        newDiv.append(newh2)

        let newh3 = document.createElement("h3")
        newh3.innerHTML = data[key].content
        newDiv.append(newh3)

        newDiv.style.border = "black 4px solid"

        itemsContainer.append(newDiv)

        let divider = document.createElement("br");
        let divider2 = document.createElement("br");
        itemsContainer.append(divider)
        itemsContainer.append(divider2)
        
        
    }
})