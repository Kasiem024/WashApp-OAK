'use strict';

exports.index = (req, res) => {
    res.sendfile('public/html/login.html');
};