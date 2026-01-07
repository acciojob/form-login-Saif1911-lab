function getFormvalue() {
    // Access input values using name attribute
    const fname = document.forms["form1"]["fname"].value.trim();
    const lname = document.forms["form1"]["lname"].value.trim();

    // Empty field check
    if (fname === "" || lname === "") {
        alert("Please enter both first and last name.");
        return false;
    }

    // Regex for letters, spaces, hyphens, apostrophes
    const namePattern = /^[A-Za-z]+([ '-][A-Za-z]+)*$/;

    if (!namePattern.test(fname) || !namePattern.test(lname)) {
        alert("Names can only contain letters, spaces, hyphens (-), and apostrophes (').");
        return false;
    }

    alert(`${fname}${lname}`);
    return false; // Prevent page refresh
}
