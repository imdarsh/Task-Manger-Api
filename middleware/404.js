const notfound = (req,res) => {
    res.status(404).send('404 Not Found');
}

module.exports = notfound;