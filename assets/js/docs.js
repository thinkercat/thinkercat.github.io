
newA = document.createElement('a'),
    newTitle = document.createElement('p'),
    newDescription = document.createElement('p')
    newDiv = document.createElement('div')

class CreateDocument {
    constructor(title, description){
        const docList = document.getElementById("docList")

        this.title = title
        this.description = description
        this.container = docList

    }
    create(){
        newTitle.textContent = this.title
        newDescription.textContent = this.title
        this.container.append(newA.append(newTitle,newDiv.append(newDescription)))
    }
}
CreateDocument.create("hello","this is the description")