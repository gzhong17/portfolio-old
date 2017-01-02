# gloria-portfolio

## Overview
This is a portfolio website made with the intention for fulfilling the IAT 339 course challenge. In addition, it is to showcase my existing works and to attract employment for UX and UI positions.

The website currently features three pages, the homepage and two individual pages for my works. The website was made to be able to accommodate more projects in the future. On the homepage, there three sections, Welcome, My Works, and About Me.

## Process according to criteria

### (a)
The website utilizes SASS for preprocessing, of which allows me to write css in separate .scss files for organization and clarity, then import them into one main.scss and consolidates all the css in the main.css file, which was then used in the website. This also acts as request reduction so that I wouldn’t need to call multiple css files, but rather one main file. Using minimal Javascript also helps cut down on files that would be requested. Compression was applied by using tinypng.com to compress all images used on the website, while gzip and mod_deflate was applied to further compress the files. I also added browser caching to help with optimization. Note: When running it through certain performance testers, for some reason it says I need to enable compression, but when I ran it through the varvy gzip tool, it shows that I have gzip enabled. Through using the W3C validator for HTML and CSS, there has been no significant errors except for the “|” character used in the Google fonts api link, even though that was provided by Google.

In terms of progressive enhancement, the grid in My Works can use flexbox but may also fallback to a grid system for devices without flexbox or Javascript support. Modernizr.js was used to detect for flexbox support but in cases where javascript is unavailable, the grid will default to the grid system. Especially for the crucial features of my website (such as text, images, links), I made extra effort to avoid using Javascript so that users would not be completely affected without it and at least could access the main content of my website.

### (b)
The aesthetics are intended to seem fun to show my playful personality. However, I ensured the style was consistent through the website. Colours and headings were used appropriately to ensure visibility and readability. I also made sure to maintain distinction in colour and visual cues for colour-blind people when accessing the website. Alt descriptions were added to 'img' tags to ensure accessibility for users when the image is unable to load. Also, due to the way my logo was displayed, I made sure that screen readers would be able to know what it is by adding descriptive text in the 'a' tag and visually hid it from regular users by indenting it.

A slight concern may come up as to why the navigation behaves slightly different on the homepage compared to the individual work pages. On the homepage page, it simply slides to the sections below, on the same page. When the same navigation button is clicked on the individual work page, it actually jumps back to the homepage, bringing you to the intended section. However, my reasoning is that I felt the projects required a separate page for details and images, which could overcrowd the homepage if I had put everything on that page. But I wanted to maintain accessibility for users to navigate back to the exact section they wanted to see without multiple layers of work. I wanted to avoid users from having to click on the homepage logo and then clicking on the navigation button or manually scroll down. Instead, I brought them directly to the corresponding information they prompted for, which I consider to be reinforcing my design principles of “considerate design”. 

It would be different problem however, if users received information that did not expect to receive through this interaction. For the most part, my website should instill trust because most elements are visually appealing and consistent, without giving users unwanted surprises. The titles and content are written in a clear and professional tone, and I provided related evidence (my resume and my works) to reinforce my abilities. Users know where they are at all times and know that they are at the correct place.

### (c)
The website itself is mostly adaptive with some responsive elements. Having tested on different browsers (Chrome, Safari, Firefox, IE) and devices (iOS and Android), I have identified that there were minimal differences between them. I especially made an effort to support IE8 users and attempting to provide a decent/largely consistent experience on my website. I achieved this through using HTML5Shiv by aFarkas, which helps render HTML5 elements properly on older browsers.

Though I did not prepare a clear style guide using Pattern Lab or by other means, I have applied atomic design theory into the way I developed the website. I created the css styling with the intention to reuse in multiple parts. For example, 'a' tag was styled a certain colour, which allows me to build a button class based on the original 'a' tag. This button class is meant to act as an atom for allowing me to build additional elements like a navigation, which is two buttons put together (like a molecule). When combined with the logo and other elements to create a header (which is an organism), so that I can combine it with the other sections in the body and footer to create a template. Once populated with my biography and images, it becomes a proper page. The button class can still be reused in other areas, such as in the About Me, where it acts as a call-to-action, to contact me for employment. In my CSS, I made efforts to organize the code into different sections and group related code together (eg: basic styles, browser reset, base style, grid style). This way, I am clear that the same line of styling won’t be repeated across different files, causing inconsistency and chaos.

I recognize that there is room for improvement for my application of atomic design, which includes using Pattern Lab for a complete style guide, and use Jade or HAML, which are templating languages that could clearly help me define and build elements for atoms, molecules, or organisms. This would also help other developers work on the same code during collaboration and maintain a consistent visual language to represent an organization.

### (d)
Users have a good understanding of why they are on my site and know how to navigate around. I facilitated this through having clear headings, such as having my name and my expertise displayed when the user first reaches my page. This way, they know they are looking at the right person and can clearly see what I do. My headings are straightforward and reflect the content displayed under it. Links are effectively place with appropriate descriptions such as inviting my users to look at my resume through saying “Check out my resume” so that users know what they are clicking on, what they expect to see.

The button placed in the About Me section was intended as a call-to-action. In this section I wanted clear visual weight between the components, so that users first see the heading “About Me”, then notice the cluster of text. The button “Let’s Connect” should have more weight than the text, but not enough to overpower the heading. This is all designed to invite a potential employer to reach out and ultimately offer me an interview or job. Also, images in the individual work pages help the user see my work process and the results of the project, in complement of my descriptive text. The button “See Other Works” also drives users to return to My Works showcase and see my other experiences.

## Credits

Through building this website, I researched many resources to help me with understanding and building certain sections. While they were referenced for developing my website, I also made lots of effort to adapt them and internalize it.

Here is a list of resources used:
- http://callmenick.com/post/simple-parallax-scrolling-effect
- https://css-tricks.com/snippets/jquery/smooth-scrolling/
- https://codepen.io/christopherjanzen/pen/HcidC
- http://jonibologna.com/flexbox-cheatsheet/
- http://geekgirllife.com/place-text-over-images-on-hover-without-javascript/
- https://github.com/afarkas/html5shiv
- https://modernizr.com
- https://cdnjs.com/libraries/jquery

Note: All graphics were created by yours truly :)
