const router = require("express").Router();

router.get('/', (req, res) => {
    res.send('Home')
})

router.post('/login', (req, res) => {
    const {login, password} = req.body
    
    if(login === 'admin' && password === 1234) res.send('You are logged!')
    else res.status(401).send('Invalid login or password!')
})

module.exports = router;