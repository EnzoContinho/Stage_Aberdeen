var img = new Image();

img.src = "img/download.jpg"

img.onload = function(){
    dessiner(this);
    clearBlue(this);
}

function shadeGrey(){
    var canevasGris = document.getElementById('modify');
    var contextGris = canevasGris.getContext('2d');
    contextGris.drawImage(img, 0, 0);
    var imgData = contextGris.getImageData(0, 0, canevasGris.width, canevasGris.height);
    var data = imgData.data;
    for (var i = 0; i < data.length; i += 4) {
        var moy = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = moy;
        data[i + 1] = moy;
        data[i + 2] = moy;
    }
    contextGris.putImageData(imgData, 0, 0);
}

function invert(){
    var canvasInvert = document.getElementById('modify');
    var contextInvert = canvasInvert.getContext('2d');
    contextInvert.drawImage(img, 0, 0);
    var imgData = contextInvert.getImageData(0, 0, canvasInvert.width, canvasInvert.height);
    var data = imgData.data;
    for(var i = 0; i < data.length; i += 4){
        data[i] = 255 - data[i];
        data[i + 1] = 255 - data[i + 1];
        data[i + 2] = 255 - data[i + 2];
    }
    contextInvert.putImageData(imgData, 0, 0);
}

function decreaseRed(){
    var canvasDecreaseRed = document.getElementById('modify');
    var contextDecreaseRed = canvasDecreaseRed.getContext('2d');
    contextDecreaseRed.drawImage(img, 0, 0);
    var imgData = contextDecreaseRed.getImageData(0, 0, canvasDecreaseRed.width, canvasDecreaseRed.height);
    var data = imgData.data;
    for(var i = 0; i < data.length; i += 4){
        data[i] = data[i]*0.5;
    }
    contextDecreaseRed.putImageData(imgData, 0, 0);
}

function decreaseGreen(){
    var canvasDecreaseGreen = document.getElementById('modify');
    var contextDecreaseGreen = canvasDecreaseGreen.getContext('2d');
    contextDecreaseGreen.drawImage(img, 0, 0);
    var imgData = contextDecreaseGreen.getImageData(0, 0, canvasDecreaseGreen.width, canvasDecreaseGreen.height);
    var data = imgData.data;
    for(var i = 0; i < data.length; i += 4){
        data[i+1] = data[i+1]*0.5;
    }
    contextDecreaseGreen.putImageData(imgData, 0, 0);
}

function decreaseBlue(){
    var canvasDecreaseBlue = document.getElementById('modify');
    var contextDecreaseBlue = canvasDecreaseBlue.getContext('2d');
    contextDecreaseBlue.drawImage(img, 0, 0);
    var imgData = contextDecreaseBlue.getImageData(0, 0, canvasDecreaseBlue.width, canvasDecreaseBlue.height);
    var data = imgData.data;
    for(var i = 0; i < data.length; i += 4){
        data[i+2] = data[i+2]*0.5;
    }
    contextDecreaseBlue.putImageData(imgData, 0, 0);
}

function whileDecreaseRed(){
    var canvasWhileDecreaseRed = document.getElementById('modify');
    var contextWhileDecreaseRed = canvasWhileDecreaseRed.getContext('2d');
    contextWhileDecreaseRed.drawImage(img, 0, 0);
    var imgData = contextWhileDecreaseRed.getImageData(0, 0, canvasWhileDecreaseRed.width, canvasWhileDecreaseRed.height);
    var data = imgData.data;
    var i=0;
    while(i<data.length){
        data[i] = data[i]*0.5;
        i+=4;
    }
    contextWhileDecreaseRed.putImageData(imgData, 0, 0);
}

function whileDecreaseGreen(){
    var canvasWhileDecreaseGreen = document.getElementById('modify');
    var contextWhileDecreaseGreen = canvasWhileDecreaseGreen.getContext('2d');
    contextWhileDecreaseGreen.drawImage(img, 0, 0);
    var imgData = contextWhileDecreaseGreen.getImageData(0, 0, canvasWhileDecreaseGreen.width, canvasWhileDecreaseGreen.height);
    var data = imgData.data;
    var i=1;
    while(i<data.length){
        data[i] = data[i]*0.5;
        i+=4;
    }
    contextWhileDecreaseGreen.putImageData(imgData, 0, 0);
}

function whileDecreaseBlue(){
    var canvasWhileDecreaseBlue = document.getElementById('modify');
    var contextWhileDecreaseBlue = canvasWhileDecreaseBlue.getContext('2d');
    contextWhileDecreaseBlue.drawImage(img, 0, 0);
    var imgData = contextWhileDecreaseBlue.getImageData(0, 0, canvasWhileDecreaseBlue.width, canvasWhileDecreaseBlue.height);
    var data = imgData.data;
    var i=2;
    while(i<data.length){
        data[i] = data[i]*0.5;
        i+=4;
    }
    contextWhileDecreaseBlue.putImageData(imgData, 0, 0);
}

function IncreaseRed(){
    var canvasIncreaseRed = document.getElementById('modify');
    var contextIncreaseRed = canvasIncreaseRed.getContext('2d');
    contextIncreaseRed.drawImage(img, 0, 0);
    var imgData = contextIncreaseRed.getImageData(0, 0, canvasIncreaseRed.width, canvasIncreaseRed.height);
    var data = imgData.data;
    for(var i = 0; i < data.length; i += 4){
        data[i] = data[i]*2.5;
    }
    contextIncreaseRed.putImageData(imgData, 0, 0);
}

function clearBlue(){
    var canvasClearBlue = document.getElementById('modify');
    var contextClearBlue = canvasClearBlue.getContext('2d');
    contextClearBlue.drawImage(img, 0, 0);
    var imgData = contextClearBlue.getImageData(0, 0, canvasClearBlue.width, canvasClearBlue.height);
    var data = imgData.data;
    var i=2;
    while(i<data.length){
        data[i] = 0;
        i+=4;
    }
    contextClearBlue.putImageData(imgData, 0, 0);
}

function dessiner(){
    var base = document.getElementById('base');
    var context_base = base.getContext('2d');
    context_base.drawImage(img, 0, 0);
}
