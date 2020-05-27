# Tyler Nelson-Schuppert's Portfolio Website
### https://www.tylernelsonschuppert.com/

Hello, my name is Tyler Nelson-Schuppert.  If you are a human reading this - thank you for taking the time to look at the README file for my GitHub Repository.  This GitHub repository manages the code used for my professional portfolio website.  The focus of this website is to feature a publicly viewable forum marketing my resume and projects to potential employers and colleagues.

This website was hand-coded by me while participating in a Front-End Web Development boot-camp based in Louisville, KY hosted by an organization named "Code Lousville".  This GitHub Repository (and the associated Website) are being submitted by me to Code Louisville to fulfill project-specific requirements for completion of the Code Louisville Front-End Web Development program.

One of the requirements for the project is to include a README (this README) in the respective GitHub repository detailing fullfillment of all project feature requirements.  I will acknowledge and elaborate on fullfilment of the project requirements (as specified by the Front-End Development Project Requirements document) below:
<br />
<br />
<br />

> __Feature Requirements:<br />Choose a minimum of 3 of the below features and incorporate into your site.__

> A navigation menu that collapses into a “hamburger” expandable menu on mobile devices and is fully displayed on a desktop-size screen

The website features a nav menu that is fully displayed on desktop-sized screens.  On mobile devices, the full nav menu becomes hidden by default and replaced by a hamburger icon which can be clicked to expand/contract a menu containing the nav elements.

> Create and populate a JavaScript array, then retrieve and display one or more values from it

Multiple JavaScript files are used for the website, however the specific file ```/js/array.js``` fulfills this requirement.

The code executed in this file creates (declares) a JavaScript array then individually populates (initializes) the first 23 elements of the array with String Data Type values.

Afterwards, a JavaScript function is defined and executed.  The function declares and initializes an empty String variable, uses a for loop to individually and iteratively retrieve all elements contained in the previously initialized array, concatenates each element to the previous value of the (initially empty) String variable, selects a div element defined in the index.html file using the unique identifier of the div element, creates a paragraph element, creates a text node to insert the value of the (no-longer empty) String variable inside of the paragraph element, sets a class attribute value for the paragraph element for styling, then inserts the paragraph element and the enclosed text inside of the uniquely selected div element in the index.html file displayed by the browser.

> Import Bootstrap from a CDN and use its column system to create a responsive design

Code in the index.html file imports Bootstrap from a CDN.  The Bootstrap column system is used to create a responsive design for the website.  Several parent Rows and child Column sets are defined and styled to organize the content.  The design is responsive, meaning that multiple columns within a row collapse into a single column depending on the screen size of the device viewing the web page, resulting in a website which is accessible across a variety of devices.
<br />
<br />
<br />

> __Additional Requirements:<br />ALL of the below requirements must be met.__

> Your project is responsive to different devices and/or browser sizes and improves the user experience in some way
> > We will look at your app on a desktop screen and a mobile device to see what changes occur<br /><br />
> > We must be able to see the change that your code is making on your website - a media query can be written correctly but have no actual effect. That will not be ok in this class.

The project is responsive to different devices and browser sizes.  The user experience is improved because the site is responsive to account for different screen sizes by automatically adjusting content layout.  View and navigation of the website has been tested and confirmed on a variety of mobile and desktop devices including:

iPhone 11 (Screen Size: 6.1", Res.: 1792x828, 326 ppi)
iPhone XS MAX (Screen Size: 6.5", Res: 2688x1242, 458 ppi)
iPad Pro (2nd gen.) (Screen Size: 10.5", Res: 2224x1668, 264 ppi)
MacBook Pro 2017 (Screen Size: 13.3", Res: 2560x1600, 227 ppi)
MacBook Pro 2018 (Screen Size: 13.3", Res: 2560x1600, 227 ppi)
HP Pavilion 22cwa 1080p IPS LED External Display (Screen Size: 21.5", Res: 1920x1080, 102 ppi)
LG 27UK850-W 4K UHD IPS HRD10 External Display (Screen Size: 27", Res: 3840x2160, 163 ppi)

<br />

> Your project includes at minimum 3 custom-written CSS elements (selectors, classes, etc) located in a .css file which are applied to your HTML elements
> > The CSS must be included in its own file, not “in-line” on your HTML page - we want to see that you can properly “link” a stylesheet<br /><br />
> > Many of the options in the first requirement will also fulfil this requirement

The project includes many custom-written CSS elements (selectors, classes, etc.) located in an external css stylesheet ```/css/main.css```.

<br />

> Your project includes JavaScript in a separate .js file
> > Script tags in your HTML file must execute the JS file<br /><br />
> > Many of the options in the first requirement will also fulfil this requirement

The project includes JavaScript in several separate .js files located under the ```/js/``` folder.  ```array.js``` was written by me to fulfill a JavaScript array project requirement above, ```navbar.js``` was written by me to solve a bug where clicking on a nav link in an expanded nav menu within a mobile layout doesn't close the nav menu, ```scrollreveal.js``` references a separately linked JavaScript library and is used for element animation (examples for using the library were found and adjusted by me, then used in the file), and ```typed.js``` also utilizes a separately linked JavaScript library - containing examples which were implemented by me to style elements.

<br />

> Your code have comments that document major sections of your code to make it easier to read<br />
> > You don’t need to go crazy on this - a few code comments are perfectly fine

The project code contains comments documenting major sections.  This is true throughout the HTML, CSS, and JS files.

<br />

> Your project code is uploaded to your GitHub account, in its own repository, with at least 5 commits<br />
> > We need to see that you’ve used Git to update your GitHub profile at least 5 times

The project code is uploaded to my GitHub account in its own repository, to date with 100+ commits.  (https://github.com/tylernelsonschuppert/tylernelsonschuppert.github.io/) 

<br />