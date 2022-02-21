const express = require('express');
const router = express.Router();
const db = require('../server');
const inputCheck = require('../utils/inputCheck');

// Get all depts
router.get('/departments', (req, res) => {
    const sql = `SELECT * FROM departments`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// Get a dept 
router.get('/department/:dept_name', (req, res) => {
    const sql = `SELECT id FROM departments WHERE dept_name = ?`;
    const params = [req.params.dept_name];

    db.query(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// Post a Dept
router.post('/department', ({ body }, res) => {
    const errors = inputCheck(body, 'dept_name');
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }

    const sql = `INSERT INTO departments (dept_name)
    VALUES (?)`;
    const params = [body.dept_name];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: body
        });
    });
});

// export router
module.exports = router;