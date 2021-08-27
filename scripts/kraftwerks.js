var slideIndex = 1;
var today = new Date();

render();

document.getElementById('lupa').addEventListener('click', close_w_search);


function render() {

    var scroll = document.getElementById('proj_scroll');
    scroll.innerHTML = '';

    var list_div = document.createElement('div');

    list_div.setAttribute('id', 'item_list');
    scroll.appendChild(list_div);

    slideIndex = 1;

    var voltas = data.length;

    //console.log(today);

    for (var i = voltas; i--;) {
        var item_list = document.getElementById('item_list');

        var projdate = new Date((data[i])['date']);
        //console.log(projdate)

        if (projdate < today) {

            var item_a = document.createElement('a');
            item_a.classList.add('item');
            item_a.setAttribute('id', i);

            var item_title = document.createElement('p');
            item_title.appendChild(document.createTextNode((data[i])['title_home']))

            var item_type = document.createElement('p');
            item_type.appendChild(document.createTextNode((data[i])['type']))

            var item_author = document.createElement('p');
            item_author.appendChild(document.createTextNode((data[i])['author']))

            var item_date = document.createElement('p');
            item_date.appendChild(document.createTextNode(formatdate((data[i])['date'])))

            var item_tags = document.createElement('p');
            for (var k = (data[i])['tags'].length; k--;) {
                item_tags.appendChild(document.createTextNode(((data[i])['tags'])[k]));
            }
            item_tags.classList.add('tags');


            item_a.appendChild(item_title);
            item_a.appendChild(item_type);
            item_a.appendChild(item_author);
            item_a.appendChild(item_date);
            item_a.appendChild(item_tags);

            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                console.log('La Maga');
            } else {
                var item_thumb = document.createElement('img');
                if ((data[i])['thumbnail'] == '') {
                    item_thumb.setAttribute('src', 'content/m_icon.svg');
                } else {
                    item_thumb.setAttribute('src', 'content/' + (data[i])['thumbnail']);

                }
                item_thumb.setAttribute('id', i + '_thumb');
                item_thumb.setAttribute('alt', '© LA MAGA');
                item_thumb.classList.add('thumbnail');
                item_a.appendChild(item_thumb);
            }

            item_list.appendChild(item_a);

            item_a.addEventListener('click', open_item);
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                console.log('phone')
            } else {
                item_a.addEventListener('mousemove', item_hover);

            }


            var proj_date_new = new Date((data[i])['date']);
            proj_date_new.setDate(proj_date_new.getDate() + 3);

            if (today < proj_date_new) {
                var sup = document.createElement('sup');
                var newtext = document.createTextNode(' NEW!')
                sup.appendChild(newtext);
                sup.classList.add('new')
                item_title.appendChild(sup)
            }


        }
    }


}

function item_hover(evt) {

    evt = evt || window.event;
    var id = evt.srcElement.id;

    var x = evt.clientX;
    var y = evt.clientY;

    var kt = document.getElementById(id + '_thumb');
    kt.style.left = x + 'px';
    kt.style.top = y + 30 + 'px';

    var windowH = window.innerHeight;
    var windowW = window.innerWidth;

    var kth = kt.offsetHeight;
    var ktw = kt.offsetWidth;

    if (y + kth > windowH) {
        kt.style.top = (y - kth) - 30 + 'px';
    }

    if (x + ktw > windowW) {
        kt.style.left = (x - ktw) + 'px';
    }

}


