const fs = require('fs');


exports.index = function(req, res, next) {
  res.render('index', { title: 'Israel\'s Portfolio' });
}


exports.resume = function(req, res, next) {
  var tempFile="/var/www/importfolio/myapp/views/documents/medina_csci_Resume_Form4_temp.pdf";
  fs.readFile(tempFile, function(err, data) {
    res.contentType("application/pdf");
    res.send(data);
  });
}

