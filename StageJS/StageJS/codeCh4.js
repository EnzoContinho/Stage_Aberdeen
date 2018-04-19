var img = new Image();

img.src = "img/drapeauFr.png"

window.onload = function(){
    dessiner(img);
}

function dessiner(){
    var base = document.getElementById('base');
    var context_base = base.getContext('2d');
    context_base.drawImage(img, 0, 0);
}

function decreaseRed(){
    var canvasDecreaseRed = document.getElementById('decreaseRed');
    var contextDecreaseRed = canvasDecreaseRed.getContext('2d');
    contextDecreaseRed.drawImage(img, 0, 0);
    var imgData = contextDecreaseRed.getImageData(0, 0, canvasDecreaseRed.width, canvasDecreaseRed.height);
    var data = imgData.data;
    for(var i = 0; i < data.length; i += 4){
        data[i] = data[i]*0.5;
    }
    contextDecreaseRed.putImageData(imgData, 0, 0);
    decreaseRedCode();
}

function decreaseGreen(){
    var canvasDecreaseGreen = document.getElementById('decreaseGreen');
    var contextDecreaseGreen = canvasDecreaseGreen.getContext('2d');
    contextDecreaseGreen.drawImage(img, 0, 0);
    var imgData = contextDecreaseGreen.getImageData(0, 0, canvasDecreaseGreen.width, canvasDecreaseGreen.height);
    var data = imgData.data;
    for(var i = 0; i < data.length; i += 4){
        data[i+1] = data[i+1]*0.5;
    }
    contextDecreaseGreen.putImageData(imgData, 0, 0);
    decreaseGreenCode();
}

function decreaseBlue(){
    var canvasDecreaseBlue = document.getElementById('decreaseBlue');
    var contextDecreaseBlue = canvasDecreaseBlue.getContext('2d');
    contextDecreaseBlue.drawImage(img, 0, 0);
    var imgData = contextDecreaseBlue.getImageData(0, 0, canvasDecreaseBlue.width, canvasDecreaseBlue.height);
    var data = imgData.data;
    for(var i = 0; i < data.length; i += 4){
        data[i+2] = data[i+2]*0.5;
    }
    contextDecreaseBlue.putImageData(imgData, 0, 0);
    decreaseBlueCode();
}

function whileDecreaseRed(){
    var canvasWhileDecreaseRed = document.getElementById('decreaseRedWhile');
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
    decreaseRedWhileCode();
}

function whileDecreaseGreen(){
    var canvasWhileDecreaseGreen = document.getElementById('decreaseGreenWhile');
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
    decreaseGreenWhileCode();
}

function whileDecreaseBlue(){
    var canvasWhileDecreaseBlue = document.getElementById('decreaseBlueWhile');
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
    decreaseBlueWhileCode();
}

function IncreaseRed(){
    var canvasIncreaseRed = document.getElementById('increaseRed');
    var contextIncreaseRed = canvasIncreaseRed.getContext('2d');
    contextIncreaseRed.drawImage(img, 0, 0);
    var imgData = contextIncreaseRed.getImageData(0, 0, canvasIncreaseRed.width, canvasIncreaseRed.height);
    var data = imgData.data;
    for(var i = 0; i < data.length; i += 4){
        data[i] = data[i]*2.5;
    }
    contextIncreaseRed.putImageData(imgData, 0, 0);
    increaseRedCode();
}

function clearBlue(){
    var canvasClearBlue = document.getElementById('clearBlue');
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
    clearBlueCode();
}

function sunset(){
    decreaseGreen();
    decreaseBlue();
}

function changeRed(form){
    var amount = form.value.value;
    var canvasChangeRed = document.getElementById('changeRed');
    var contextChangeRed = canvasChangeRed.getContext('2d');
    contextChangeRed.drawImage(img, 0, 0);
    var imgData = contextChangeRed.getImageData(0, 0, canvasChangeRed.width, canvasChangeRed.height);
    var data = imgData.data;
    for(var i = 0; i < data.length; i += 4){
        data[i] = data[i]*amount;
    }
    contextChangeRed.putImageData(imgData, 0, 0);
    changeRedCode();
}

function changeColors(form){
    var redAmount = form.valueRed.value;
    var greenAmount = form.valueGreen.value;
    var blueAmount = form.valueBlue.value;
    var canvasChangeColors = document.getElementById('changeColors');
    var contextChangeColors = canvasChangeColors.getContext('2d');
    contextChangeColors.drawImage(img, 0, 0);
    var imgData = contextChangeColors.getImageData(0, 0, canvasChangeColors.width, canvasChangeColors.height);
    var data = imgData.data;
    for(var i = 0; i < data.length; i += 4){
        data[i] = data[i]*redAmount;
        data[i+1] = data[i+1]*greenAmount;
        data[i+2] = data[i+2]*blueAmount;
    }
    contextChangeColors.putImageData(imgData, 0, 0);
}

function lighten(){//TO DO IN HTML
    var canvaslighten = document.getElementById('lighten');
    var contextlighten = canvaslighten.getContext('2d');
    contextlighten.drawImage(img, 0, 0);
    var imgData = contextlighten.getImageData(0, 0, canvaslighten.width, canvaslighten.height);
    var data = imgData.data;
    for(var i = 3; i < data.length; i += 4){
        data[i] = data[i]*1.3;
        data[i+1] = data[i+1]*1.3;
        data[i+2] = data[i+2]*1.3;
    }
    contextlighten.putImageData(imgData, 0, 0);
}

function darken(){//TO DO IN HTML
    var canvasdarken = document.getElementById('darken');
    var contextdarken = canvasdarken.getContext('2d');
    contextdarken.drawImage(img, 0, 0);
    var imgData = contextdarken.getImageData(0, 0, canvasdarken.width, canvasdarken.height);
    var data = imgData.data;
    for(var i = 0; i < data.length; i += 4){
        data[i] = data[i]*0.7;
        data[i+1] = data[i+1]*0.7;
        data[i+2] = data[i+2]*0.7;
    }
    contextdarken.putImageData(imgData, 0, 0);
}

function invert(){
    var canvasInvert = document.getElementById('invert');
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
    InvertCode();
}

function shadeGrey(){
    var canevasGris = document.getElementById('grey');
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
    greyCode();
}

function betterShadeGrey(){
    var canevasBetterShadeGrey = document.getElementById('grey');
    var contextBetterShadeGrey = canevasBetterShadeGrey.getContext('2d');
    contextBetterShadeGrey.drawImage(img, 0, 0);
    var imgData = contextBetterShadeGrey.getImageData(0, 0, canevasBetterShadeGrey.width, canevasBetterShadeGrey.height);
    var data = imgData.data;
    redValue=greenValue=blueValue=0;
    for (var i = 0; i < data.length; i += 4) {
        redValue=data[i]*0.299;
        greenValue=data[i+1]*0.587;
        blueValue=data[i+2]*0.114;
        luminance = redValue+greenValue+blueValue;
        data[i] = luminance;
        data[i + 1] = luminance;
        data[i + 2] = luminance;       
    }
    contextBetterShadeGrey.putImageData(imgData, 0, 0);
    betterShadeGreyCode();
}



