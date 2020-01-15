//import { dataSceneTest } from "./scene-test";


let jsScreen = null;
let screenContext = null;
let preloader = null;
let imgBackground = null;

let userView = null;
let animationFullImage = null;
let animationPartImage = null;


let loaderMaxItems = 0;
let loaderNumOfItems = 0;


let displayGrid = 1;
let displayForm = 1;


let timeStart = 0;
let animationTimeout = 100;
let animationTimer = null;


class classUserView {
    cameraXPos;
    cameraYPos;
    cameraZoom;
    sceneXOffset;
    sceneYOffset;
    mousePosX;
    mousePosY;

    constructor() {
        this.cameraXPos = 0;
        this.cameraYPos = 0;
        this.cameraZoom = 1;
        this.sceneXOffset = 0;
        this.sceneYOffset = 0;
        this.mousePosX = 0;
        this.mousePosY = 0;
    }

    calcOffset() {
        this.sceneXOffset = jsScreen.width/2-this.cameraXPos*this.cameraZoom;
        this.sceneYOffset = jsScreen.height/2-this.cameraYPos*this.cameraZoom;
    }

    cameraTransform() {
        screenContext.setTransform(1, 0, 0, 1, 0, 0);
        screenContext.transform(1, 0, 0, 1, jsScreen.width/2, jsScreen.height/2);
        screenContext.transform(userView.cameraZoom, 0, 0, userView.cameraZoom, 0, 0);
        screenContext.transform(1, 0, 0, 1, -userView.cameraXPos, -userView.cameraYPos);
    }

    drawBackground() {
        let gridSize = imgBackground.width * this.cameraZoom;
        let totalX = this.sceneXOffset%gridSize-gridSize;
        while(totalX < jsScreen.width) {

            let totalY = this.sceneYOffset%gridSize-gridSize;
            while(totalY < jsScreen.height) {

                screenContext.drawImage(imgBackground, totalX, totalY, gridSize, gridSize);

                totalY += gridSize;}
            totalX += gridSize;}

        // тут отрисовываем текст
        //screenContext.fillStyle = "white";

        //screenContext.font = (48 * this.cameraZoom) + "px calibri";
        //screenContext.fillText("Work in progress",
        //    this.sceneXOffset-155*this.cameraZoom,this.sceneYOffset-10*this.cameraZoom);

        //screenContext.font = (24 * this.cameraZoom) + "px calibri";
        //screenContext.fillText("Please, be patient",
        //    this.sceneXOffset-100*this.cameraZoom,this.sceneYOffset+20*this.cameraZoom);
    }

    drawSceneObject(object) {
        let radrot = object.objectRotation*Math.PI/180;
        userView.cameraTransform();
        screenContext.transform(1, 0, 0, 1, object.objectPositionX, object.objectPositionY); // to position
        screenContext.transform(object.objectScale, 0, 0, object.objectScale, 0, 0); // scale
        screenContext.transform(Math.cos(radrot), -Math.sin(radrot), Math.sin(radrot), Math.cos(radrot), 0, 0); // rotate
        screenContext.transform(1, 0, 0, 1, -object.objectCenterX, -object.objectCenterY); // to center of object

        if(object.objectAnimationSpriteWidth>0 && object.objectAnimationSpriteHeight>0) { // animated
            screenContext.drawImage(object.objectImage,
                object.objectAnimationOffsetX, object.objectAnimationOffsetY,
                object.objectAnimationSpriteWidth,object.objectAnimationSpriteHeight,
                0, 0,
                object.objectSizeX * object.objectAnimationSpriteWidth,
                object.objectSizeY * object.objectAnimationSpriteHeight);
        } else { // non animated
            screenContext.drawImage(object.objectImage, 0, 0,
                object.objectSizeX * object.objectImage.width,
                object.objectSizeY * object.objectImage.height);
        }
    }

    drawScene(scene) {
        let thisView = this;
        scene.objectArray.forEach(function(item, i, arr) {
            thisView.drawSceneObject(item);
        });
    }

}


class classSceneObject {
    objectName;
    objectPositionX;
    objectPositionY;
    objectCenterX;
    objectCenterY;
    objectSizeX;
    objectSizeY;
    objectScale;
    objectRotation;
    objectTransform;
    objectImage;
    objectImgPath;

    objectAnimationSpriteWidth;
    objectAnimationSpriteHeight;
    objectAnimationOffsetX;
    objectAnimationOffsetY;
    objectAnimationTimeout;
    objectAnimationStopped;

