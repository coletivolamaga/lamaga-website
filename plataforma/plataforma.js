window.onload = function () {
    var input1 = document.getElementById('title_full');
    var input2 = document.getElementById('title_home');
    var input3 = document.getElementById('subtitle');
    var input4 = document.getElementById('author');
    var input5 = document.getElementById('type');


    var input6 = document.getElementById('date');
    var today = new Date();
    input6.setAttribute('value', formatdate(today));

    var input7 = document.getElementById('thumbnail');

    //var text = document.getElementById('output');


    document.getElementById('download').onclick = function (code) {
        var title_full = "title_full: '" + input1.value + "',\n";
        var title_home = "title_home: '" + input2.value + "',\n";
        var subtitle = "subtitle: '" + input3.value + "',\n";
        var author = "author: '" + input4.value + "',\n";
        var type = "type: '" + input5.value + "',\n";
        var date = "date: '" + input6.value + "',\n";
        //var tags = "date: '" + name.value + "',\n";
        var thumbnail = "thumbnail: '" + input7.value + "',\n";
        var text = "text: '" + output.value + "',\n";

        var tags = create_parameter('tags', tags_count);

        var notes = create_parameter('notes', note_count);

        var collab = create_parameter('collaboration', collab_count);

        var images = create_parameter('images', image_count);

        var misc = create_parameter('misc', misc_count);

        var pastehere = '// ░▒▓█ PASTE BELLOW HERE █▓▒░' + "\n";


        this.href = 'data:text/plain;charset=utf-11,' + encodeURIComponent(
            ",{\n" + title_home + title_full + subtitle + author + type + date + tags + thumbnail + text + notes + collab + images + misc + "}" + '\n' + '\n' + pastehere
        );

    };
};

var note_count = -1;
var add_notes = document.getElementById('add_notes');
add_notes.addEventListener('click', function () {
    add_item('notes', note_count);
    note_count++;
});

var remove_notes = document.getElementById('remove_notes');
remove_notes.addEventListener('click', function () {
    remove_item(this, note_count);
    note_count--;
});

var collab_count = -1;
var add_collab = document.getElementById('add_collab');
add_collab.addEventListener('click', function () {
    add_item('collab', collab_count);
    collab_count++;
});

var remove_collab = document.getElementById('remove_collab');
remove_collab.addEventListener('click', function () {
    remove_item(this, collab_count);
    collab_count--;
});

var image_count = -1;
var add_image = document.getElementById('add_image');
add_image.addEventListener('click', function () {
    add_item('image', image_count);
    image_count++;
});

var remove_image = document.getElementById('remove_image');
remove_image.addEventListener('click', function () {
    remove_item(this, image_count);
    image_count--;
});

var tags_count = -1;
var add_tag = document.getElementById('add_tag');
add_tag.addEventListener('click', function () {
    add_item('tag', tags_count);
    tags_count++;
});

var remove_tag = document.getElementById('remove_tag');
remove_tag.addEventListener('click', function () {
    remove_item(this, tags_count);
    tags_count--;
});

var misc_count = -1;
var add_misc = document.getElementById('add_misc');
add_misc.addEventListener('click', function () {
    add_item('misc', misc_count);
    misc_count++;
});

var remove_misc = document.getElementById('remove_misc');
remove_misc.addEventListener('click', function () {
    remove_item(this, misc_count);
    misc_count--;
});

function add_item(a, b) {
    b++

    var f = document.getElementById(a);

    var new_a_p = document.createElement('p');
    new_a_p.setAttribute('id', a + '# ' + b + 'p')
    new_a_p.appendChild(document.createTextNode(a + '# ' + b));

    var new_a = document.createElement('input');
    new_a.setAttribute('id', a + b);


    f.appendChild(new_a_p);
    f.appendChild(new_a);
}

function remove_item(evt, b) {

    console.log(evt);

    var i = evt.id;
    var k = i.slice(7);

    console.log(k);

    var last_tag_p = document.getElementById(k + '# ' + b + 'p');
    var last_tag = document.getElementById(k + b);
    last_tag_p.remove();
    last_tag.remove();
}

function create_parameter(a, b) {
    var y = a + ": [";
    for (i = 0; i <= b; i++) {
        var input_a = document.getElementById(a + i);

        if (i == b) {
            y = y + "'" + input_a.value + "'"
        } else {
            y = y + "'" + input_a.value + "', "
        }
    }
    y = y + "],\n";

    return y
}


function formatdate(n) {
    const monthNames = ["January", "Febuary", "March", "April", "May", "June",
        "Jully", "August", "September", "October", "November", "December"
    ];
    const dateObj = new Date(n);
    const month = monthNames[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const output = month + ' ' + day + ', ' + year + ' ' + '00:00:00';

    return output;
}

//main();

/*

var projs_new = [

    {
        xtitle_home: 'Teste Item2',
        xtitle_full: '',
        xsubtitle: '',
        xauthor: 'Raquel Espadinha',
        xtype: 'Comentário',
        xdate: 'April 5, 2021 00:00:00',
        xtags: ['kkk', 'oi'],
        xthumbnail: 'favicon.png',
        text: '',
        xnotes:[],
        xcollaboration: [],
        ximages: [],
        xmisc: ['<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/987522493&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/iamzxzx" title="zxzx" target="_blank" style="color: #cccccc; text-decoration: none;">zxzx</a> · <a href="https://soundcloud.com/iamzxzx/give-me-some-space-to-dance-vol-3" title="give me some space to dance vol 3" target="_blank" style="color: #cccccc; text-decoration: none;">give me some space to dance vol 3</a></div>']
    }
]

https://codepen.io/damiengbh/pen/GRpzwRQ

*/