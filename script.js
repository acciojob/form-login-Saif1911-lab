function getFormvalue() {
    const fname = document.forms["form1"]["fname"].value.trim();
    const lname = document.forms["form1"]["lname"].value.trim();

    // Empty check
    if (!fname || !lname) {
        alert("Please enter both first and last name.");
        return false;
    }

    // Normalize internal spaces (IMPORTANT for Cypress)
    const cleanFirstName = fname.replace(/\s+/g, " ");
    const cleanLastName = lname.replace(/\s+/g, " ");

    // Allow letters, spaces, hyphens, apostrophes
    const namePattern = /^[A-Za-z]+([ '-][A-Za-z]+)*$/;

    if (!namePattern.test(cleanFirstName) || !namePattern.test(cleanLastName)) {
        alert("Invalid name format.");
        return false;
    }

    // SPACE between names — this fixes Cypress failure
    const fullName = `${cleanFirstName} ${cleanLastName}`;

    alert(fullName);
    return false;
}
