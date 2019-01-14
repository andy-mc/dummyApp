exports.helloWorld = (req, res) => {
    res.render('hello', {title: 'hello'});
}