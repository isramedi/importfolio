

exports.projects = function (req, res, next) {
    res.render('main/projects', {title: 'My Projects'});
}
exports.about = function(req, res, next) {
  res.render('main/about', { title: 'About Me' });
}
exports.contact = function(req, res, next) {
  res.render('main/contact', { title: 'Contact Me' });
}
exports.contact_submit = function(req, res, next) {
  //res.render('main/contact', { title: 'Contact Me' });
  // get data from fields in page
  // send email (redirect to seperate script)
  // success page/message
  res.redirect('/contact', next);
}
