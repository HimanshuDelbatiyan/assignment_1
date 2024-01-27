// Name: Himanshu
// Student ID: 100898751
// File Name:  teams.js
// Folder Name: Assignment-1
// Date Created: 24-01-24
// Description: This file will be used to dynamically create the team members
// as well as add the modal showing functionality to each of the button.
// This file is created specifically for teamPage.html which will be executed immediately.

"use strict"; // Be Strict

// IIFE Immediately invoked function !
(
    function()
    {
        /**
         * Creating some array which will contain the information of the team members !
         */
        let teamMemberInfo = [
            ["Captain Chucklehead", "Ability to turn any serious situation into a hilarious comedy routine.", "The Giggle Grenade – releases a burst of contagious laughter that echoes through the community."],
            ["Guffaw Gadgeteer", "Creates wacky inventions that induce uncontrollable laughter.", "The Snicker Snatcher – a device that steals frowns and replaces them with smiles."],
            ["Punmaster Flex", "Unleashes puns so groan-worthy that enemies are too busy facepalming to fight.", "The Pun-isher – a rapid-fire pun attack that leaves everyone in stitches."],
            ["Chuckling Chemist", "Mixes concoctions that produce hilariously unexpected side effects.", "The Belly Bubbler – a potion that makes everyone burst into spontaneous laughter."],
            ["Tickle Tactician", "Masters the art of strategic tickling to distract and disarm opponents.", "The Tickle Tango – a synchronized tickling routine that confuses adversaries."]
        ];

        /**
         * This Array stores the pic of team members
         * @type {string[]}
         */
        let teamMemberPic = ["team_1","team_2","team_3","team_4","team_5","team_6"];

        // Checking the title of the document !
        if (document.title === "Team")
        {

            // Selecting the div element from the document
            let mainContainer = document.querySelector("#teamContainer");

            /**
             * Creating a modal which will be unique to all team cards
             */
            var infoModal = new bootstrap.Modal(document.getElementById('moreInfo'), {
                backdrop: 'static',
                keyboard: true
            });

            // Using the for loop to print all Team Members and also binding an event handler with them
            for (let i = 0; i < teamMemberInfo.length; i++)
            {
                // Creating the div element
                let divContainer = document.createElement("div");
                // Setting some attributes
                divContainer.setAttribute("class", "col-md-5 mb-5");
                divContainer.setAttribute("style", "width:380px");

                // Setting the inner HTML of the div Container.
                divContainer.innerHTML =
                    `
                    <div class="card" >
                        <img src="images/${teamMemberPic[i]}.jpg" class="card-img-top" style="height: 200px; ">
                        <div class="card-body">
                            <h5 class="card-title">${teamMemberInfo[i][0]}</h5>
                            <p class="card-text">${teamMemberInfo[i][1]}</p>
                            <button class="btn btn-primary" id="button_${i}">More Details</button>
                        </div>
                    </div>
                `;

                // Appending the child at the end of the container
                mainContainer.appendChild(divContainer);

                // Adding an event listener using a closure to capture the value of i
                (function(index)
                {
                    document.getElementById(`button_${index}`).addEventListener("click", ()=>
                    {
                        document.getElementById("signBody").innerHTML = `<b><i>Singnature Tactic:</i> <br> ${teamMemberInfo[index][2]}`;
                        // Show the modal
                        infoModal.show();
                    });
                })(i);
            }
        }
    }
)();
