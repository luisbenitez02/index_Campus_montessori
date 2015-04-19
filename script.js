var images = [
    "two/uno.jpg",
    "two/dos.jpg",
    "two/tres.jpg",
    "two/cuatro.jpg",
    "two/cinco.jpg"
    ];
var remIndex;
var index = -1,
    oldIndex;

$(document).ready(function() {

    getNextImage();
    $.backstretch(images[index], {
        speed: 600
    });

    setInterval(function() {
        getNextImage();
        $.backstretch(images[index]);
    }, 4900);

    $(images).each(function() {
        $("<img/>")[0].src = this;
    });

});

function getNextImage() {
    if (remIndex == null || remIndex.length == 0) {
        repopulate();
    }
    oldIndex = index;
    var rInd;
    while (oldIndex == index) {
        rInd = Math.floor((Math.random() * remIndex.length));
        index = remIndex[rInd];
    }
    console.log(index);
    remIndex.splice(rInd, 1);
}

function repopulate() {
    if (remIndex == null) {
        remIndex = new Array();
    }
    for (var i = 0; i < images.length; i++) {
        remIndex.push(i);
    }
}
