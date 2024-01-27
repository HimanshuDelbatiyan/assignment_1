// Name: Himanshu
// Student ID: 100898751
// File Name:  main.js
// Folder Name: Assignment-1
// Date Created: 24-01-24
// Description: This file will be used to add the dynamic functionality to the page.






// Telling the JS Compiler to be strict about the coding guidelines suggested by the ECMA Script 6
"use strict";


// Using the IIFE
// Immediately invoked function
(function () {

        /**
         * This function is change the content of page as well as add some new components like
         * footer dynamically.
         */
        const StartMethod = () => {
                /**
                 * Adding the new Element to the navBar
                 */
                let newNavLink = document.createElement("li");
                // Setting the attributes for the new element
                newNavLink.setAttribute("class", "nav-item");
                // Setting the content of the li tag
                newNavLink.innerHTML = `<a class="nav-link" href="blogPage.html"> Careers</a`;
                // Adding the new Element to the document object.
                // Selecting the navbar
                let navCurrentLinks = document.querySelector("#navLinks");
                // Appending the new Element as the last Child element of the selected one !
                navCurrentLinks.appendChild(newNavLink);

                /**
                 * Changing the name of the nav element called "Blog" to "News"
                 */
                // Using the already Selected Element !
                navCurrentLinks.children[4].innerHTML = `<a class="nav-link" href="blogPage.html"> News</a`;


                /**
                 * Adding the Footer at the end of the page
                 */

                // Selecting the body Object of the document Object
                let body = document.body;

                // Create a new element div which will contain the footer element !
                let footerContainer = document.createElement("div");

                // Setting the attributes of the container
                footerContainer.setAttribute("Class","container")

                // Declaring the array of footer elements names
                let footerElements = ["Privacy Policy","Terms of Service", "Contact"];
                // Also declaring an Array of addresses of the footer elements pages
                let footerElementsPages = ["privacyPolicy.html","terms.html","contactPage.html"];

                let readyFooterElements = ""; // This will store the ready footer links !

                // Using the for loop to print the footer elements !
                for (let i=0; i < footerElements.length; i++)
                {
                        readyFooterElements += `<li class="nav-item"><a href="${footerElementsPages[i]}" class="nav-link px-2 text-muted">${footerElements[i]}</a></li>`
                }

                // Setting the inner HTML of the div element
                footerContainer.innerHTML = `
                  <footer class="py-3 my-4">
                    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    ${// Print the for loop generated elements here !
                        readyFooterElements}                   
                    </ul>
                    <p class="text-center text-muted">&copy; 2024 Harmony Hub, CA</p>
                  </footer>`

                // Adding the new Element as the last child of the body element
                body.appendChild(footerContainer);
        }

        /**
         * This method is related to Contact Page and execute when
         * the contact.html page is loaded !
         * @constructor
         */
        const ContactPageEssentials = () =>
        {
                // Preventing the Default Submissions
                // event is
                event.preventDefault();

                /**
                 * Getting the values from the Form and storing them inside the variable
                 * for this I have used the id attribute of each of the element !
                 */

                let firstName = document.querySelector("#firstName").value;
                let lastName = document.querySelector("#lastName").value;
                let email = document.querySelector("#email").value;
                let subject = document.querySelector("#contactSubject").value;
                let city = document.querySelector("#city").value;
                let zip = document.querySelector("#zip").value;
                let address = document.querySelector("#inputAddress").value;


                /**
                 * Data Validation
                 */
                if(firstName.length === 0 || firstName.trim() === "" || lastName.length === "" || lastName.trim() === "" || email.length === 0
                        || email.trim() === "" || subject.length === 0 || subject.trim() === "" || city.length === 0 || city.trim() === ""
                    || zip.length === 0 || zip.trim() === "" || address.length === 0 || address.trim() === "")
                {
                        // Display an Error message in the modal body
                        document.getElementById("errorBody").innerHTML = `<b><i>Please Fill all the Fields.</i></b>`;


                        // Create a Bootstrap modal with options
                        var myModal = new bootstrap.Modal(document.getElementById('error'), {
                                backdrop: 'static',
                                keyboard: false
                        });

                        // Show the modal
                        myModal.show();

                }
                else
                {       // Creating the object of Contact Class
                        let contact = new Contact(firstName, lastName, email, subject, city, zip);

                        // Display a thank you message in the modal body
                        document.getElementById("thanksBody").innerHTML =
                        `<b><i>Thanks for Contacting Us </i> <br> ${contact.firstName} ${contact.lastName} (${contact.email})
                        <br>
                        We will get in Touch with you quikly.
                        .</b>`;


                        /**
                         * Creating the instance of the bootstrap modal which will be used to programmatically manipulte the modal present in
                         * the contactPage.html document
                         * as well as setting some behaviors of modal
                         */
                        var thanksModal = new bootstrap.Modal(document.getElementById('thanksMessage'), {
                                backdrop: 'static',
                                keyboard: false
                        });

                        // Show the modal
                        thanksModal.show();

                        // This will redirect the user to index.html (HomePage) after five seconds after showing the thank-you Message.
                        setTimeout(function ()
                        {
                                // Explicitly submitting the Form!
                                document.getElementById("ContactForm").submit();
                                // Redirecting the user to index.html
                                window.location.href = "index.html";
                        }, 5000);
                }
        }

        /**
         * This method is specifically created for our portfolio page !
         */
        function PortfolioPage()
        {

                // Array of project titles
                let projectTitles = [
                        "Fitness BootCamp",
                        "Community CookBook Project",
                        "Teach for Seniors Program"
                ];

                // Array of project descriptions
                let projectDescriptions = [
                        "Regular art and craft sessions for individuals of all ages. Activities include painting, pottery, and DIY crafts to foster creativity and provide a platform for artistic expression.",
                        "Collaborative creation of a community cookbook featuring recipes contributed by residents. The project promotes cultural exchange through food and fosters a sense of community.",
                        "Workshops and training sessions tailored for senior citizens to enhance their technological skills. Topics include using smartphones, social media, and online communication tools."
                ];

                let imageLocations = ["center_3.jpg","center_5.jpg","center_1.jpg"];

                // Selecting the table from the document.
                let projectTable = document.getElementById("projectTable");

                // Creating a new row
                let newRow = projectTable.insertRow();

                // Using the for loop to create the project cards !
                for (let i = 0; i < projectTitles.length; i++)
                {
                        // Inserting the cell into the row
                        let contentCell = newRow.insertCell(i);

                        // Creating a new div for the content cell
                        let newDiv = document.createElement("div");
                        newDiv.setAttribute("class", "card w-75 m-5");
                        newDiv.innerHTML =
                            `<img src="images/${imageLocations[i]}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${projectTitles[i]}</h5>
                                    <p class="card-text">${projectDescriptions[i]}</p>
                                    <a href="#" class="btn btn-primary">Get More Details</a>
                                </div>`;

                        // Appending the new div to the content cell
                        contentCell.appendChild(newDiv);
                }
        }

        /**
         * This page will identify which page the user is on
         * and execute the method related to that page !
         */
        const pageIdentifier = () =>
        {
                switch (document.title)
                {
                        case "Home":
                                console.log("Alright, so this time Home Page");
                                break;
                        case "Services":
                                console.log("Alright, so this time Service Page");
                                break;
                        case "Contact":
                                console.log("Alright, so this time Contact Page");
                                document.querySelector("#submitButton").addEventListener("click",ContactPageEssentials);
                                break;
                        case "Privacy Policy":
                                console.log("Alright, so this time Privacy Policy, relax we are not using your bank info, kidding we are 😁");
                                break;
                        case "Terms of Services":
                                console.log("Terms of Service, Hmm did we ask you to give property registry ?");
                                break;
                        case "Portfolio":
                                document.getElementById("load").addEventListener("click",PortfolioPage);
                                break;
                        case "Team":
                                console.log("Might be seeing our team");
                                break;
                }
        };


        // This will write something in the console when the window has loaded all its resources !
        window.addEventListener("load",()=>
        {
                StartMethod(); // This function is executed for all the pages on the website !
                pageIdentifier();
                console.log("Resources has Loaded")
        });
})();




