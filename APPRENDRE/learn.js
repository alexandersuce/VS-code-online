function openTab(tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

function testerCode() {
    var htmlCode = document.querySelector('.prompt').value;
    var cssCode = `
        /* Votre CSS ici */
        body {
            background-color: #f0f0f0; /* Ajoute un fond de couleur */
        }
    `;
    var jsCode = `
        // Votre JavaScript ici
        console.log('Hello from JavaScript!');
    `;
    var newPage = window.open();

    // Écrit le HTML avec le CSS et le JavaScript dans la nouvelle fenêtre
    newPage.document.write(`
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Test Page</title>
            <style>${cssCode}</style>
            <script>${jsCode}</script>
        </head>
        <body>
            ${htmlCode}
        </body>
        </html>
    `);

    newPage.document.close();
}
