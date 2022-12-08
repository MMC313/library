let myLibrary = [["Dogman","Dave Pilkey",69,"READ"],["Eragon","I forgot","Alot","NOT READ"]];

const bookList = document.getElementById("booklist");
const addBookButton = document.querySelector(".add")
const submitButton = document.getElementById("submit");
const cancelButton = document.getElementById("cancel");
const newDiv = document.createElement("div");




function Book() {
    refresh();
    /* Clears the book list before adding books in again, so no duplicates */

    for(i=0;i<myLibrary.length;i++){
        const newDiv = document.createElement("div");
        newDiv.id = `book${i}`
        
        bookList.appendChild(newDiv);

        if(myLibrary[i][3]==="READ"){
            newDiv.classList.add("read")
        }else if(myLibrary[i][3]==="NOT READ"){
            newDiv.classList.add("not-read")
        }

        for(x=0;x<4;x++){
            const containerDiv = document.createElement("div");
            const newText = document.createTextNode(myLibrary[i][x]);
            containerDiv.appendChild(newText);
            newDiv.appendChild(containerDiv);
        } 
        
        const anotherDiv = document.createElement("div")
        anotherDiv.classList.add("actions")


        const anotherBtn = document.createElement("button")
        anotherBtn.textContent = "Update"
        anotherBtn.classList = "update"
        anotherBtn.addEventListener("click",function(){
            if(myLibrary[newBtn.id][3]=== "READ"){
            myLibrary[newBtn.id][3]= "NOT READ"
            }else{myLibrary[newBtn.id][3]= "READ"}
            Book()
        })

        anotherDiv.appendChild(anotherBtn)


        /* connected remove button id to array index for easy splice*/

        const newBtn = document.createElement("button")
        newBtn.textContent = "Remove"
        newBtn.classList = "remove"
        newBtn.setAttribute("id",i)
        newBtn.addEventListener("click",function(){
            myLibrary.splice(newBtn.id,1)
            console.log(i)
            Book()
        })
        
        anotherDiv.appendChild(newBtn)
        
        newDiv.appendChild(anotherDiv)
        
    }
}

submitButton.addEventListener("click", function addBookToLibrary(event) {
    const title = document.getElementById("title").value
    const author = document.getElementById("author").value
    const pages = document.getElementById("pages").value
    const read = document.getElementById("read").value

    let newBook = [title,author,pages,read];

    myLibrary.push(newBook)
    
    Book();
    event.preventDefault();
    
    /* stops default submit action */
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
})


addBookButton.addEventListener("click", function(){
    document.getElementById("form").style.display = "flex"
}
)


cancelButton.addEventListener("click", function(event){
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";


    document.getElementById("form").style.display = "none"
    event.preventDefault();
})

function refresh(){
    bookList.textContent =""
}

Book();


