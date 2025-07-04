let input = prompt("What would you like to do");
const todos = ["Collect food", "Clean the room"];

while (input !== `quit` && input !== `q`) {
    if (input === `list`) {
        console.log("**********************")
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("**********************")
    }
    else if (input === `new`) {
        const newtodo = prompt("Ok, what is the new todo ?")
        todos.push(newtodo);
        console.log(`${newtodo} added to the list`)
    }
    else if (input === `delete`) {
        const index = parseInt(prompt("Ok, Enter the indea to delete ?"))
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log(`Unkown index`);
        }

    }
    input = prompt("What would you like to do");
}
console.log("OK< you quit the app");
