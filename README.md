How to use Character Counter:
Type text in the box and the applciation will show character count, word count and estimated reading time. The stats update in real-time as you type. Color-coded indicators show if you are meeting the word count goals.

Reflection:
1. How did you handle state updates when the text changed?
I used useState to store text. Whenever the user types in the TextInput component, I call handleTextChange that updates the state using setText.
2. What considerations did you make when calculating reading time?
I used the average adult reading time (200 words per minute) for calculating reading time and I calculate the reading time by the current word count by 200.
3. How did you ensure the UI remained responsive during rapid text input?
I used simple calculations and avoided complex optimizations. Counting characters and spiltting words don't block the UI as they are fairly simple. State updates and React handling re-rendering, the UI remains responsive.
4.What challenges did you face when implementing the statistics calculations?
The main challenge was dealing with the edge cases. Specifically empty text, spaces between words and reading time edge cases were difficult to solve. Using simple logic to handle the edge cases allowed it to be solved.
