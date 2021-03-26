const todoList = [
    {todo: "take dog on walk", status: "incomplete"},
    {todo: "wash the dishes", status: "complete"},
    {todo: "eat cake", status: "incomplete"},
    {todo: "drink water", status: "complete"}
]
let completedTodos = []

for (task of todoList) {
    if (task.status == 'complete') {
        completedTodos.push(task) 
    }
}

for ({todo} of completedTodos) {
    console.log(todo)
}


