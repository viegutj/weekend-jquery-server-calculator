## Base Planning
- [x] - Create a user interface where the user can input two values (2 input elements) and the select type of mathematical operation. When the submit (`=` button) is clicked, capture this input, bundle it up in an object, and send this object to the server via a POST. There should also be a 'C' button that will clear the user input fields.
    
    [x] - create HTML document
    
    [x] - add two input elements
    
    [x] - add operations buttons for:
    
        [x] - (+) addition
    
        [x] - (-) subtraction
    
        [x] - (*) multiplication
        
        [x] - (/) division
    
    [x] - add a submit button (=)
    
    [x] - add a button labeled C
    
    [x] - Create client.js
    
    [x] - add jQuery boilerplate
    
    [x] - add jQuery file
    
    [x] - create Event Listener and Handler for submit button
    
    [x] - create Event Listener and Handler for clear button

- [x] - Build out the server-side logic to compute the numbers as appropriate. The server should be able to handle Addition, Subtraction, Multiplication, and Division. Once the calculation is complete, send back the OK. You should do a GET request after the POST to get the actual calculation.
    
    [x] - npm install node

    [x] - npm install express

    [x] - set up folder/file structure

    [x] - write GET/POST requests (Write the flow of data on paper!)
        [x] - GET: gives client the array of problems and solutions
        [x] - POST: sends client data to server

- [x] - Keep a historical record of all math operations and solutions on the server. Display a list of all previous calculations on the page when it loads using a GET request. Update the list when a new calculation is made. 
    
    [x] - create an array to store submitted objects

    [x] - create render function in client.js

    [x] - render needs to display solution and previous calculations, update the rendered list

>NOTE: History should exist even after refreshing the page. It's expected that the history will go away after restarting the server. We'll talk about long term data storage next week.
> ![base mode interface](images/baseMode.png)
> Note: Do not use eval() to complete this assignment.

## Stretch Planning
- [x] - Convert the interface to look and behave like a calculator as shown below. ![calculator interface](images/stretchGoal_interface.gif)
    
    - [x] - START NEW BRANCH

    - [x] - create new html buttons for numbers and decimal in index.html

    - [x] - create listeners and handlers in client.js

    - [x] - modify existing handlers to append to one input element

    - [x] - modify logic on server.js and client.js to perform operations using the singular input.

- [x] - Only allow the POST call to happen if all necessary input is ready. *Data integrity is superfluously important! Sometimes users hit the "go button" without fully inputting the needed fields. Show an alert if they left something empty and don't send bad or incomplete data to the server.*

- [x] - Allow a user to clear the history by clicking on a button. Technically this shouldn't be a GET or a POST. Look into making a DELETE request! *GETs are used to, well, get information from the server. POSTs are used to send new info to the server. DELETEs are used for, you guessed it, deleting info already on the server.*
     - [x] - Create delete button in html
     - [x] - Create delete listeners and handlers in client.js
     - [x] - Create DELETE methods in both client.js and server.js

- [ ] - Allow a user to click on an entry in the History list to re-run that calculation. This should display the answer on the calculator interface like a normal calculation. *Anticipating a user's wants and adding the feature in the interface is often a logical progression that ends up in stretch goals for project.*
    - [x] - create jQuery statement in client.js
    - [x] - have that statement identify the clicked on object
    ## having great difficulties here, may skip
    - [ ] - call the post function for that item

- [x] - refactor

- [x] - Add styling 😎


- [ ] move logic to app.post
- [ ]make a loop to render to the functions