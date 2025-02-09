const allQuestions = [
    {
        question: "What does HTML stand for?",
        answers: {
            a: "Hyper Text Markup Language",
            b: "Hyperlinks and Text Markup Language",
            c: "Home Tool Markup Language"
        },
        correctAnswer: "a"
    },
    {
        question: "Which tag is used to define an internal CSS?",
        answers: {
            a: "<style>",
            b: "<css>",
            c: "<script>"
        },
        correctAnswer: "a"
    },
    {
        question: "Which HTML tag is used for inserting an image?",
        answers: {
            a: "<img>",
            b: "<image>",
            c: "<pic>"
        },
        correctAnswer: "a"
    },
    {
        question: "Which property in CSS is used to change the font of text?",
        answers: {
            a: "font-family",
            b: "font-style",
            c: "text-font"
        },
        correctAnswer: "a"
    },
    {
        question: "How can you make a list with bullet points in HTML?",
        answers: {
            a: "<ol>",
            b: "<ul>",
            c: "<list>"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the correct syntax to link an external JavaScript file?",
        answers: {
            a: "<script src='file.js'>",
            b: "<script href='file.js'>",
            c: "<link src='file.js'>"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of these is a correct way to declare a variable in JavaScript?",
        answers: {
            a: "var x = 10;",
            b: "let x = 10;",
            c: "Both"
        },
        correctAnswer: "c"
    },
    {
        question: "Which property in CSS is used to change the text color?",
        answers: {
            a: "color",
            b: "text-color",
            c: "font-color"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the correct HTML tag for inserting a hyperlink?",
        answers: {
            a: "<a>",
            b: "<link>",
            c: "<href>"
        },
        correctAnswer: "a"
    },
    {
        question: "Which method is used to write output to the console in JavaScript?",
        answers: {
            a: "console.print()",
            b: "console.log()",
            c: "print()"
        },
        correctAnswer: "b"
    },
    {
        question: "What does the CSS property 'margin' do?",
        answers: {
            a: "Sets the space inside an element",
            b: "Sets the space outside an element",
            c: "Sets the font size"
        },
        correctAnswer: "b"
    },
    {
        question: "Which of the following is the correct way to add a comment in JavaScript?",
        answers: {
            a: "// comment",
            b: "<-- comment -->",
            c: "/* comment */"
        },
        correctAnswer: "a"
    },
    {
        question: "Which tag is used to define a table row in HTML?",
        answers: {
            a: "<tr>",
            b: "<th>",
            c: "<td>"
        },
        correctAnswer: "a"
    },
    {
        question: "Which CSS property is used to change the background color?",
        answers: {
            a: "background-color",
            b: "bg-color",
            c: "color"
        },
        correctAnswer: "a"
    },
    {
        question: "Which tag is used to define a hyperlink?",
        answers: {
            a: "<a>",
            b: "<link>",
            c: "<href>"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the correct way to add JavaScript code within an HTML document?",
        answers: {
            a: "<js>",
            b: "<javascript>",
            c: "<script>"
        },
        correctAnswer: "c"
    },
    {
        question: "Which CSS property is used to control the layout of items in a flex container?",
        answers: {
            a: "display",
            b: "flex-direction",
            c: "flex-wrap"
        },
        correctAnswer: "a"
    },
    {
        question: "Which method is used to round a number in JavaScript?",
        answers: {
            a: "Math.round()",
            b: "round()",
            c: "Math.ceil()"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of the following is used to select an element by its class in CSS?",
        answers: {
            a: ".classname",
            b: "#classname",
            c: "classname"
        },
        correctAnswer: "a"
    },
    {
        question: "How do you declare a constant in JavaScript?",
        answers: {
            a: "const x = 10;",
            b: "let x = 10;",
            c: "var x = 10;"
        },
        correctAnswer: "a"
    },
    {
        question: "Which HTML tag is used to define a table header?",
        answers: {
            a: "<th>",
            b: "<thead>",
            c: "<tr>"
        },
        correctAnswer: "a"
    },
    {
        question: "Which event is triggered when a user clicks on an HTML element?",
        answers: {
            a: "onhover",
            b: "onclick",
            c: "onmouseclick"
        },
        correctAnswer: "b"
    },
    {
        question: "Which property is used to add shadow to text in CSS?",
        answers: {
            a: "text-shadow",
            b: "box-shadow",
            c: "shadow"
        },
        correctAnswer: "a"
    },
    {
        question: "How do you declare a function in JavaScript?",
        answers: {
            a: "function myFunction()",
            b: "def myFunction()",
            c: "function = myFunction()"
        },
        correctAnswer: "a"
    },
    {
        question: "What does CSS stand for?",
        answers: {
            a: "Cascading Style Sheets",
            b: "Computer Style Sheets",
            c: "Creative Style Sheets"
        },
        correctAnswer: "a"
    },
    {
        question: "Which property is used to change the font size in CSS?",
        answers: {
            a: "font-size",
            b: "text-size",
            c: "size"
        },
        correctAnswer: "a"
    },
    {
        question: "What does JavaScript use to store data in a variable?",
        answers: {
            a: "Strings",
            b: "Numbers",
            c: "Objects"
        },
        correctAnswer: "c"
    },
    {
        question: "Which method is used to find an element by its id in JavaScript?",
        answers: {
            a: "getElementById()",
            b: "querySelector()",
            c: "getElement()"
        },
        correctAnswer: "a"
    },
    {
        question: "What does the CSS property 'padding' do?",
        answers: {
            a: "Sets the space inside an element",
            b: "Sets the space outside an element",
            c: "Sets the font size"
        },
        correctAnswer: "a"
    },
    {
        question: "Which tag is used to define a form in HTML?",
        answers: {
            a: "<input>",
            b: "<form>",
            c: "<textarea>"
        },
        correctAnswer: "b"
    },
    {
        question: "How do you select all elements with a specific class in CSS?",
        answers: {
            a: ".class",
            b: "#class",
            c: "<class>"
        },
        correctAnswer: "a"
    },
    {
        question: "How can you change the background image of an element in CSS?",
        answers: {
            a: "background-image: url('image.jpg');",
            b: "background: image('image.jpg');",
            c: "background-url: 'image.jpg';"
        },
        correctAnswer: "a"
    },
    {
        question: "Which method in JavaScript is used to remove whitespace from both ends of a string?",
        answers: {
            a: "trim()",
            b: "strip()",
            c: "remove()"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the correct way to add an inline CSS style?",
        answers: {
            a: "style='color:red'",
            b: "<style='color:red'>",
            c: "<inline style='color:red'>"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of the following is the correct way to link a CSS file in HTML?",
        answers: {
            a: "<link href='style.css'>",
            b: "<stylesheet href='style.css'>",
            c: "<link rel='stylesheet' href='style.css'>"
        },
        correctAnswer: "c"
    },
    {
        question: "Which JavaScript method is used to parse a string into an integer?",
        answers: {
            a: "parseInt()",
            b: "parse()",
            c: "convertInt()"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the correct way to create a comment in JavaScript?",
        answers: {
            a: "// comment",
            b: "<!-- comment -->",
            c: "/* comment */"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the correct HTML tag to specify a page's title?",
        answers: {
            a: "<head>",
            b: "<title>",
            c: "<page>"
        },
        correctAnswer: "b"
    },
    {
        question: "How can you add a comment in CSS?",
        answers: {
            a: "// comment",
            b: "/* comment */",
            c: "<!-- comment -->"
        },
        correctAnswer: "b"
    },
    {
        question: "Which HTML tag is used to define an unordered list?",
        answers: {
            a: "<ol>",
            b: "<ul>",
            c: "<list>"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the default value of the 'position' property in CSS?",
        answers: {
            a: "static",
            b: "relative",
            c: "absolute"
        },
        correctAnswer: "a"
    },
    {
        question: "Which property is used to set the font size in CSS?",
        answers: {
            a: "font-size",
            b: "text-size",
            c: "font-weight"
        },
        correctAnswer: "a"
    },
    {
        question: "Which HTML element is used to define a hyperlink?",
        answers: {
            a: "<link>",
            b: "<a>",
            c: "<href>"
        },
        correctAnswer: "b"
    },
    {
        question: "How can you create a checkbox in HTML?",
        answers: {
            a: "<input type='checkbox'>",
            b: "<input type='radio'>",
            c: "<checkbox>"
        },
        correctAnswer: "a"
    },
    {
        question: "Which JavaScript method is used to select an HTML element by its ID?",
        answers: {
            a: "getElementById()",
            b: "getElementByClass()",
            c: "querySelector()"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of these is the correct CSS syntax for setting the background color?",
        answers: {
            a: "background: color;",
            b: "background-color: color;",
            c: "color-background: color;"
        },
        correctAnswer: "b"
    },
    {
        question: "What does 'responsive design' mean in CSS?",
        answers: {
            a: "Design for mobile devices",
            b: "Design that adapts to different screen sizes",
            c: "Design using fixed sizes"
        },
        correctAnswer: "b"
    },
    {
        question: "Which HTML attribute is used to specify an image's source?",
        answers: {
            a: "src",
            b: "href",
            c: "alt"
        },
        correctAnswer: "a"
    },
    {
        question: "Which CSS property is used to align text?",
        answers: {
            a: "text-align",
            b: "text-position",
            c: "align-text"
        },
        correctAnswer: "a"
    },
    {
        question: "Which JavaScript function can be used to prompt the user for input?",
        answers: {
            a: "prompt()",
            b: "alert()",
            c: "confirm()"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of the following is the correct way to add JavaScript to an HTML document?",
        answers: {
            a: "<script> code </script>",
            b: "<js> code </js>",
            c: "<javascript> code </javascript>"
        },
        correctAnswer: "a"
    },
    {
        question: "Which tag is used for creating a table row?",
        answers: {
            a: "<tr>",
            b: "<td>",
            c: "<th>"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of these CSS properties is used to set the border of an element?",
        answers: {
            a: "border",
            b: "outline",
            c: "padding"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of the following is the correct way to style a single element using an inline style?",
        answers: {
            a: "<div style='color:red;'>",
            b: "<div class='color:red;'>",
            c: "<div style='background-color:red;'>"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of the following is used to select an element by its class in CSS?",
        answers: {
            a: ".class",
            b: "#class",
            c: "<class>"
        },
        correctAnswer: "a"
    },
    {
        question: "What does the JavaScript 'typeof' operator do?",
        answers: {
            a: "Checks the data type of a variable",
            b: "Checks if a variable is undefined",
            c: "Converts a variable to a string"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the default value of the 'display' property in CSS for block-level elements?",
        answers: {
            a: "block",
            b: "inline",
            c: "none"
        },
        correctAnswer: "a"
    },
    {
        question: "Which method is used to add an element to the end of an array in JavaScript?",
        answers: {
            a: "push()",
            b: "pop()",
            c: "shift()"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of these is the correct CSS rule for changing the text color to red?",
        answers: {
            a: "color:red;",
            b: "font-color:red;",
            c: "text-color:red;"
        },
        correctAnswer: "a"
    },
    {
        question: "Which HTML tag is used to define a paragraph?",
        answers: {
            a: "<p>",
            b: "<para>",
            c: "<text>"
        },
        correctAnswer: "a"
    },
    {
        question: "What does the CSS property 'float' do?",
        answers: {
            a: "Floats an element to the left or right",
            b: "Changes the text alignment",
            c: "Centers an element"
        },
        correctAnswer: "a"
    },
    {
        question: "Which JavaScript operator is used to assign a value to a variable?",
        answers: {
            a: "=",
            b: "==",
            c: "==="
        },
        correctAnswer: "a"
    },
    {
        question: "Which HTML tag is used to define a list item?",
        answers: {
            a: "<list>",
            b: "<li>",
            c: "<item>"
        },
        correctAnswer: "b"
    },
    {
        question: "Which CSS property is used to set the width of an element?",
        answers: {
            a: "width",
            b: "size",
            c: "height"
        },
        correctAnswer: "a"
    },
    {
        question: "Which HTML attribute specifies a unique identifier for an element?",
        answers: {
            a: "id",
            b: "class",
            c: "name"
        },
        correctAnswer: "a"
    },
    {
        question: "Which tag is used to define a dropdown list?",
        answers: {
            a: "<select>",
            b: "<input>",
            c: "<list>"
        },
        correctAnswer: "a"
    },
    {
        question: "What does the JavaScript 'alert()' function do?",
        answers: {
            a: "Displays a message",
            b: "Sets a variable",
            c: "Confirms an action"
        },
        correctAnswer: "a"
    },
    {
        question: "Which HTML tag is used to define a form?",
        answers: {
            a: "<form>",
            b: "<input>",
            c: "<textarea>"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the correct way to add a comment in JavaScript?",
        answers: {
            a: "// comment",
            b: "/* comment */",
            c: "<!-- comment -->"
        },
        correctAnswer: "a"
    },
    {
        question: "Which CSS property is used to set the space between lines of text?",
        answers: {
            a: "line-height",
            b: "font-size",
            c: "letter-spacing"
        },
        correctAnswer: "a"
    },
    {
        question: "Which HTML tag is used for creating a heading?",
        answers: {
            a: "<h1>",
            b: "<header>",
            c: "<head>"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the purpose of the 'z-index' property in CSS?",
        answers: {
            a: "To stack elements on top of each other",
            b: "To set the size of an element",
            c: "To control the background color"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of these CSS properties controls the visibility of an element?",
        answers: {
            a: "visibility",
            b: "hidden",
            c: "opacity"
        },
        correctAnswer: "a"
    },
    {
        question: "Which HTML element is used to define important text?",
        answers: {
            a: "<i>",
            b: "<b>",
            c: "<strong>"
        },
        correctAnswer: "c"
    },
    {
        question: "Which method is used to remove the last element from an array in JavaScript?",
        answers: {
            a: "pop()",
            b: "push()",
            c: "shift()"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the correct way to change the background color in CSS?",
        answers: {
            a: "background-color: #fff;",
            b: "bg-color: #fff;",
            c: "background: #fff;"
        },
        correctAnswer: "a"
    },
    {
        question: "Which HTML tag is used to create a button?",
        answers: {
            a: "<button>",
            b: "<input>",
            c: "<form>"
        },
        correctAnswer: "a"
    },
    {
        question: "How do you add a background image to an element in CSS?",
        answers: {
            a: "background-image: url('image.jpg');",
            b: "background: url('image.jpg');",
            c: "image-background: url('image.jpg');"
        },
        correctAnswer: "a"
    }
];