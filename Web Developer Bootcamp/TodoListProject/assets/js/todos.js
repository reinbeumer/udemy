var theList = [];
$(document).ready(function() {
	theList = localStorage.getItem('theList').split(',');
	if (theList.length > 0) {
		theList.forEach((item) => {
			if (item != '') {
				$('ul').append(
					'<li><span><i class="fa fa-trash"></i></span> ' +
						item +
						'</li>'
				);
			}
		});
	}
});
// Check Off Specific Todos By Clicking
$('ul').on('click', 'li', function() {
	$(this).toggleClass('completed');
});

//Click on X to delete Todo
$('ul').on('click', 'span', function(event) {
	$(this)
		.parent()
		.fadeOut(500, function() {
			$(this).remove();
			theList.splice(theList.indexOf(this.innerText.trim()), 1);
		});
	event.stopPropagation();
});

$('input[type="text"]').keypress(function(event) {
	if (event.which === 13 && $(this).val() !== '') {
		//grabbing new todo text from input
		var todoText = $(this).val();
		theList.push(todoText);
		$(this).val('');
		//create a new li and add to ul
		$('ul').append(
			'<li><span><i class="fa fa-trash"></i></span> ' + todoText + '</li>'
		);
	}
});

$('h1 > i').click(function() {
	$('input[type="text"]').fadeToggle(function() {
		$('h1 > i').toggleClass('fa fa-plus fa fa-minus');
	});
});

$(window).on('unload', function() {
	localStorage.setItem('theList', theList);
});
