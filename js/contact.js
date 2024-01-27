class Contact
{

    /**
    * Creating a Constructor Method
     * This will be used to initialize and generate the object of the class
      */

    constructor(firstName = "",lastName = "",email = "",reasonForContact = "",city = "",zip = "")
    {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._reasonForContact = reasonForContact;
        this._city = city;
        this._zip = zip;
    }

    /**
     * Generating the Getter and Setter Methods
     */

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get reasonForContact() {
        return this._reasonForContact;
    }

    set reasonForContact(value) {
        this._reasonForContact = value;
    }
    get city() {
        return this._city;
    }

    set city(value) {
        this._city = value;
    }

    get zip() {
        return this._zip;
    }

    set zip(value) {
        this._zip = value;
    }

}