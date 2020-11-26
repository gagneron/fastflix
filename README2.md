To run, just do `npm install` to get all the packages, and then `npm start`
and it should be visible on localhost:3000

Summary Questions:
1. Coding-wise, nothing was difficult to implement. The difficulty came in deciding what
features to include in the short amount of time given to implement. One
challenging decision I faced was figuring out how to display the cart: I would
have liked to display a list of selected poster images and titles in a side drawer
so you could see your search results and cart at the same time,
but this wouldn't have fit nicely on a mobile screen so I chose to make the cart
into a modal.

2. I took this assignment as an opportunity to spend some time with Material-UI.
I've worked with Bootstrap a lot in the past but only touched Material-UI on
a few occasions. I wanted to use a CSS framework because I knew it would make
my app look clean and stylish with minimal work/time and
I chose Material-UI because it came with a fully functional pagination component,
which would easily solve the issue of only fetching 10 movies at a time. I got
to learn more about the components that are available on their site and it gave
me some insight on how to cleanly and nicely implement my own in the future.

3. The majority of my time was taking up with styling. Using Material-UI took up
some time because I had to familiarize myself with some of the component properties,
but it also saved me time because I didn't have to spend time worrying about
responsiveness.
There's tons of things I did not have time to add:
- lock the search button during the asynchronous fetch call so users can't
  submit multiple requests before the 1st one has returned, also add a spinner
 - I would like to fix the page scrollbar - the scrollbar can move to the top and
 bottom areas of the page where the fixed-positioned header and footer are.
- come up with a better placement/solution for the pagination section
- I would add the title and year to the bottom of the poster images and provide
 the description of the movie on hover
- hide the "0 total results" when you first load the page and instead show some
help text if the user hadn't submitted a search yet
- add a "view cart" button and put the number next to the cart inside a red circle
 to make it stand out more.
- use infinite scroll and fetch instead of pagination
- put the fetch call in Node.js or somewhere else so that the secret API key
  isn't visible
- handle overflowing text
- handle images that have broken URLs
- handle images that are different sizes (alignment)
- top toolbar gets squeezed if selected count gets high

4. I answered this in #3.
