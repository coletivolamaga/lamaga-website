random_color();
//sectionH();

//oi();


//setTimeout(sectionH, 3);

//window.addEventListener('resize', sectionH);
/*
document.onkeydown = function (evt) {
    evt = evt || window.event;

    //console.log(evt);

    if (evt['key'] == "+") {
        random_color();
    }
    if (evt['key'] == "h") {
        sectionH();
    }
};
*/

function get_color() {
    var r = Math.floor(Math.random() * 256) + 100;
    var g = Math.floor(Math.random() * 256) + 100;
    var b = Math.floor(Math.random() * 256) + 100;
    var o = 1;

    var color = 'rgb(' + r + ', ' + g + ', ' + b + ', ' + o + ')';

    var avg = (r + g + b) / 3;

    //console.log(color);
    //console.log(avg);

    return color;
}

function random_color() {

    var color = get_color();

    /*
    var logo = document.getElementById('logo');
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            var color = '#202124'
            logo.classList.remove('logo_style');
            logo.setAttribute('src', 'content/logo_big_cut_dark.svg')
        } else {
            logo.classList.add('logo_style');
            logo.setAttribute('src', 'content/logo_big_cut.svg')
        }
    */



    document.getElementById('main').style.backgroundColor = color;
    document.getElementById('header').style.backgroundColor = color;


    /*
        if (avg < 100) {
            var elements = document.querySelectorAll('.item');
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.color = 'white';
            }
        } else{
            var elements = document.querySelectorAll('.item');
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.color = 'black';
            }
        }
    */
}

function sectionH() {
    var headerH = document.getElementById('header').offsetHeight;
    var windowH = window.innerHeight;
    document.getElementById('scroll').style.height = (windowH - headerH) + 'px';
}

function oi() {
    var logoH = document.getElementById('logo').clientHeight;
    console.log(logoH + 'px');
    document.getElementById('item_list').style.paddingBottom = logoH + 'px';
}


/*
update();

function update() {

    var date2 = new Date(); //data do load da pagina
    var date1 = new Date('Sat Jan 30 2021 13:42:39')

    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();

    var difference_ms = date2_ms - date1_ms;

    difference_ms = difference_ms / 1000;
    var seconds = Math.floor(difference_ms % 60);
    difference_ms = difference_ms / 60;
    var minutes = Math.floor(difference_ms % 60);
    difference_ms = difference_ms / 60;
    var hours = Math.floor(difference_ms % 24);
    var days = Math.floor(difference_ms / 24);

    console.log(days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, and ' + seconds + ' seconds');

}*/

document.getElementById('paleta').addEventListener('click', random_color);