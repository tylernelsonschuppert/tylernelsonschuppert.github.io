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

Code in the index.html file imports Bootstrap from a CDN.  The Bootstrap column system is used to create a responsive design for the website.  Several container, row, and column sets are defined and styled to organize the content.  The design is responsive, meaning that multiple columns within a row collapse into a single column depending on the screen size of the device viewing the web page, resulting in a website which is accessible across a variety of devices.
<br />
<br />
<br />

> __Additional Requirements:<br />ALL of the below requirements must be met.__

> Your project is responsive to different devices and/or browser sizes and improves the user experience in some way
> > We will look at your app on a desktop screen and a mobile device to see what changes occur<br /><br />
> > We must be able to see the change that your code is making on your website - a media query can be written correctly but have no actual effect. That will not be ok in this class.

The project is responsive to different devices and browser sizes.  The user experience is improved because the site is responsive to account for different screen sizes by automatically adjusting content layout.  View and navigation of the website has been tested and confirmed on a variety of mobile and desktop devices including:

iPhone 11 (Screen Size: 6.1", Res.: 1792x828, 326 ppi)<br />
iPhone XS MAX (Screen Size: 6.5", Res: 2688x1242, 458 ppi)<br />
iPad Pro (2nd gen.) (Screen Size: 10.5", Res: 2224x1668, 264 ppi)<br />
MacBook Pro 2017 (Screen Size: 13.3", Res: 2560x1600, 227 ppi)<br />
MacBook Pro 2018 (Screen Size: 13.3", Res: 2560x1600, 227 ppi)<br />
HP Pavilion 22cwa 1080p IPS LED External Display (Screen Size: 21.5", Res: 1920x1080, 102 ppi)<br />
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
<br />
<br />

> __Clarifications and Commonly Asked Questions:__

> How projects are reviewed
>> The project reviewer will use git to clone your project to their local machine and open index.html (or whatever your readme indicates)<br /><br />
>> Responsive design will be tested using browser tools to simulate one or more mobile and/or tablet devices<br /><br />
>> If all the minimum requirements are met, your project passes<br /><br />
>> We are looking to ensure you understand what you wrote, so a poorly implemented project may still not pass if we believe you do not understand the code

Git can be used to clone the project to a local machine where the index.html file can be opened to view the site.  This is how I work on and view the site myself.

The website can also be viewed publicly at https://www.tylernelsonschuppert.com/ if desired.  The subdomain ```www.tylernelsonschuppert.com``` is a CNAME DNS alias for ```tylernelsonschuppert.github.io``` which points directly to the repository.

<br />

> Naming your project
> > Choose a name for your GitHub repo that is relevant to the subject of your project. Do not name your repo "CodeLouisvilleProject" or similar. Choose a name based on what your project is about. For example “Brian’s House of Pancakes”, “Personal Portfolio Site”, etc

The GitHub repo is titled ```tylernelsonschuppert.github.io``` for functional reasons.  This naming convention is required to utilize GitHub Pages, which is the hosting platform for the public website.  It is not possible for me to retain GitHub Pages as a hosting platform and create a custom name for the repository deviating from that convention.

I chose to head the README file with "Tyler Nelson-Schuppert's Portfolio Website" to be descriptive and specific about the purpose of the project.

<br />

> Responsive Design
> > Your site/app must improve user experience with its responsive design, such as making the page easier to view or read, rearranging content, swapping in different assets, etc.<br /><br />
> > Swapping the color of your font or changing a background image/color is not demonstrating an improved experience and will not count.<br /><br />
> > Setting a width, such as 100% width on an image, that causes the content area to scale with the screen will NOT meet this requirement<br /><br />
> > You do not have to account for all possible devices and browser sizes, just demonstrate some responsive layout principles

The site is coded to improve user experience through responsiveness.  This helps the site to be accessible by a variety of devices primarily through rearranging content.  The Bootstrap CSS framework combined with flexbox and float techniques provides the foundation for the layout and responsiveness of the site.

<br />

> GitHub
> > If you choose to host your application on a live URL, great! You can share that for demonstration purposes or ease of running - and this is encouraged! But your code must still be available on GitHub for review.
> > Check out GitHub pages (https://pages.github.com/) for a quick way to host your site
> > Yes, GitHub is a requirement. It’s not just how we find and view your project, it’s a critical skill you need to understand. Not having your project checked in on GitHub will result in not completing the class.

The site is hosted via GitHub Pages and can be accessed at a live URL:  https://www.tylernelsonschuppert.com/

The URL indicated above in its entirety is the correct URL to use if the site is accessed this way.

All of the site code is publicly available via the GitHub repository at https://www.github.com/tylernelsonschuppert/tylernelsonschuppert.github.io/

Side Note:  GitHub Pages does not support wildcard SSL certificates so a certificate error may be experienced if a different domain or URL is used (such as if you use HTTP instead of HTTPS, or do not include the leading ```www.``` in the URL).  There is no official way around this outside of migrating to a separate hosting provider, although I have attempted to use GitHub Pages to generate multiple certificates to resolve this, so it may be a non-issue.

<br />
<br />
<br />

> __Testing Your Project__
> > You should test your project on another computer by having someone else obtain and run your project. Several projects in the past have failed to meet requirements because it was written in a way that only worked on that person's computer and not the reviewer's. Your project reviewer will not be responsible for tracking down why your project does not work and this may result in a failed project.

The project has been tested on multiple computers running macOS and Windows, on multiple iOS devices, and also on iPadOS.  The project has also been tested on several browsers including Google Chrome, Mozilla Firefox, Microsoft Edge, and Internet Explorer.  The project is confirmed to be fully functional on all browsers with no issues except for one issue specifically with Internet Explorer (and only Internet Explorer) where the nav menu does not collapse when clicking the hamburger button in a mobile view.  The feature is fully functional on Microsoft Edge and all other browsers tested.