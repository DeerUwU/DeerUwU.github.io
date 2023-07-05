const folderPath2d = './assets/personal/2d art'; //gets filepath of full size images
const folderPath3d = './assets/personal/3d art'; //gets filepath of full size images

const gallery2d = document.getElementById("gallery-parent-2d");
const gallery3d = document.getElementById("gallery-parent-3d");


function processFolder(folderPath) { //used for processing 2d art, and 3d art folders
    fetch(folderPath)
    .then(res => res.text())
    .then(data => {
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(data, 'text/html');
        const anchorElements  = htmlDocument.querySelectorAll('a');

        const filePaths = Array.from(anchorElements)
        .map(a => a.href)
        .filter(filePath => isImagePath(filePath)); // Filter non-image file paths

        //console.log(filePaths, "filePaths");
        filePaths.forEach(filePath  => {

            //replaces filepath with ./assets/gallerytest/thumb and replaces file ending with .jpg
            //since all thumbnails use .jpg
            let directoryPath = filePath.substring(0, filePath.lastIndexOf('/')); 
            let fileName = filePath.substring(filePath.lastIndexOf('/') + 1, filePath.lastIndexOf('.'));
            let filePathThumb = `${directoryPath}/thumb/${fileName}.jpg`;

            //console.log("filepath: ",filePathThumb);

            let newNode = document.createElement('img');
            
            newNode.src = filePathThumb;
            newNode.classList.add('gallery-img');

            $(newNode).click(function(){ //modal part
                $(".modal").hide();
                $(".modal_bg").show(300);

                
                document.getElementById("modal-placeholder").src = filePath;
            });

            let divNode = document.createElement('div');
            divNode.appendChild(newNode);
            divNode.classList.add('gallery-div');

            if (folderPath === folderPath2d) {
                gallery2d.insertBefore(divNode, gallery2d.children[0]);
            } else {
                gallery3d.insertBefore(divNode, gallery3d.children[0]);
            }
            
            
        });

    })
}
processFolder(folderPath2d);
processFolder(folderPath3d);


    





function isImagePath(filePath) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webm']; // Add more extensions if needed
    const lowerCaseFilePath = filePath.toLowerCase();
    return imageExtensions.some(extension => lowerCaseFilePath.endsWith(extension));
}

       
$(".modal_bg").click(function(){ //closes modal when you click
    $(".modal_bg").hide(300);
 });



