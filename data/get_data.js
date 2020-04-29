function tampilkanSemuaMenu() {

    $.getJSON('data/pizza.json', function (data) {
        let menu = data.menu;
        let content = '';
        // if($('.sort').on('click') == true){
        // menu.sort(function(a, b){
        //         return sortalphabet(a.nama, b.nama);
        //         return a.harga - b.harga;
        // });

        // }
        $.each(menu, function (i, data) {
            content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="img/makanan/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title"> ' + data.harga + 'K</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div></div>'
            // $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="img/makanan/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">'+ data.harga +'K</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div></div>');
        })

        $('#daftar-menu').html(content);
    });
}

tampilkanSemuaMenu();

$('.nav-item').on('click', function () {
    $('.nav-item').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    $('h1').html(kategori);

    if (kategori == 'All Menu') {
        tampilkanSemuaMenu();
        return;
    }

    $.getJSON('data/pizza.json', function (data) {
        let menu = data.menu;
        let content = '';
        // menu.sort(function(a, b){
        //     return sortalphabet(a.nama, b.nama);
        //     return a.harga - b.harga;
        // });
        // menu.sort(function (a, b) {
        //     return sortalphabet(a.nama, b.nama);
        // });
        menu.sort(function (a, b) {
            return sortalphabet(a.nama, b.nama);
        });
        $.each(menu, function (i, data) {
            if (data.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-6"><div class="card mb-2"><div class="card"><img src="img/makanan/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title"> ' + data.harga + 'K</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div></div>'
            }
        });

        $('#daftar-menu').html(content);
    });

});

$('#sortaz').on('click', function () {

    let kategori = $(this).html();
    $('button').html('SORT A-Z');

    // if (kategori == 'All Menu') {
    //     tampilkanSemuaMenu();
    //     return;
    // }

    $.getJSON('data/pizza.json', function (data) {
        let menu = data.menu;
        let content = '';
        menu.sort(function (a, b) {
            return sortalphabet(a.nama, b.nama);
            // return a.harga - b.harga;
        });

        $.each(menu, function (i, data) {
            if (data.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="img/makanan/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title"> ' + data.harga + 'K</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div></div>'
            } else {
                content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="img/makanan/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title"> ' + data.harga + 'K</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div></div>'
            }
        });
        $('#daftar-menu').html(content);
    });

});

$('#sortza').on('click', function () {

    let kategori = $(this).html();
    // $('h1').html(kategori);
    $('button').html('SORT Z-A');

    // if (kategori == 'All Menu') {
    //     tampilkanSemuaMenu();
    //     return;
    // }

    $.getJSON('data/pizza.json', function (data) {
        let menu = data.menu;
        let content = '';
        menu.sort(function (a, b) {
            return sortalphabetmundur(b.nama, a.nama);
            // return b.harga - a.harga;
        });

        $.each(menu, function (i, data) {
            if (data.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="img/makanan/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title"> ' + data.harga + 'K</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div></div>'
            } else {
                content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="img/makanan/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title"> ' + data.harga + 'K</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div></div>'
            }
        });
        $('#daftar-menu').html(content);
    });

});

$('#sorttinggi').on('click', function () {

    let kategori = $(this).html();
    $('button').html('HARGA TINGGI KE RENDAH');
    // $('h1').html(kategori);

    // if (kategori == 'All Menu') {
    //     tampilkanSemuaMenu();
    //     return;
    // }

    $.getJSON('data/pizza.json', function (data) {
        let menu = data.menu;
        let content = '';
        // menu.sort(function(a, b){
        //     return sortharga(a.harga, b.harga);
        //     return a.harga - b.harga;
        // });
        menu.sort(function (a, b) {
            return b.harga - a.harga
        });

        $.each(menu, function (i, data) {
            if (data.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="img/makanan/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title"> ' + data.harga + 'K</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div></div>'
            } else {
                content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="img/makanan/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title"> ' + data.harga + 'K</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div></div>'
            }
        });
        $('#daftar-menu').html(content);
    });

});

$('#sortrendah').on('click', function () {

    let kategori = $(this).html();
    $('button').html('HARGA RENDAH KE TINGGI');
    // $('h1').html(kategori);

    // if (kategori == 'All Menu') {
    //     tampilkanSemuaMenu();
    //     return;
    // }

    $.getJSON('data/pizza.json', function (data) {
        let menu = data.menu;
        let content = '';
        // menu.sort(function(a, b){
        //     return sortharga(a.harga, b.harga);
        //     return a.harga - b.harga;
        // });
        menu.sort(function (a, b) {
            return a.harga - b.harga
        });

        $.each(menu, function (i, data) {
            if (data.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="img/makanan/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title"> ' + data.harga + 'K</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div></div>'
            } else {
                content += '<div class="col-md-4"><div class="card mb-3"><div class="card"><img src="img/makanan/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title"> ' + data.harga + 'K</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div></div>'
            }
        });
        $('#daftar-menu').html(content);
    });

});



function sortalphabet(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();

    return (a < b) ? -1 : (a > b) ? 1 : 0;
}

function sortalphabetmundur(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();

    return (a > b) ? 1 : (a < b) ? -1 : 0;
}

function sortharga(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();

    return (a < b) ? -1 : (a > b) ? 1 : 0;
}