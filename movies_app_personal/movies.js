let moviesList = [];

$('form').on('submit', function (e) {
	e.preventDefault();
	const movie = $('input').eq(0).val();
	const rating = $('input').eq(1).val();
	if (ratingCheck(rating) && movieCheck(movie)) {
		addToList(movie, rating);
	} else {
		alert('Invalid input');
	}
});

const addToList = (movie, rating) => {
	const newRow = $('<tr>');
	newRow.append($(`<td>${movie}</td>`).addClass('mInput'));
	newRow.append($(`<td>${rating}</td>`).addClass('rInput'));
	newRow.append(`<td><button>Delete</button></td>`);
	$('tbody').append(newRow);
	$('input').val('');
	moviesList.push({ sortMovie: movie, sortRating: rating });
    $('#sortMovie').prop('checked', false);
    $('#sortRating').prop('checked', false);
};

$('table').on('click', 'button', function () {
	$(this).closest('tr').remove();
    let indextoRemove = moviesList.findIndex(
        movie => movie.sortMovie === $(this).closest('mInput').text()
    )
    moviesList.splice(indextoRemove, 1);
});

const ratingCheck = rating => {
	return rating >= 0 && rating <= 10;
};

const movieCheck = movie => {
	return movie.length >= 2;
};

$('input[type="checkbox"]').on('click', function (e) {
	if (e.target.id === 'sortMovie') {
		$('#sortRating').prop('checked', false);
	} else {
		$('#sortMovie').prop('checked', false);
	}
	let direction = $(e.target).prop('checked') ? 'down' : 'up';
	let keyToSortBy = $(e.target).attr('id');
	let sortedMovies = sortBy(moviesList, keyToSortBy, direction);

	$('tbody').empty();

    for (let movie of sortedMovies) {
        let newRow = $('<tr>');
        newRow.append($(`<td>${movie.sortMovie}</td>`).addClass('mInput'));
        newRow.append($(`<td>${movie.sortRating}</td>`).addClass('rInput'));
        newRow.append(`<td><button>Delete</button></td>`);
        $('tbody').append(newRow);
    }
});

const sortBy = (array, keyToSortBy, direction) => {
	return array.sort(function (a, b) {
		if (keyToSortBy === 'sortRating') {
			a[keyToSortBy] = +a[keyToSortBy];
			b[keyToSortBy] = +b[keyToSortBy];
		}
		if (a[keyToSortBy] > b[keyToSortBy]) {
			return direction === 'up' ? 1 : -1;
		} else if (b[keyToSortBy] > a[keyToSortBy]) {
			return direction === 'up' ? -1 : 1;
		}
		return 0;
	});
};