    constructor(data) {
        this.objectImage = new Image();
        this.objectImage.onload = resourceOnLoad;

        this.objectAnimationSpriteWidth = 0;
        this.objectAnimationSpriteHeight = 0;
        this.objectAnimationOffsetX = 0;
        this.objectAnimationOffsetY = 0;
        this.objectAnimationTimeout = 0;
        this.objectAnimationStopped = true;

        //console.log("  load (" + data[0] + ")");

        if(data === undefined) {
            this.objectName = "";
            this.objectPositionX = 0;
            this.objectPositionY = 0;
            this.objectSizeX = 1;
            this.objectSizeY = 1;
            this.objectCenterX = 0;
            this.objectCenterY = 0;
            this.objectRotation = 0;
            this.objectScale = 1;
            this.objectImgPath = "";
        } else {
            this.objectName = data[0];
            this.objectPositionX = data[1];
            this.objectPositionY = data[2];
            this.objectSizeX = data[3];
            this.objectSizeY = data[4];
            this.objectCenterX = data[5];
            this.objectCenterY = data[6];
            this.objectRotation = data[7];
            this.objectScale = data[8];
            this.objectImgPath = data[9];
        }
    }

    loadImage() {
        this.objectImage.src = this.objectImgPath;
    }

}


class classScene {
    objectArray;

    constructor() {
        this.objectArray = [];
    }

    addObject(object) {
        this.objectArray.push(object);
    }

    loadObjectsFromData(data) {
        //console.log("Start loading data");

        let thisScene = this;
        data.forEach(function(item, i, arr) {
            thisScene.addObject( new classSceneObject(item) );
        });
    }

    loadImages() {
        this.objectArray.forEach(function(item, i, arr) {
            loaderMaxItems++;
            item.loadImage();
        });
    }
}





// when window onload fired then start to do stuff
window.onload = function(e) {
    timeStart = Date.now();
    jsScreen = document.getElementById("js-screen");
    preloader = document.getElementById("preloader");


    userView = new classUserView();
    animationFullImage = new classSceneObject(["full", 0, 0, 1, 1, 0, 0, 0, 1, "../img/sprite-animation.png"]);
    animationPartImage = new classSceneObject(["part", 0, 0, 1, 1, 0, 0, 0, 1, "../img/sprite-animation.png"]);


    animationFullImage.objectImage.onload = resourceAnimOnLoad;
    animationPartImage.objectImage.onload = resourceAnimOnLoad;


    animationFullImage.loadImage();
    animationPartImage.loadImage();


    {// defaults
        animationPartImage.objectAnimationSpriteWidth = 80;
        animationPartImage.objectAnimationTimeout = 100;
    }


    // background
    loaderMaxItems++;
    imgBackground = new Image();
    imgBackground.onload = resourceOnLoad;
    imgBackground.src = "../img/bg_grid.png";


    //currentScene.loadImages();


    //show body
    document.body.style.display = "block";

    //init screen
    initScreen();
};


window.onresize = function(e) {
    resizeScreen();
    drawCall();
};


function initScreen() {
    screenContext = jsScreen.getContext('2d');

    screenContext.imageSmoothingEnabled = false;
    screenContext.imageSmoothingQuality = "low";

    let mouseRightIsActive = false;

    jsScreen.style.cursor = "default";

    jsScreen.onmousemove = function(e) {
        let mousePosXEvStart = userView.mousePosX;
        let mousePosYEvStart = userView.mousePosY;
        userView.mousePosX = e.clientX;
        userView.mousePosY = e.clientY;

        if(mouseRightIsActive) {
            //console.log("m calc : " + cameraXPos + " = - (" + mousePosX + " - " + mousePosXEvStart + ")");
            userView.cameraXPos -= (userView.mousePosX - mousePosXEvStart) / userView.cameraZoom;
            userView.cameraYPos -= (userView.mousePosY - mousePosYEvStart) / userView.cameraZoom;
            drawCall();
        }
    };

    jsScreen.onmousedown = function(e) {
        if(e.which === 3) {
            jsScreen.style.cursor = "grabbing";
            //console.log("m down : " + mousePosXEvStart + " : " + mousePosYEvStart);
            mouseRightIsActive = true;
        }
    };

    jsScreen.onmouseup = function(e) {
        if(e.which === 3) {
            //console.log("m up");
            mouseRightIsActive = false;

            jsScreen.style.cursor = "default";
        }
    };

    jsScreen.onwheel = function(e) {
        e.preventDefault();

        userView.cameraZoom *= e.deltaY < 0 ? 1.25 : 0.75;

        if(userView.cameraZoom < 0.25) userView.cameraZoom = 0.25;
        if(userView.cameraZoom > 5) userView.cameraZoom = 5;

        drawCall();
        //console.log("m wheel : " + cameraZoom);
    };

    jsScreen.onmouseleave = function(e) {
        mouseRightIsActive = false;

        jsScreen.style.cursor = "default";
    };

    jsScreen.addEventListener('contextmenu', function(evt) {
        evt.preventDefault();
    }, false);

    //animationTimer = window.setInterval(gameChain, animationTimeout);
    resizeScreen();
}


