const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const expressFileUpload = require('express-fileupload');
const app = express()
const port = process.env.SERVER_PORT || 3000

app.use(cors())
app.use(bodyParser.json());
app.use(expressFileUpload());

const router = express.Router();
router.use('/application', require('./application'));

app.use('/api', router);

app.listen(port, () => console.log(`Mock server is listening on port ${port}.`))
