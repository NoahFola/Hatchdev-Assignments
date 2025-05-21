var _a, _b;
var Library = /** @class */ (function () {
    function Library(name, books, members) {
        this.name = name;
        if (typeof books === 'string') {
            this.books = [books];
        }
        else {
            this.books = books;
        }
        if (typeof members === 'string') {
            this.members = [members];
        }
        else {
            this.members = members;
        }
    }
    Library.prototype.addMembers = function (members) {
        var _a, _b;
        if (typeof members === 'string') {
            this.members = ((_a = this.members) !== null && _a !== void 0 ? _a : []).concat(members);
        }
        else {
            this.members = ((_b = this.members) !== null && _b !== void 0 ? _b : []).concat(members);
        }
    };
    Library.prototype.addBooks = function (books) {
        var _a, _b;
        if (typeof books === 'string') {
            this.books = ((_a = this.books) !== null && _a !== void 0 ? _a : []).concat(books);
        }
        else {
            this.books = ((_b = this.books) !== null && _b !== void 0 ? _b : []).concat(books);
        }
    };
    return Library;
}());
var Tasks = /** @class */ (function () {
    function Tasks(task) {
        this.task = task;
        this.completed = false;
    }
    Tasks.prototype.completedTask = function () {
        this.completed = true;
    };
    return Tasks;
}());
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
    }
    TaskManager.prototype.createTask = function (task) {
        this.tasks.push(new Tasks(task)); // Changed from join() to push()
    };
    TaskManager.prototype.updateTask = function (task) {
        this.tasks.map(function (a) {
            if (a.task === task) {
                a.completedTask();
            }
        });
    };
    TaskManager.prototype.listTasks = function () {
        this.tasks.map(function (a) { return console.log(a.task); });
    };
    return TaskManager;
}());
// ———————— Tests ————————
// Library tests
var myLib = new Library("City Library", "Moby Dick", ["Alice"]);
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
var tm = new TaskManager();
tm.createTask("Write report");
tm.createTask("Do laundry");
console.log("After creating tasks:", tm.tasks.map(function (t) { return "".concat(t.task, " (done=").concat(t.completed, ")"); }));
// Expect two tasks, both completed = false
tm.updateTask("Write report");
console.log("After marking 'Write report' done:", tm.tasks.map(function (t) { return "".concat(t.task, " (done=").concat(t.completed, ")"); }));
// Expect first task done = true, second = false
console.log("Listing tasks:");
tm.listTasks();
// Should log:
// Write report
// Do laundry
// Simple assertions (will throw if wrong)
if (!((_a = myLib.books) === null || _a === void 0 ? void 0 : _a.includes("1984")))
    throw new Error("Book 1984 missing");
if (((_b = tm.tasks.find(function (t) { return t.task === "Write report"; })) === null || _b === void 0 ? void 0 : _b.completed) !== true)
    throw new Error("Write report should be completed");
console.log("✅ All tests passed");
