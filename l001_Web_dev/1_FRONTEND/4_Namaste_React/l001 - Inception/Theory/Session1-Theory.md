## Namaste React Course by Akshay Saini
# _Chapter 01 - Inception_

## Q: What is `Emmet`?
A: `Emmet` is a productivity tool for web developers that simplifies writing `HTML and CSS code`. 
By using short, easy-to-remember abbreviations, it allows rapid generation of `complex code snippets`. 
It speeds up front-end development, making it more efficient and reducing the need for manual typing, saving time and effort..


## Q: Difference between a `Library and Framework`?
A: A `library` is a collection of pre-written functions or code that developers can use to perform specific tasks, 

while a `framework` is a complete set of `tools, rules, and conventions` that dictate 
how an application should be structured, providing a foundation for building an entire system.


## Q: What is `CDN`? Why do we use it?
A: A `CDN, or Content Delivery Network`, is a network of servers distributed across various locations worldwide. 
It stores and delivers website assets like `images, CSS, and JavaScript files` to users from the closest server. 
This improves website speed and performance, reducing load times and enhancing user experience..


## Q: Why is `React known as React`?
A: `React` got its name because it `reacts` to changes in a web application's state. 
It `efficiently updates the user interface` when the data changes, avoiding the need to manually modify the DOM. 
It `revolutionized web development` by simplifying UI development and making it more responsive and dynamic.
`React` is a `JavaScript-based UI development library`. `Facebook` and an `open-source developer community` run it.


## Q: What is `crossorigin in script tag`?
A: The `crossorigin` attribute in the script tag is used to fetch scripts from different domains securely, 
preventing Cross-Origin Resource Sharing (CORS) issues in web applications. 
It ensures proper handling of cross-origin requests by the browser.

### _Syntax_
```sh
<script crossorigin="anonymous|use-credentials">
```

## Q: What is difference between `React and ReactDOM`?
A: React is a JavaScript library for building user interfaces. 
    while React DOM is a specific package within React that focuses on rendering components to the DOM. 

React handles component logic, while React DOM handles updating the actual HTML in the browser.


## Q: What is difference between `react.development.js` and `react.production.js` files via `CDN`?
A: `Development` is the stage of an application before it's made public while `production` is the term used for the same application when it's made `public`.
`Development build` is several times (maybe 3-5x) `slower` than the `production build`.


## Q: What is `async and defer`?
A:  
`async`: Loads the script asynchronously, allowing it to execute without pausing HTML parsing. 
It may not maintain the order of script execution.

### _Syntax_
```sh
<script async src="demo_async.js"></script>
```
    
`defer`: Loads the script asynchronously too but ensures it executes after HTML parsing,         
maintaining the order of script execution.

### _Syntax_
```sh
<script defer src="demo_async.js"></script>
```

Unless you're supporting ancient legacy systems, always add `type="module"` to all your script tags:
```sh
<script type="module" src="main.js"></script> and place the tag inside <head>
```
```sh
 <script defer nomodule> can be used as a legacy fallback.
```


As the name suggests, it allows you to import `modules`, which makes it easier to organize your code.
Enable `strict mode` by default. This makes your code run faster, and reports more runtime errors instead of silently ignoring them.
Execute your code only after the DOM has `initialized`, which makes DOM manipulation easier. Thanks to this, you won't need to listen to load/readystatechange/DOMContentLoaded events.
Prevent top level variables from implicitly polluting the global namespace.
Allow you to use top-level await in supported engines.
Load and parse your code `asynchronously`, which improves load performance.

