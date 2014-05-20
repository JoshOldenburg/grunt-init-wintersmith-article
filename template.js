exports.description = 'Create a blank Wintersmith article.';

exports.template = function(grunt, init, done) {
	init.process({}, [
		{
			name: 'title',
			message: 'What is the article title?',
			default: (new Date()).getFullYear(),
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
		init.copyAndProcess(files, props);

		done();
	});
};
