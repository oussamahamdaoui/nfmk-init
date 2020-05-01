const GlobalEvents = require('./GlobalEvents');
const { Router } = require('@forgjs/noframework');
const HelloPage = require('./HelloPage');

const router = new Router(GlobalEvents, '/hello');
router.set('/hello', HelloPage());

module.exports = router;