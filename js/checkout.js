// load header when have id header
$("#header").load("../assets/share/headernav.html");
// load header when have id footer
$("#footer").load("../assets/share/footer.html");

let storageList = JSON.parse(window.localStorage.getItem('items'));
let str = "";
let total = 0;
if (storageList.length == 0) {
  str += '<tr><td>Giỏ hàng bạn chưa có gì</td></tr>';
}
else {
  for (var i = 0, len = storageList.length; i < len; i++) {
    let gia = parseInt(storageList[i].price);
    let totalEach = gia * (storageList[i].no);
    total += totalEach;
    console.log(total)
    str += '<li class="listProduct list-group-item d-flex justify-content-between lh-condensed">'
    str += ' <div>'
    str += '     <h6 class="my-0">' + storageList[i].name + '</h6>'
    str += '     <small class="text-muted"></small>'
    str += ' </div>'
    str += ' <span class="text-muted">' + totalEach + '</span> '
    str += ' </li> '

  }
  total = total.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + 'đ';
  str += '<li class="list-group-item d-flex justify-content-between bg-light">'
  str += '   <div class="text-success">'
  str += '      <h6 class="my-0">Mã giảm giá</h6>'
  str += '     <small>'+localStorage.getItem('coupon')+'</small>'
  str += ' </div>'
  str += ' <span class="text-success">- 0đ</span>'
  str += '  </li>'
  str += ' <li class="list-group-item d-flex justify-content-between">'
  str += ' <span>Total (VND)</span>'
  str += ' <strong id="tongtien">' + total + '</strong>'
  str += ' </li>'
}


$('.listProduct').html(str);



(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()