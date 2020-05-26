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

Multiple JavaScript files are used for the website, however the specific file ```js/array.js``` fulfills this requirement.

The code executed in this file declares a JavaScript array then individually populates (initializes) the first 23 elements of the array with String Data Type values.

Afterwards, a JavaScript function is defined and executed.  The function declares and initializes an empty String variable, uses a for loop to individually and iteratively retrieve all elements contained in the previously initialized array, concatenates each element to the previous value of the (initially empty) String variable, selects a div element defined in the index.html file using the unique identifier of the div element, creates a paragraph element, creates a text node to insert the value of the (no-longer empty) String variable inside of the paragraph element, sets a class attribute value for the paragraph element for styling, then inserts the paragraph element and the enclosed text inside of the uniquely selected div element in the index.html file displayed by the browser.

> Import Bootstrap from a CDN and use its column system to create a responsive design

Code in the index.html file imports Bootstrap from a CDN.  The Bootstrap column system is used to create a responsive design for the website.  Several parent Rows and child Column sets are defined and styled to organize the content.  The design is responsive, meaning that multiple columns within a row collapse into a single column depending on the screen size of the device viewing the web page, resulting in a website which is accessible across a variety of devices.

<br />
<br />
(README document to be updated and ammended further in the future)