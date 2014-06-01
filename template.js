exports.description = 'Create a blank Wintersmith article.';

exports.template = function(grunt, init, done) {
	init.process({}, [
		{
			name: 'title',
			message: 'What is the article title?',
		},
		{
			name: 'slug',
			message: 'What is the slug of the article?',
		},
		{
			name: 'author_name',
			message: 'Who is the author of the article?',
		},
	], function(err, props) {
		var files = init.filesToCopy(props);
		props.date = require('moment')().format('YYYY-MM-DD HH:mm');
		init.copyAndProcess(files, props);

		done();
	});
};
