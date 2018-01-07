### Header area

Added main header area to get things started. Style refinements to come.

### Main area

Added main section, as well as navigation for baby steps that includes light vanilla JavaScript
to handle setting active state.

### Content navigation logic

Added JavaScript to handle hiding and showing content based on 'click' of side navigation item. It makes sense to have
a single, concise function that declaratively iterates over the nav items to handle both highlighting the active item and displaying the correct copy based on matching the index of the current active nav item and the index of the correct copy item.

### Dynamic text logic-WIP

Added JavaScript to handle showing dynamic text. On click of a step, a function is fired that uses the `fetch()` method to grab the JSON data. Then a lot of things happen at once. We create a new array, then we filter the returned data and `push()` to the new array by checking against the current step ID using the HTML `data` attribute. We sort the new array into another array. Then depending on the length of the new sorted array, we can just imperatively build out a sentence with the correct names and steps. This would read and function better using a switch statement, which is why I flagged the commit as "WIP".

### Dynamic text logic-complete

Refactored to use a `switch` statement that checks for a `true` boolean against values up to 3 and then checks ranges for `>=` 4. It's more readable and succinct. 
