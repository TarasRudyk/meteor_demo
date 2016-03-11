Template.Images.helpers({
	hello: 'Hi there!',
	images: function (limit) {
		var array =[];
		for (i = 0; i < limit; i++){
			array.push({
				_id: i + 1,
				src: 'http://lorempixel.com/' + _.random(150, 300) + '/' + _.random(150, 300),
				title: 'Lorem Ipsum#' + (i + 1)
		});
		};

		return array;
	}
})