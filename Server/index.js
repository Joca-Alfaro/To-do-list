const express = require('express');
const router = express();
const morgan = require('morgan');

router.use(morgan('dev'))
const cors = require('cors')
const Routes = require("./routes/index")


router.use(cors())
router.use('/', Routes)


router.listen(4000, function () {
  console.log('listening on port 4000');
})


module.exports = router;