function open_item(evt) {
    evt = evt || window.event;
    var i = evt.srcElement.id;


    var scroll = document.getElementById('proj_scroll');

    scroll.innerHTML = '';

    var proj_div = document.createElement('div');
    proj_div.setAttribute('id', 'proj_open')

    proj_div.classList.add('proj');
    scroll.appendChild(proj_div);

    //---------close

    var closeX = document.createElement('p');
    var closeX_a = document.createElement('a');
    closeX_a.appendChild(document.createTextNode('✕'));
    closeX_a.setAttribute('alt', 'Press Esc to close')
    closeX_a.addEventListener('click', render);
    closeX.setAttribute('id', 'close');
    closeX.appendChild(closeX_a);
    proj_div.appendChild(closeX);

    //---------title

    var title = document.createElement('h2');
    if ((data[i])['title_full'] != '') {
        title.innerHTML = (data[i])['title_full'];
    } else {
        title.innerHTML = (data[i])['title_home'];
    }

    proj_div.appendChild(title);

    //---------subtitle

    if ((data[i])['subtitle'] != '') {
        var subtitle = document.createElement('h3');
        subtitle.innerHTML = (data[i])['subtitle'];
        proj_div.appendChild(subtitle);
    }

    //---------author+date

    var author_date = document.createElement('p');
    author_date.innerHTML = (data[i])['author'] + ' / ' + formatdate((data[i])['date']);
    author_date.classList.add('author_date')
    proj_div.appendChild(author_date);

    //---------text

    if ((data[i])['text'] != '') {
        var text = document.createElement('div');
        text.innerHTML = (data[i])['text'];
        proj_div.appendChild(text);
    }

    //---------notes

    if ((data[i])['notes'].length > 0) {
        var note_list = document.createElement('ol');
        note_list.appendChild(document.createTextNode('━━━━━━━━━━━━━━'))
        note_list.classList.add('notes');
        for (var p = (data[i])['notes'].length; p--;) {
            var note_list_item = document.createElement('li');
            note_list_item.innerHTML = ((data[i])['notes'])[p];
            note_list.appendChild(note_list_item);
        }
        proj_div.appendChild(note_list);
    }

    //---------colabs

    if ((data[i])['collaboration'].length > 0) {
        var colab_list = document.createElement('ul');
        colab_list.appendChild(document.createTextNode('Em colaboração com:'))
        for (var p = (data[i])['collaboration'].length; p--;) {
            var colab_list_item = document.createElement('li');
            colab_list_item.appendChild(document.createTextNode('→ ' + ((data[i])['collaboration'])[p]));
            colab_list.appendChild(colab_list_item);
        }
        proj_div.appendChild(colab_list);
    }

    //--------misc

    if ((data[i])['misc'] != '') {
        for (p = 0; p < (data[i])['misc'].length; p++) {
            var misc = document.createElement('div');
            misc.innerHTML = ((data[i])['misc'])[p];
            proj_div.appendChild(misc);
        }
    }

    //---------images

    if ((data[i])['images'].length > 1) {
        var slide_container = document.createElement('div');
        slide_container.setAttribute('id', 'slider');
        slide_container.classList.add('slideshow-container');

        for (p = 0; p < (data[i])['images'].length; p++) {

            var slide = document.createElement('div');
            slide.classList.add('mySlides');

            var slide_number = document.createElement('div');
            slide_number.innerHTML = (p + 1) + '/' + (data[i])['images'].length;
            slide_number.classList.add('numbertext');
            slide.appendChild(slide_number);

            var slide_image = document.createElement('img');
            slide_image.setAttribute('src', 'content/' + ((data[i])['images'])[p]);
            slide_image.setAttribute('alt', '© LA MAGA');
            slide.appendChild(slide_image);

            slide_container.appendChild(slide);
        }

        var prev = document.createElement('a');
        prev.appendChild(document.createTextNode('◀'));
        prev.classList.add('prev');
        prev.addEventListener('click', minusSlides);

        var next = document.createElement('a');
        next.appendChild(document.createTextNode('▶'));
        next.classList.add('next');
        next.addEventListener('click', plusSlides);

        var controls_div = document.createElement('div');
        controls_div.setAttribute('id', 'controls_div');

        proj_div.appendChild(slide_container);
        controls_div.appendChild(prev);
        controls_div.appendChild(next);
        slide_container.appendChild(controls_div);

        showSlides(slideIndex);

    }

    if ((data[i])['images'].length == 1) {
        var single_image = document.createElement('img');
        single_image.setAttribute('src', 'content/' + ((data[i])['images'])[0]);
        single_image.setAttribute('alt', '© LA MAGA');
        single_image.classList.add('single_image');
        proj_div.appendChild(single_image);

    }
}


//---------format

function formatdate(n) {
    const monthNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
        "Jul", "Agt", "Set", "Out", "Nov", "Dez"
    ];
    const dateObj = new Date(n);
    const month = monthNames[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const output = day + '\n' + month + '\n' + year;

    return output;
}

//----keyfuncionts

document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (document.getElementById('proj_open') != null) {
        if (evt['key'] == "Escape") {
            render();
        }
    };
    if (document.getElementById('slider') != null) {
        if (evt['key'] == "ArrowRight") {
            plusSlides();
        }
        if (evt['key'] == "ArrowLeft") {
            minusSlides();
        }
    }

    if (evt['key'] == "+") {
        random_color();
    }
};



//-----carousell

function plusSlides() {
    showSlides(slideIndex += 1);
}

function minusSlides() {
    showSlides(slideIndex += -1);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    console.log
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


function close_w_search() {
    if (document.getElementById('proj_open') != null) {
        render();
    };
}