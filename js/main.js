$(document).ready(function() {

	$(".js-form").submit(function() {
        $.ajax({
            type: "POST",
            url: "action.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $(".js-form").trigger("reset");
        });
        return false;
    });

    $("#form-ct").submit(function() {
        $.ajax({
            type: "POST",
            url: "action.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#form-ct").trigger("reset");
        });
        return false;
    });

    $("#top-form").submit(function() {
        $.ajax({
            type: "POST",
            url: "action.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#top-form").trigger("reset");
        });
        return false;
    });

    $("#header_form").submit(function() {
        $.ajax({
            type: "POST",
            url: "action.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#header_form").trigger("reset");
        });
        return false;
    });

    $("#zamer_form").submit(function() {
        $.ajax({
            type: "POST",
            url: "action.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#zamer_form").trigger("reset");
        });
        return false;
    });

	$('#autoWidth').lightSlider({
		autoWidth:true,
		loop:false,
		pager:false,
		controls: false,
		enableTouch: false,
		enableDrag: false,
		// prevHtml:'<',
		// nextHtml:'>',
		onSliderLoad: function() {
			$('#autoWidth').removeClass('cS-hidden');
		}
	});

	$('#autoWidth1').lightSlider({
		autoWidth:true,
		loop:false,
		pager:false,
		prevHtml:'<',
		nextHtml:'>',
		onSliderLoad: function() {
			$('#autoWidth').removeClass('cS-hidden');
		}
	});

	$('.js-input-number').on('change keyup input', function(e) {
		if (this.value.match(/[^0-9]/g)) {
			this.value = this.value.replace(/[^0-9]/g, '');
		}
	});

	function calc_select_init() {
		var pvh = [
			[390, 'MSD Evolution (Китай) белый матовый'],
			[550, 'Pongs (Германия) белый матовый'],
		],
		cloth = [
			[650, 'Descor (Германия) белый тканевый'],
			[1100, 'Clipso (Франция) белый тканевый'],
		],
		select = $('#js-calc-select');

		select.empty();

		if($('#js-calc-pvh').prop('checked') == true) {
			$.each(pvh, function(){
				select.append('<option value="'+this[0]+'">'+this[1]+'</option>');
			});
		}
		if($('#js-calc-cloth').prop('checked') == true) {
			$.each(cloth, function(){
				select.append('<option value="'+this[0]+'">'+this[1]+'</option>');
			});
		}

		if($('#js-calc-pvh').prop('checked') == false && $('#js-calc-cloth').prop('checked') == false) {
			select.append('<option value="0">Выберите тип материала</option>');
		};

		calc_init();

	}
	calc_select_init();

	function calc_init() {
		var width = parseInt($('#js-calc-width').val()),
		length = parseInt($('#js-calc-length').val()),
		select = parseInt($('#js-calc-select').val());

		if(!width || width == '') {
			width = 0;
		}
		if(!length || length == '') {
			length = 0;
		}

		area = width*length;
		summ = area*select;

		$('#js-calc-area').val(area);
		$('#js-calc-total').text(summ.toLocaleString().replace(/\D\d\d$/, '').replace(/\s/ig, ' '));

		input = 'Ширина - ' + width + ' м. Длина - ' + length + ' м. Площадь - ' + area + ' м. Тип материала - ' + $('#js-calc-select option:selected').text() + '  Итого - ' + summ.toLocaleString() + ' руб.';

		$('#calc-form-input').val(input);
	}

	$('#js-calc-width, #js-calc-length').on('change keyup input', function(e) {
		if(parseInt(this.value) > 100) {
			this.value = 99
		}
		calc_init();
	});
	$('#js-calc-select').on('change', function(e) {
		calc_init();
	});

	$('#js-calc-pvh, #js-calc-cloth').on('change', function(e) {
		calc_select_init();
	});

});

// custom gri 

$(function () {
    $(document).ready(function() {
       
	
	$('.header-slider').lightSlider({
		item:1,
		auto:true,
		pauseOnHover: true,
        slideMargin:0,
        loop:true,
		adaptiveHeight: true,	
		prevHtml:'<',
		nextHtml:'>',
	});
	    
	     $(".fb").fancybox();
	});
});
