var questions = [
    {
        qno: 1,
        question: "1: What is the correct syntax to declare a variable in JavaScript?",
        opt1: "var variableName;",
        opt2: "let variableName;",
        opt3: "const variableName;",
        opt4: "All of the above",
        ans: "var variableName;"
    },
    {
        qno: 2,
        question: "2: Which of the following is used to create an object in JavaScript?",
        opt1: "{}",
        opt2: "[]",
        opt3: "()",
        opt4: "< >",
        ans: "var variableName;"
    },
    {
        qno: 3,
        question: "3: Which method is used to parse a string to an integer in JavaScript?",
        opt1: "parseInt()",
        opt2: "parseInteger()",
        opt3: "parseNumber()",
        opt4: "parseFloat()",
        ans: "parseInt()"
    },
    {
        qno: 4,
        question: "4: How can you add a comment in JavaScript?",
        opt1: "/* This is a comment */",
        opt2: "# This is a comment",
        opt3: "// This is a comment",
        opt4: "<--!This is a comment-->",
        ans: "// This is a comment"
    },
    {
        qno: 5,
        question: "5: What is the output of console.log(typeof null); in JavaScript?",
        opt1: "null",
        opt2: "object",
        opt3: "undefined",
        opt4: "undefined",
        ans: "object"
    },
    {
        qno: 6,
        question: "6: Which of the following is a JavaScript framework?",
        opt1: "Django",
        opt2: "Flask",
        opt3: "Angular",
        opt4: "Ruby on Rails",
        ans: "Angular"
    },
    {
        qno: 7,
        question: "7: How do you define a function in JavaScript?",
        opt1: "function myFunction() {}",
        opt2: "def myFunction() {}",
        opt3: "/function: myFunction() {}",
        opt4: "function: myFunction() {}",
        ans: "function myFunction() {}"
    },
    {
        qno: 8,
        question: "8: Which of the following is the correct way to write an array in JavaScript?",
        opt1: 'var colors = "red", "green", "blue";',
        opt2: 'var colors = ["red", "green", "blue"];',
        opt3: 'var colors = (1:"red", 2:"green", 3:"blue")',
        opt4: 'var colors = {red, green, blue};',
        ans: 'var colors = ["red", "green", "blue"];'
    },
    {
        qno: 9,
        question: '9: What will be the output of the following code? <br>&nbsp;&nbsp;&nbsp; console.log("5" + 5);',
        opt1: "NaN",
        opt2: "10",
        opt3: "55",
        opt4: "TypeError",
        ans: " 55"
    },
    {
        qno: 10,
        question: "10: How do you check if a variable x is an array in JavaScript?",
        opt1: "if (x.isArray())",
        opt2: "if (Array.isArray(x))",
        opt3: "if (x.instanceOf(Array))",
        opt4: "if (x === array)",
        ans: "if (Array.isArray(x))"
    },
    {
        qno: 11,
        question: "11: What is the result of the following code? <br>&nbsp;&nbsp;&nbsp;&nbsp; typeof NaN;",
        opt1: "null",
        opt2: "number",
        opt3: "undefined",
        opt4: "string",
        ans: "number"
    },
    {
        qno: 12,
        question: "12: Which function is used to serialize an object into a JSON string in JavaScript?",
        opt1: "JSON.parse()",
        opt2: "JSON.stringify()",
        opt3: "JSON.objectify()",
        opt4: "JSON.serialize()",
        ans: "JSON.stringify()"
    },
    {
        qno: 13,
        question: "13: How do you find the minimum value of the numbers 5, 10, and 15?",
        opt1: "Math.min(5, 10, 15)",
        opt2: "Math.smallest(5, 10, 15)",
        opt3: "Math.minimum(5, 10, 15)",
        opt4: "Math.lowest(5, 10, 15)",
        ans: " Math.min(5, 10, 15)"
    },
    {
        qno: 14,
        question: "14: Which of the following is NOT a reserved word in JavaScript?",
        opt1: "interface",
        opt2: "throws",
        opt3: "program",
        opt4: "short",
        ans: "program"
    },
    {
        qno: 15,
        question: "15: What is the purpose of the Array.prototype.filter() method in JavaScript?",
        opt1: "To create a new array with all elements that pass the test implemented <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; by the provided function",
        opt2: "To iterate over all elements of the array and return the first element <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; that passes a test",
        opt3: "To apply a function against an accumulator and each element in the array <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; from left to right",
        opt4: "To create a new array with the results of calling a provided function on <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; every element in the array",
        ans: " To create a new array with all elements that pass the test implemented by <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the provided function"
    },
    {
        qno: 16,
        question: "16: Which of the following is the correct way to write a JavaScript object?",
        opt1: 'var obj = { name: "John", age: 30 };',
        opt2: 'var obj = { "name"; "John", "age"; 30 };',
        opt3: 'var obj = { name = "John", age = 30 };',
        opt4: 'var obj = ( name: "John", age: 30 );',
        ans: ' var obj = { name: "John", age: 30 };'
    },
    {
        qno: 17,
        question: "17: What is the output of the following code? <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; console.log(0.1 + 0.2 == 0.3);",
        opt1: "true",
        opt2: "false",
        opt3: "undefined",
        opt4: "NaN",
        ans: "false"
    },
    {
        qno: 18,
        question: "18: Which of the following is a way to create an array with a length of 10?",
        opt1: 'var arr = new Array(10);',
        opt2: 'var arr = Array.length(10);',
        opt3: 'var arr = new Array.length(10);',
        opt4: 'var arr = createArray(10);',
        ans: 'var arr = new Array(10);'
    },
    {
        qno: 19,
        question: "19: What will be the output of the following code? <br>&nbsp;&nbsp;&nbsp;&nbsp; let x = 10; <br> &nbsp;&nbsp;&nbsp;&nbsp; x += 5; <br>&nbsp;&nbsp;&nbsp;&nbsp; console.log(x);",
        opt1: "10",
        opt2: "15",
        opt3: "NaN",
        opt4: "undefined",
        ans: "15"
    },
    {
        qno: 20,
        question: "20: How do you remove the last element from an array in JavaScript?",
        opt1: "array.pop()",
        opt2: "array.removeLast()",
        opt3: "array.delete()",
        opt4: "array.shift()",
        ans: "array.pop()"
    },
    {
        qno: 21,
        question: "21: Can you guess the result? <br>&nbsp;&nbsp;&nbsp;&nbsp; console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());",
        opt1: "bananaa",
        opt2: "baaa",
        opt3: "banana",
        opt4: "ananas",
        ans: "banana"
    },
    {
        qno: 22,
        question: "22: Do you know what will be the output of this code? <br>&nbsp;&nbsp;&nbsp;&nbsp; console.log(3 > 2 > 1);",
        opt1: "true",
        opt2: "NaN",
        opt3: "false",
        opt4: "undefine",
        ans: "false"
    },
    {
        qno: 23,
        question: "23: Do you know what will be the output of this code? <br>&nbsp;&nbsp;&nbsp;&nbsp; console.log(String.raw`HelloTwitter\nworld`);",
        opt1: 'HelloTwitter\nworld',
        opt2: '"HelloTwitter',
        opt3: '"HelloTwitter world"',
        opt4: '"Hello Twitter world"',
        ans: "HelloTwitter\nworld"
    },
    {
        qno: 24,
        question: "24: Do you know what will be the output of this code? <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; const numbers = [33, 2, 8];  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; numbers.sort(); <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; console.log(numbers[1])",
        opt1: "33",
        opt2: "2",
        opt3: "8",
        opt4: "1",
        ans: "33"
    },
    {
        qno: 25,
        question: "25: Do you know what will be the output of this code? <br>&nbsp;&nbsp;&nbsp;&nbsp; console.log(typeof typeof 1);",
        opt1: "string",
        opt2: "number",
        opt3: "1",
        opt4: "true",
        ans: "string"
    },
    {
        qno: 26,
        question: "26: Which of the following is a server-side Java Script object?",
        opt1: "Function",
        opt2: "File",
        opt3: "FileUpload",
        opt4: "Date",
        ans: "File"
    },
    {
        qno: 27,
        question: "27: How does Java Script store dates in objects of Date type?",
        opt1: "The number of days since January 1st, 1900",
        opt2: "The number of seconds since January 1st, 1970",
        opt3: "The number of milliseconds since January 1st, 1970",
        opt4: "The number of picoseconds since January 1st, 1970",
        ans: "The number of milliseconds since January 1st, 1970"
    },
    {
        qno: 28,
        question: "28: Which of the following is the tainted property of a window object in Java Script?",
        opt1: "Pathname",
        opt2: "Protocol",
        opt3: "Defaultstatus",
        opt4: "Host",
        ans: "Defaultstatus"
    },
    {
        qno: 29,
        question: "29: Which attribute needs to be changed to make elements invisible?",
        opt1: "visibilty",
        opt2: "visible",
        opt3: "invisibility",
        opt4: "invisible",
        ans: "visibilty"
    },
    {
        qno: 30,
        question: "30: Which of the following is used to capture all click events in a window?",
        opt1: "window.captureEvents(Event.CLICK);",
        opt2: "window.routeEvents(Event.CLICK);",
        opt3: "window.handleEvents(Event.CLICK);",
        opt4: "window.raiseEvents(Event.CLICK);",
        ans: "window.captureEvents(Event.CLICK);"
    },
];
var index = 0;
var result = 0;
var correct = 0;
var totalQuestions = questions.length;
function renderQuestions() {
    var container = document.getElementById("container");
    var button = document.getElementById("button");
    var option = document.getElementsByName("option");
    button.innerHTML = "Next"


    if (index > 0) {
        for (var i = 0; i < option.length; i++) {
            if (option[i].checked) {
                if (questions[index - 1].ans === option[i].value) {
                    correct++;
                }
            }
        }
    }

    // If all questions are answered, show the result
    if (index === totalQuestions) {
        displayResult();
        return;
    }

    container.innerHTML = `
     <p>Question <b>${questions[index].qno}</b> of<b> 30</b>:</p>
    <p> ${questions[index].question}</p>
    <div>
        <lable><input type="radio" name="option" value="${questions[index].opt1}" id=""> ${questions[index].opt1}</lable>
    </div>
    <div>
        <lable><input type="radio" name="option"  value="${questions[index].opt2}" id=""> ${questions[index].opt2}</lable>
    </div>
    <div>
        <lable><input type="radio" name="option"  value="${questions[index].opt3}" id=""> ${questions[index].opt3}</lable>
    </div>
    <div>
        <lable><input type="radio" name="option"  value="${questions[index].opt4}" id="">  ${questions[index].opt4}</lable>
    </div>
    `
    index++
}
function displayResult() {
    var incorrect = totalQuestions - correct;
    var percentage = (correct / totalQuestions) * 100;

    // Hide the quiz questions
    document.getElementById("container").style.display = "none";

    // Display the result only
    var resultContainer = document.createElement("div");
    resultContainer.classList.add("result");
    resultContainer.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Total Questions: <b>${totalQuestions}</b></p>
        <p>Correct Answers: <b>${correct}</b></p>
        <p>Incorrect Answers: <b>${incorrect}</b></p>
        <p>Your Score: <b>${percentage.toFixed(2)}%</b></p>
    `;

    document.querySelector(".main").appendChild(resultContainer);
    document.getElementById("button").style.display = "none"; // Hide the button
}


