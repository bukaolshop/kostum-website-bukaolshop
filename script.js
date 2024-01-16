
$('#button-plus').click(function(){
  let jumlah=$('#jumlah_produk').val();
  jumlah++;
  $('#jumlah_produk').val(jumlah);
});
$('#button-minus').click(function(){
  let jumlah=$('#jumlah_produk').val();
  if(jumlah>1){
    jumlah--;
  }
  $('#jumlah_produk').val(jumlah);
});

function activeClass(){
  return "active p-2 bg-secondary rounded ";
};

function htmlListProduk(object) {
  let list_produk= `<div class="col-md-2 col-6 mb-4">
  <a href="`+object.url_produk+`" class="text-decoration-none">
  <div class="card shadow-sm h-100 list_produk">
  <img src="`+object.url_gambar_barang+`" class="card-img-top" >
  <div class="card-body p-2"><p class="judul-produk">`+object.nama_barang+`</p>
  <p class="fw-bolder mb-1">`+formatRupiah(object.harga_barang)+`</p>`;
  if(object.harga_barang_asli>0){
    list_produk+=`<div class="mb-2"><span class="discount ">belum diset%</span>
    <del class="small">`+formatRupiah(object.harga_barang_asli)+`</del></div>`;
  }
  list_produk+=`</div></div></a></div>`;
  return list_produk;
}

/* Fungsi formatRupiah */
function formatRupiah(angka){

  var number_string = angka.toString().replace(/[^,\d]/g, '').toString(),
  split   		= number_string.split(','),
  sisa     		= split[0].length % 3,
  rupiah     		= split[0].substr(0, sisa),
  ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);

  // tambahkan titik jika yang di input sudah menjadi angka ribuan
  if(ribuan){
    separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
  return 'Rp' + rupiah;
}
