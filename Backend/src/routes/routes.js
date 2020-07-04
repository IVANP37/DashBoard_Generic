'use strict'
const { Router } = require('express');
const router = new Router();
const log = require('simple-node-logger').createSimpleLogger('src/Api.log');
const { spawn } = require('child_process');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const { getToken } = require("../controllers/createToken");


function ensureTokens(req, res, next) {
    const bearerHeadear = req.headers['authorization'];
    console.log(bearerHeadear);
    log.info('Authorization :' + ' ' + bearerHeadear);
    if (typeof bearerHeadear !== 'undefined') {
        const bearer = bearerHeadear.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

const storage = multer.diskStorage({
    destination: path.join(__dirname, process.env.IMG_DOWNLOAD),
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})
const uploadImage = multer({
    storage
}).single('image');


function pythonScript() {
    var uint8arrayToString = function (data) {
        return String.fromCharCode.apply(null, data);
    };
    log.info(data);
    let command = process.env.SCRIPT_PYTHON_URI + " -c " + process.env.IMG_DOWNLOAD + " -p " + process.env.REFERENCE_FOLDERS;
    log.info(command);
    const picture = spawn(command, [], { shell: true })  // use `shell` option  
    log.info(picture);
    picture.stdout.on('data', function (data) {
        log.info('Channeling data from the Python script ...', new Date().toJSON());
        log.info("DATA: " + data)
    })
    console.log(res.status(200).send(data));
    res.status(200).send(data);
    picture.stderr.on('data', (data) => {
        log.info("Error:", uint8arrayToString(data));
    });
    picture.on('exit', (code) => {
        console.log("Process quit with code : " + code);
    });
}

function callPaython(req, res) {
    uploadImage(req, res, (err) => {
        if (err) {
            err.message = 'The file is so heavy for my service';
            return res.send(err);
        }
        log.info(req.file);
        console.log(req.file);

    })
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    sleep(8000).then(() => {
        console.log("Python scripts!");
        // Function to convert an Uint8Array to a string
        var uint8arrayToString = function (data) {
            return String.fromCharCode.apply(null, data);
        };
        // invocando los script de python 
        var dataToSend;
        let command = process.env.SCRIPT_PYTHON_URI + " -c " + process.env.IMG_DOWNLOAD + " -p " + process.env.REFERENCE_FOLDERS;
        log.info(command);
        const picture = spawn(command, [], { shell: true })  // use `shell` option 
        picture.stdout.on('data', function (data) {
            log.info('Channeling data from the Python script ...', new Date().toJSON());
            log.info("DATA: " + data)
            dataToSend = data;
            log.info("DATA: " + dataToSend);
            res.send(dataToSend);
        })
     
        picture.stderr.on('data', (data) => {
            log.info("Error:", uint8arrayToString(data));
        });
        picture.on('exit', (code) => {
            console.log("Process quit with code : " + code);
        });
    })
    .catch(console.log(err))


}

router.post('/', ensureTokens, async (req, res) => {
    jwt.verify(req.token, process.env.SECRET_KEY, (err) => {//verifico el token que viene
        if (err) {
            res.sendStatus(403).json({ error: 'Authentication failed' });;
        } else {
            //  callScript(req, res)
        }

    });
});

router.post('/signin', getToken);

router.post('/test', callPaython);

module.exports = router;

