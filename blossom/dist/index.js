"use strict";
// index.ts
// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Log a message to the console
    console.log("Hello, APEXSUITE Blossom!");
    // Optionally update the DOM if an element with the id 'app' exists
    const appElement = document.getElementById('app');
    if (appElement) {
        appElement.innerHTML = `<h1>Hello, ApexSuite Blossom my amazing friends and suckers!</h1>
                              <p>Hizzzaaaa and Welcome to the front-end PoC of our revolutionary business management platform.</p>`;
    }
});
