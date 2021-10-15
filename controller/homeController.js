'use strict';

exports.index = (req, res) => {
    res.sendfile('public/html/login.html');
};

exports.home = (req, res) => {
    res.sendfile('public/html/index.html');
}
exports.boka = (req, res) => {
    res.sendfile('public/html/boka.html');
}
exports.errorreport = (req, res) => {
    res.sendfile('public/html/errorreport.html');
}
exports.create = (req, res) => {
    res.sendfile('public/html/create.html');
}
exports.newPassword = (req, res) => {
    res.sendfile('public/html/password.html');
}
exports.kem = (req, res) => {
        res.sendfile('public/html/kem.html');
    }
    // exports.create = (req, res) => {
    //     res.sendfile('public/html/create.html');
    // }