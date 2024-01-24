$(document).ready(function () {
    $('.carousel1').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        dots: true,

    });
})


$('.owlcresiol2').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

function cart_items(thi, val) {
    let quantity = $(thi).parents('tr').find('#quantity').val();
    quantity = parseInt(quantity) + val;

    if (quantity >= 0) {
        $(thi).parents('tr').find('#quantity').val(quantity);

        let price = $(thi).parents('tr').find(".price span").html();
        price = parseInt(price);
        // console.log(price);
        $(thi).parents('tr').find(".total span").html(quantity * price);

        let single_total = $(thi).parents('tbody').find('tr .total span');
        let subtotal=0;
        for (let i = 0; i < single_total.length; i++) {
             subtotal += parseInt(single_total[i].innerHTML);
            
        }
        $('.subtotal span').html(subtotal);
        let rate_shipping= $('input[name="rate"]:checked').val();
        rate_shipping=parseInt(rate_shipping);-+------------------------
        $('.alltotal span').html(subtotal + rate_shipping);
        
    }
}