const exp = require('express');
const router = exp.Router();
const control = require('../controller/mainBody');

router.get('/form', control.showForm);

router.post('/submitForm', control.showSubmission);

module.exports = router;