function resizeScreen() {
    let jsScreenSize = jsScreen.getBoundingClientRect();
    console.log("Container size: " + jsScreenSize.width + "; " + jsScreenSize.height);

    jsScreen.width = jsScreenSize.width;
    jsScreen.height = jsScreenSize.height;
}


function resourceOnLoad(e) {
    loaderNumOfItems++;

    preloader.innerHTML = "Loading... " + (loaderNumOfItems / loaderMaxItems * 100 | 0) + "%";

    //console.log("res loaded");

    if(loaderNumOfItems === loaderMaxItems) {
        preloader.style.display = "none";
        drawCall();
    }
}



function resourceAnimOnLoad(e) {
    animationFullImage.objectScale = (128*2) / animationFullImage.objectImage.height;
    animationPartImage.objectScale = animationFullImage.objectScale;

    animationPartImage.objectAnimationSpriteHeight = animationPartImage.objectImage.height;

    //animationPartImage.objectAnimationSpriteWidth = 0;
    if(animationPartImage.objectAnimationSpriteWidth > animationPartImage.objectImage.width)
        animationPartImage.objectAnimationSpriteWidth = animationPartImage.objectImage.width;

    animationPartImage.objectPositionX = -animationPartImage.objectAnimationSpriteWidth*animationPartImage.objectScale-32;
    //animationPartImage.objectAnimationTimeout = 100;

    drawCall();
}



function getImgFromInput(thisInput) {
    if (thisInput.files && thisInput.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            animationFullImage.objectImage.src = e.target.result;
            animationPartImage.objectImage.src = e.target.result;
        };
        reader.readAsDataURL(thisInput.files[0]);
    }
}


function triggerGrid() {
    displayGrid = 1-displayGrid;
    drawCall();
}


function triggerForm() {
    let animationForm = document.getElementById("animation-form");
    displayForm = 1-displayForm;
    if(displayForm === 1)
        animationForm.style.display = "block";
    else
        animationForm.style.display = "none";
}


function changeAnimSpriteWidth(thisInput) {
    animationPartImage.objectAnimationSpriteWidth = thisInput.value;
    animationPartImage.objectAnimationOffsetX = 0;
    if(animationPartImage.objectAnimationSpriteWidth > animationPartImage.objectImage.width) {
        animationPartImage.objectAnimationSpriteWidth = animationPartImage.objectImage.width;
        thisInput.value = animationPartImage.objectAnimationSpriteWidth;
    }

    animationPartImage.objectPositionX = -animationPartImage.objectAnimationSpriteWidth*animationPartImage.objectScale-32;

    drawCall();
}


function changeTimeout(thisInput) {
    animationTimeout = thisInput.value;
    clearInterval(animationTimer);
    animationTimer = window.setInterval(gameChain, animationTimeout);
}


function animationPlay() {
    clearInterval(animationTimer);
    animationTimer = window.setInterval(gameChain, animationTimeout);
}


function animationStop() {
    clearInterval(animationTimer);
}


function drawCall() {
    let timeStart = Date.now();

    screenContext.setTransform(1, 0, 0, 1, 0, 0);
    screenContext.fillStyle = "black";
    screenContext.fillRect(0, 0, jsScreen.width, jsScreen.height);

    userView.calcOffset();
    if(displayGrid === 1) userView.drawBackground();
    //userView.drawScene(currentScene);

    userView.drawSceneObject(animationFullImage);

    userView.drawSceneObject(animationPartImage);

    let timeEnd = Date.now();

    //console.log("draw call : " + (timeEnd - timeStart) + "ms");
}


function updateCall() {
    animationPartImage.objectAnimationOffsetX = animationPartImage.objectAnimationOffsetX*1 + animationPartImage.objectAnimationSpriteWidth*1;
    if(animationPartImage.objectAnimationOffsetX >= animationPartImage.objectImage.width)
        animationPartImage.objectAnimationOffsetX = 0;
    //console.log(animationPartImage.objectAnimationOffsetX);
}


function gameChain() {
    updateCall();
    drawCall();
}