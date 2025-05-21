//run npm init on local machine to download the necessary node modules

class Library {
    name: string;
    books: string[] | null;
    members: string[] | null;

    constructor(name: string, books: string | string[] | null, members: string | string[] | null) {
        this.name = name;

        if (typeof books === 'string') {
            this.books = [books];
        } else {
            this.books = books;
        }

        if (typeof members === 'string') {
            this.members = [members];
        } else {
            this.members = members;
        }
    }

    public addMembers(members: string | string[]) {
        if (typeof members === 'string') {
            this.members = (this.members ?? []).concat(members);
        } else {
            this.members = (this.members ?? []).concat(members);
        }
    }

    public addBooks(books: string | string[]) {
        if (typeof books === 'string') {
            this.books = (this.books ?? []).concat(books);
        } else {
            this.books = (this.books ?? []).concat(books);
        }
    }
}


class Tasks {
    task: string 
    completed?: boolean;

    constructor(task: string) {
        this.task= task;  
        this.completed = false;
    }

    completedTask(){
        this.completed = true
    }
}

class TaskManager {
    tasks: Tasks[] = [];

    createTask(task: string) {
        this.tasks.push(new Tasks(task));  // Changed from join() to push()
    }

    updateTask(task:string){
        this.tasks.map(a=> {if(a.task ===task){
            a.completedTask()
        }})
    }

    listTasks(){
        this.tasks.map(a=>console.log(a.task))
    }
}


// ———————— Tests ————————

// Library tests
const myLib = new Library("City Library", "Moby Dick", ["Alice"]);
console.log("After init:", myLib);
// Expect books = ["Moby Dick"], members = ["Alice"]

myLib.addBooks("The Hobbit");
console.log("Added one book:", myLib.books);
// Expect books = ["Moby Dick", "The Hobbit"]

myLib.addBooks(["1984", "Brave New World"]);
console.log("Added multiple books:", myLib.books);
// Expect books = ["Moby Dick", "The Hobbit", "1984", "Brave New World"]

myLib.addMembers("Bob");
console.log("Added one member:", myLib.members);
// Expect members = ["Alice", "Bob"]

myLib.addMembers(["Carol", "Dave"]);
console.log("Added multiple members:", myLib.members);
// Expect members = ["Alice", "Bob", "Carol", "Dave"]


// TaskManager tests
const tm = new TaskManager();
tm.createTask("Write report");
tm.createTask("Do laundry");
console.log("After creating tasks:", tm.tasks.map(t => `${t.task} (done=${t.completed})`));
// Expect two tasks, both completed = false

tm.updateTask("Write report");
console.log("After marking 'Write report' done:", tm.tasks.map(t => `${t.task} (done=${t.completed})`));
// Expect first task done = true, second = false

console.log("Listing tasks:"); 
tm.listTasks();
// Should log:
// Write report
// Do laundry


// Simple assertions (will throw if wrong)
if (!myLib.books?.includes("1984")) throw new Error("Book 1984 missing");
if (tm.tasks.find(t => t.task === "Write report")?.completed !== true) throw new Error("Write report should be completed");

console.log("✅ All tests passed");










