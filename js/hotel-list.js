$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
    $(document).on('click', `[data-toggle="popover"]`, function(event) {
        event.preventDefault();
    });

    // $(document).on('click', '.filter label', function() {
    //     $(this).toggleClass('checked');
    // });

    function changeView(clicked = false, content = null) {
        if ($(window).width() > 767){
            if (clicked) {
                $(`a[data-work="sort-view"]`).toggleClass(`list-active`);
                $(`#sort-view-content`).toggleClass(`list-view-active`);
                if (content === 'List View') {
                    var viewContent = 'Grid View';
                } else if (content === 'Grid View') {
                    var viewContent = 'List View';
                }
            } else {
                var viewContent = 'List View';
            }

            $(`a[data-work="sort-view"] span`).text(`${viewContent}`);
        }
    }

    changeView();
    
    $(document).on('click', `a[data-work="sort-view"]`, function(event) {
        event.preventDefault();
        changeView(true, $(this).children('span').text());
    });
    
    if ($(window).width() > 991) {
        $('.filter').css('max-height',`${$(window).height()-100}px`)
    }

    $(document).on('click',`a[data-work="close-filter"]`,function(event){
        event.preventDefault();
        $(`#filter-section`).toggleClass('filter-fixed-open');
    });

    $(document).on('click',`#close-space`,function(){
        $(`#filter-section`).toggleClass('filter-fixed-open');
    });

    $(document).on('click',`a[data-target="#filter-section"]`,function(event){
        event.preventDefault();
        $(`#filter-section`).toggleClass('filter-fixed-open');
    });

    function inputRange() {
        $('form .price span').text(`${$('#price').val()}`);
    }
    inputRange();

    $(document).on('input', '#price', inputRange);

    $(document).on('click', '.hotel-box .favorite i', function(event) {
        event.preventDefault();
        $(this).toggleClass('fas');
    });
});