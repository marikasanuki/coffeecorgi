# Coffee Corgi: A Binary Search Algorithm Demo

Biggo the B-Search Dog will parse through the coffee beans (sorted by bean id #) housed in an array of cups and identify the target coffee bean from the correct cup (index) and fetch it using an algorithm that has a worst-case time complexity of O(log n), or logarithmic. 

## 1. Background and Overview 

* Biggo will go investigate the mid-index cup and determine if the target coffee bean id # is smaller than, equal to, or larger than the bean contained in the cup. 
* Based on that result, Biggo will either repeat the process on the left half or right half; if it's equal Biggo will fetch the bean and return it to the user.

### Notable elements:
* coffee bean id # (uses any numbers but must be sorted from small to large)
* randomly generated coffee bean id #s that are sorted
* cup indices (starts at 0, increments by 1)
* target bean (user selects)
* probe/mid index cup


## 2. Functionality and MVPs 

    In Coffee Corgi, users will be able to:

    [ ] Select a target coffee bean by id #
    [ ] Click a button to start the demo
    [ ] Watch as Biggo parses through the beans and cups and finds the cup index with the target coffee bean id
    [ ] Will have 12-cup array option.

    In addition, this project will include:

    [ ] Basic explanation of Binary Search requirements
    [ ] Code example in JS

    1) Draw cups with Canvas / SVGs
    2) Use Canvas to animate the running corgwyn


## 3. Architecture and Technology 

* Pure JavaScript
* HTML5 Canvas
* CSS
* Webpack


## 6. Implementation Timeline 

### Stage 1
* Research on Canvas and D3.js
* Basic layout outlined
* Class structure outlined

### Stage 2: 
* Basic movement logic outlined
* Layout styled

### Stage 3
* Movement logic refined
* Layout style refined

### Stage 4
* Feature testing 
* Styling

### Stage 5
* Debugging 
* Final styling
* Production README

## 6. (Bonus Features) 
* Easter egg button