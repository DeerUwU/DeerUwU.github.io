const folderPath2d = './assets/personal/2d art'; //gets filepath of full size images
const folderPath3d = './assets/personal/3d art'; //gets filepath of full size images

const fetchfile2d = './assets/personal/2d art/fetchfile_2d'; //gets filepath of full size images
const fetchfile3d = './assets/personal/3d art/fetchfile_3d'; //gets filepath of full size images

const gallery2d = document.getElementById("gallery-parent-2d");
const gallery3d = document.getElementById("gallery-parent-3d");


function processList(folderPath, fetchFile) { //used for processing 2d art, and 3d art folders
    fetch(fetchFile)
    .then(res => res.text())
    .then((text) => joinPath(folderPath, text.split(/\r?\n/)))
}

function joinPath(folderPath, fileNameList) {
    for (let i = 0; i < fileNameList.length-1; i++) { //.length-1 because idk how to remove the empty last line from fetchfile
        
        console.log(fileNameList[i])
        let fileName = fileNameList[i].substring(0, fileNameList[i].lastIndexOf('.'));   // seperates file extension
        let filePathThumb = `${folderPath}/thumb/${fileName}.jpg`;      // thumbnail path
        // let filePath = `${folderPath}${fileNameList[i]}`;
        // console.log(filePathThumb)
        
        
        let newNode = document.createElement('img');
        
        newNode.src = filePathThumb;
        newNode.classList.add('gallery-img');
        
        $(newNode).click(function(){ //modal part
            $(".modal").hide();
            document.getElementById("modal-placeholder").src = `${folderPath}/${fileNameList[i]}`; //
            $(".modal_bg").show(300);
            
            
        });
        
        let divNode = document.createElement('div');
        divNode.appendChild(newNode);
        divNode.classList.add('gallery-div');
        
        if (folderPath === folderPath2d) {
            gallery2d.insertBefore(divNode, gallery2d.children[0]);
        } else {
            gallery3d.insertBefore(divNode, gallery3d.children[0]);
        }
    }
}

processList(folderPath2d, fetchfile2d);
processList(folderPath3d, fetchfile3d);




// function isImagePath(filePath) {
//     const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webm']; // Add more extensions if needed
//     const lowerCaseFilePath = filePath.toLowerCase();
//     return imageExtensions.some(extension => lowerCaseFilePath.endsWith(extension));
// }


$(".modal_bg").click(function(){ //closes modal when you click
    $(".modal_bg").hide(300);
    document.getElementById("modal-placeholder").src = "" //removes image so it doesnt show up after clicking another one
});



