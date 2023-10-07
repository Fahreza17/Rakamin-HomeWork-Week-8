const express = require('express')
const app = express()
const pool = require('./queries.js')

app.get('/films', (req, res) => {
    pool.query('SELECT * FROM film', (err, result) => {
        if (err) {
            throw err
        }
        res.send(result.rows)
    })
})

app.get('/films/:film_id', (req, res) => {
    const id = parseInt(req.params.film_id);
    pool.query('SELECT * FROM film WHERE film_id = $1', [id], (err, result) => {
        if (err) {
            throw err
        }
        res.send(result.rows)
    });
});

app.get('/category', (req, res) => {
    pool.query('SELECT * FROM category', (err, result) => {
        if (err) {
            throw err
        }
        res.send(result.rows)
    })
})

app.get('/films/category/:category_id', (req, res) => {
    const id = parseInt(req.params.category_id)
    pool.query('SELECT film.title, category.name FROM film JOIN film_category ON film.film_id = film_category.film_id JOIN category ON film_category.category_id = category.category_id WHERE category.category_id = $1;', [id], (err, result) => {
        if (err) {
            throw err
        }
        res.send(j)
    })
})



pool.connect((err, res) => {
    console.log(err)
    console.log("Connected")
})




app.listen(3000)