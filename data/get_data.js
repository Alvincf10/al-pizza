function tampilkanSemuaMenu() {
    $.getJSON('data/pizza.json', function (data) {
        let menu = data.menu;
        menu.sort(function (a, b) {
            return sortAlphabet(a.nama, b.nama);
            return a.harga - b.harga;
        });
        $.each(menu, function (i, data) {
            $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"> <img src="img/makanan/' + data.gambar + '" class="card-img-top"><div class="card-body"> <h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">RP. ' + data.harga + '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a> </div> </div></div >')
        });
    });
}

tampilkanSemuaMenu();


$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    $('h1').html(kategori);

    if (kategori == 'All Menu') {
        $('#daftar-menu').html('');
        tampilkanSemuaMenu();
        return;
    }


    $.getJSON('data/pizza.json', function (data) {
        let menu = data.menu;
        let content = '';
        menu.sort(function (a, b) {
            return sortAlphabet(a.nama, b.nama);
            return a.harga - b.harga;
        });
        $.each(menu, function (i, data2) {
            if (data2.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class="card mb-3"> <img src="img/makanan/' + data2.gambar + '" class="card-img-top"><div class="card-body"> <h5 class="card-title">' + data2.nama + '</h5><p class="card-text">' + data2.deskripsi + '</p><h5 class="card-title">' + data2.harga + '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a> </div> </div></div >'
            }
        });
        $('#daftar-menu').html(content);
    });
});

function sortAlphabet(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();

    return (a < b) ? -1 : (a > b) ? 1 : 0;
}