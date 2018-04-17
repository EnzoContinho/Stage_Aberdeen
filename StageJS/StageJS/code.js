var img = new Image();

img.src = "img/download.jpg"

img.onload = function(){
    dessiner(this);
}

function dessiner(img){
    var canevasGris = document.getElementById('gris');
    var contextGris = canevasGris.getContext('2d');
    var canvasInvert = document.getElementById('invert');
    var contextInvert = canvasInvert.getContext('2d');
    var base = document.getElementById('base');
    var context_base = base.getContext('2d');
    contextGris.drawImage(img, 0, 0);
    context_base.drawImage(img, 0, 0);
    contextInvert.drawImage(img, 0, 0);
    img.style.display = 'none';
    var imgData = contextGris.getImageData(0, 0, canevasGris.width, canevasGris.height);
    var data = imgData.data;
    for (var i = 0; i < data.length; i += 4) {
        var moy = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = moy;
        data[i + 1] = moy;
        data[i + 2] = moy;
    }
    contextGris.putImageData(imgData, 0, 0);
    var imgData = contextInvert.getImageData(0, 0, canvasInvert.width, canvasInvert.height);
    var data = imgData.data;
    for(var i = 0; i < data.length; i += 4){
        data[i] = 255 - data[i];
        data[i + 1] = 255 - data[i + 1];
        data[i + 2] = 255 - data[i + 2];
    }
    contextInvert.putImageData(imgData, 0, 0)
}
