class List {
    constructor() {
        this.data = []
    }

    add(data) {
        this.data.push(data)
        console.log(this.data)
    }
}



class TodoList extends List {


/*     constructor() {
        this.todos = []
    }

    addTodo() {
        this.todos.push('Novo To Do')
        console.log(this.todos)
    } */
}

const MinhaLista = new TodoList()

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo To Do')
}

// metodos static não usam construtor porque não enxergam acima na classe