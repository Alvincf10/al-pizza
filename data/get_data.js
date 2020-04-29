// function tampilkanSemuaMenu() {
//     $.getJSON('data/pizza.json', function (data) {
//         let menu = data.menu;
//         let content = '';
//         $.each(menu, function (i, data) {
//             content += '<div class="col-md-4"><div class="card mb-3"> <img src="img/makanan/' + data.gambar + '" class="card-img-top"><div class="card-body"> <h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">RP. ' + data.harga + '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a> </div> </div></div >'
//         });
//         $('#daftar-menu').html(content);
//     });
// }

// function Sortmenu(command = "asc") {
//     return function MenuSort(a, b) {
//         var namaA = a.nama.toLowerCase();
//         var namaB = b.nama.toLowerCase();
//         var compare = 0;
//         if (namaA > namaB) {
//             compare = 1;
//         } else if (namaA < namaB) {
//             compare = -1;
//         }
//         return (command == "desc" ? compare * -1 : compare);
//     }
// }

// function Sortprice(command = "asc") {
//     return function PriceSort(a, b) {
//         var hargaA = a.price;
//         var hargaB = b.price;
//         var compare = 0;
//         if (hargaA > hargaB) {
//             compare = 1;
//         } else if (hargaA < hargaB) {
//             compare = -1;
//         }
//         return (command == "desc" ? compare * -1 : compare);
//     }
// }
// var menus = [];

// $.getJSON('data/pizza.json', function (results) {
//     var menu = results.menu;
//     $.each(menu, function (i, data) {
//         menus.push(data);
//     });
// });

// tampilkanSemuaMenu();


// $('.nav-item').on('click', function () {
//     $('.nav-item').removeClass('active');
//     $(this).addClass("active");
//     $('button').text("Select to sort the content ");
//     $('.dropdown-item').removeClass('active');
//     var kategori = $.trim($(this).text());
//     $('h1').html(kategori);
//     if (kategori == "All Menu") {
//         tampilkanSemuaMenu();
//     }


//     $.getJSON('data/pizza.json', function (data2) {
//         let menu = data2.menu;
//         let content = '';
//         $.each(menu, function (i, data2) {
//             if (data2.kategori == kategori.toLowerCase()) {
//                 content += '<div class="col-md-4"><div class="card mb-3"> <img src="img/makanan/' + data2.gambar + '" class="card-img-top"><div class="card-body"> <h5 class="card-title">' + data2.nama + '</h5><p class="card-text">' + data2.deskripsi + '</p><h5 class="card-title">' + data2.harga + '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a> </div> </div></div >'
//             }
//         });
//         $('#daftar-menu').html(content);
//     });
// });

// $('.dropdown-menu a').on('click', function () {
//     var tempmenu = [];
//     var content = "";
//     $('button').text($(this).text());
//     $('.dropdown-item').removeClass('active');
//     $(this).addClass('active');
//     var kategori = $("h1").text();
//     for (var i = 0; i < menus.length; i++) {
//         if (menus[i].kategori == kategori) {
//             tempmenu.push(menus[i]);
//         } else if (kategori == "All Menu") {
//             tempmenu.push(menus[i]);
//         }
//     }
//     var sort = $(this).text().toLowerCase();
//     if (sort == "nama a-z") {
//         tempmenu = tempmenu.sort(Sortmenu("asc"));
//         $.each(tempmenu, function (z, tempmenus) {
//             content += '<div class="col-md-4 mb-4"><div class="card"><img src="img/makanan/' + tempmenus.gambar + '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + tempmenus.nama + '</h5><p class="card-text">' + tempmenus.deskripsi + '</p><h5 class="card-title">Rp. ' + tempmenus.harga + '</h5><a href="#" class="btn btn-primary">Order Now !</a></div></div></div>';
//         })
//     } else if (sort == "nama z-a") {
//         tempmenu = tempmenu.sort(Sortmenu("desc"));
//         $.each(tempmenu, function (z, tempmenus) {
//             content += '<div class="col-md-4 mb-4"><div class="card"><img src="img/makanan/' + tempmenus.gambar + '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + tempmenus.nama + '</h5><p class="card-text">' + tempmenus.deskripsi + '</p><h5 class="card-title">Rp. ' + tempmenus.harga + '</h5><a href="#" class="btn btn-primary">Order Now !</a></div></div></div>';
//         })
//     } else if (sort == "harga termurah") {
//         tempmenu = tempmenu.sort(Sortprice('asc'));
//         $.each(tempmenu, function (z, tempmenus) {
//             content += '<div class="col-md-4 mb-4"><div class="card"><img src="img/makanan/' + tempmenus.gambar + '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + tempmenus.nama + '</h5><p class="card-text">' + tempmenus.deskripsi + '</p><h5 class="card-title">Rp. ' + tempmenus.harga + '</h5><a href="#" class="btn btn-primary">Order Now !</a></div></div></div>';
//         })
//     } else if (sort == "harga termahal") {
//         tempmenu = tempmenu.sort(Sortprice("desc"));
//         $.each(tempmenu, function (z, tempmenus) {
//             content += '<div class="col-md-4 mb-4"><div class="card"><img src="img/makanan/' + tempmenus.gambar + '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + tempmenus.nama + '</h5><p class="card-text">' + tempmenus.deskripsi + '</p><h5 class="card-title">Rp. ' + tempmenus.harga + '</h5><a href="#" class="btn btn-primary">Order Now !</a></div></div></div>';
//         })
//     }
//     $('#daftar-menu').html(content);
// });



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