// load header when have id header
$("#header").load("../assets/share/headernav.html");
// load header when have id footer
$("#footer").load("../assets/share/footer.html");

$('#checkout').click(function (e) { 
    e.preventDefault();
    window.location.href = '../html/checkout.html'
});
$('#backShop').click(function (e) { 
    e.preventDefault();
    history.back();
});
