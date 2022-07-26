const { Router } = require('express');
const UserDao = require('../dao/user.dao');
const police = require('../middlewares/police.middleware');

module.exports = () => {
    const api = new Router();

    api.get('/', police.auth(['guest', 'admin']), (req, res) => {
        try {
            const users = UserDao.getAllUsers();
            const end = process.hrtime(req.start);
            const time = end[0] * 1000 + end[1] / 1000000
            res.status(200).json({ users, timing: time })
        } catch (err) {
            const end = process.hrtime(req.start);
            const time = end[0] * 1000 + end[1] / 1000000
            res.status(500).json({ err, timing: time });
        }
    });

    api.get('/:id', police.auth(['guest', 'admin']), (req, res) => {
        try {
            let { id } = req.params;
            id = parseInt(id);
            const user = UserDao.getSingleUser(id);
            const end = process.hrtime(req.start);
            const time = end[0] * 1000 + end[1] / 1000000
            res.status(200).json({ user, timing: time })
        } catch (err) {
            const end = process.hrtime(req.start);
            const time = end[0] * 1000 + end[1] / 1000000
            res.status(500).json({ err, timing: time });
        }
    });

    api.post('/', police.auth(['admin']), (req, res) => {
        try {
            const newUser = UserDao.createUser(req.body);
            const end = process.hrtime(req.start);
            const time = end[0] * 1000 + end[1] / 1000000
            res.status(200).json({ user: newUser, timing: time })
        } catch (err) {
            const end = process.hrtime(req.start);
            const time = end[0] * 1000 + end[1] / 1000000
            res.status(500).json({ err, timing: time });
        }
    });

    api.put('/:id', police.auth(['admin']), (req, res) => {
        try {
            let { id } = req.params;
            id = parseInt(id);
            const user = UserDao.updateUser(id, req.body);
            const end = process.hrtime(req.start);
            const time = end[0] * 1000 + end[1] / 1000000
            res.status(200).json({ user, timing: time })
        } catch (err) {
            const end = process.hrtime(req.start);
            const time = end[0] * 1000 + end[1] / 1000000
            res.status(500).json({ err, timing: time });
        }
    });

    api.delete('/:id', police.auth(['admin']), (req, res) => {
        try {
            let { id } = req.params;
            id = parseInt(id);
            const msg = UserDao.deleteUser(id)
            const end = process.hrtime(req.start);
            const time = end[0] * 1000 + end[1] / 1000000
            res.status(200).json({ msg, timing: time })
        } catch (err) {
            const end = process.hrtime(req.start);
            const time = end[0] * 1000 + end[1] / 1000000
            res.status(500).json({ err, timing: time });
        }
    });

    return api;
}