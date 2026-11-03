/* Color Change: 2 things needed : 2 element select
1. buttons 2.body 
element select: document.queryselector
*/

/*
Motto:

Button Click → Background Change

1. Select all buttons
   → document.querySelectorAll()
   → selects all elements with the button class

2. Select body
   → document.querySelector()
   → selects the one body element

3. After selecting buttons
   → buttons.forEach()
   → querySelectorAll() returns a NodeList
   → forEach() lets us go through each button one by one

4. For each button
   → addEventListener('click')
   → tells the button to listen for a click

5. Click happens
   → function runs
   → because we want some action to happen whenever a click occurs

6. Find the clicked button
   → e.target

7. Find its ID
   → e.target.id

8. Check its ID
   → if / switch case

9. Change the background
   → body.style.backgroundColor
*/


document.addEventListener('DOMContentLoaded', () => {
   const body = document.body;
   const buttons = document.querySelectorAll('.button');

   const colorMap = {
      grey: '#64748b',
      white: '#ffffff',
      blue: '#2563eb',
      yellow: '#f59e0b'
   };

   function changeBackgroundColor(colorId, targetElement) {
      const colorValue = colorMap[colorId] || colorId;
      body.style.backgroundColor = colorValue;

      // Auto text contrast adjustment
      if (colorId === 'white' || colorValue === '#ffffff') {
         body.style.color = '#0f172a';
      } else {
         body.style.color = '#ffffff';
      }

      buttons.forEach(btn => btn.style.outline = 'none');
      if (targetElement) {
         targetElement.style.outline = '3px solid rgba(99, 102, 241, 0.5)';
         targetElement.style.outlineOffset = '2px';
      }
   }

   buttons.forEach(button => {
      button.addEventListener('click', () => {
         changeBackgroundColor(button.id, button);
      });
   });
});


// Wait until page is ready
//         ↓
// Find the body
//         ↓
// Find all color buttons
//         ↓
// Create a list of colors
//         ↓
// Create a function to change the background
//         ↓
// Give every button a click listener
//         ↓
// User clicks a button
//         ↓
// Call changeBackgroundColor()
//         ↓
// Find which color was clicked
//         ↓
// If we didn't pass targetElement, the function would change the background color, but it would not know which button you clicked,
//  so it couldn't put the highlight ring around it!
//         ↓
// Change background
//         ↓
// Change text color
//         ↓
// Highlight the clicked button