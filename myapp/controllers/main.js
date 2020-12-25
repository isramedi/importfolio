

exports.projects = function (req, res, next) {
    res.render('main/projects', {title: 'My Projects'});
}
exports.about = function(req, res, next) {
  res.render('main/about', { title: 'About Me' });
}
exports.contact = function(req, res, next) {
  res.render('main/contact', { title: 'Contact Me' });
}
