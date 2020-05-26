# Tyler Nelson-Schuppert's Portfolio Website
### https://www.tylernelsonschuppert.com/

Hello, my name is Tyler Nelson-Schuppert.  If you are a human reading this - thank you for taking the time to look at the README file for my GitHub Repository.  This GitHub repository manages the code used for my professional portfolio website.  The focus of this website is to feature a publicly viewable forum marketing my resume and projects to potential employers and colleagues.

This website was hand-coded by me while participating in a Front-End Web Development boot-camp based in Louisville, KY hosted by an organization named "Code Lousville".  This GitHub Repository (and the associated Website) are being submitted by me to Code Louisville to fulfill project-specific requirements for completion of the Code Louisville Front-End Web Development program.

One of the requirements for the project is to include a README (this README) in the respective GitHub repository detailing fullfillment of all project feature requirements.  I will acknowledge and elaborate on fullfilment of the project requirements (as specified by the Front-End Development Project Requirements document) below:
<br />
<br />
>Choose a minimum of 3 of the below features and incorporate into your site.

The 3 features I have chosen as well as an explanation for the implementation of each feature are as follows:

> A navigation menu that collapses into a “hamburger” expandable menu on mobile devices and is fully displayed on a desktop-size screen

The website features a nav menu that is fully displayed on desktop-sized screens.  On mobile devices, the full nav menu becomes hidden by default and replaced by a hamburger icon which can be clicked to expand/contract a menu containing the nav elements.

> Create and populate a JavaScript array, then retrieve and display one or more values from it

Multiple JavaScript files are used for the website, however the file ```js/array.js``` relates specifically to this requirement.

Short Explanation:
A JavaScript array is created and populated with 23 values.  All 23 values are displayed on the page.  JavaScript code is used to insert HTML (which displays the values in the array) into the index.html file displayed by the browser.

Long Explanation:  
The code executed in this file declares a JavaScript array then initializes the first 23 elements of the array with String values.  Afterwards, a JavaScript function is defined and executed.

The function declares and initializes a String data type variable, uses a for loop to iterate over all elements contained in the the previously initialized array, iteratively concatenates each of the elements to the previous value of the String data type variable, selects a div element defined in the index.html file using the unique identifier of the div element, creates a paragraph element, creates a text node to insert inside of the paragraph elements, sets a class attribute value for the paragraph element, then inserts the paragraph element and the enclosed text underneath of the respective div element in the index.html file.

> Import Bootstrap from a CDN and use its column system to create a responsive design
<br />
<br />
(README document to be updated and ammended further in the future)