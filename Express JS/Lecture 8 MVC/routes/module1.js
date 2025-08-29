const exp = require('express');
const router = exp.Router();
const aajaBhai = require('../controller/home');

router.post('/submitForm', aajaBhai.showForm);
router.get('/', aajaBhai.getForm)

module.exports = router;