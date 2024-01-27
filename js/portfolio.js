/**
 * Telling the interpreter be strict about coding guidelines.
 */
"use strict";



function GenerateProjectCards()
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

        let imageLocations = ["image_3","image_5","image_1"];


        // Selecting the table from the document.
        let projectTable = document.getElementById("projectTable");

        // Creating a new row
        let newRow = projectTable.insertRow();

        // Using the for loop to create the project cards !
        for (let i = 0; i < projectTitles.length; i++) {

            // Inserting the cell into the row
            let contentCell = newRow.insertCell(i);

            // Creating a new div for the content cell
            let newDiv = document.createElement("div");

            newDiv.setAttribute("class", "card w-75 m-5");
            newDiv.innerHTML = `<img src="images/${imageLocations[i]}.jpg" class="card-img-top" alt="...">
                                                                        <div class="card-body">
                                                                            <h5 class="card-title">${projectTitles[i]}</h5>
                                                                            <p class="card-text">${projectDescriptions[i]}</p>
                                                                            <a href="#" class="btn btn-primary">Get More Details</a>
                                                                        </div>`;

            // Appending the new div to the content cell
            contentCell.appendChild(newDiv);

        }



    }




