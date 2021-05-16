const express = require('express')
const router = express.Router()
const postStatus = require('../../model/Poststatus')

//Post Status
router.post('/createStatus', (req, res) => {
    postStatus.create(req.body, (err, data) => {
        if (err) {
            return res.status(404).json({
                msg: "Create fail",
                success: false
            })
        } else {
            return res.status(200).json({
                msg: "Oke",
                success: true,
                listStatus: data
            })
        }
    })
})

//Get Status
router.get('/getCreateStatus', (req, res) => {
    postStatus.find((err, data) => {
        if (err) {
            return res.status(404).json({
                msg: "Notices is not found",
                success: false
            })
        } else {
            return res.json({
                listStatus: data
            })
        }
    }).sort([
        ["date", -1]
    ])
})

//Delete
router.delete('/deleteStatus/:id', (req, res) => {
    postStatus.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
            return res.status(404).json({
                msg: 'Can not remove',
                success: false
            })
        } else {
            return res.status(200).json({
                listStatus: data
            })
        }
    })
})

//Edit status post
router.get('/editStatus/:id', (req, res) => {
    postStatus.findById(req.params.id, (err, data) => {
        if (err) {
            return res.status(404).json({
                msg: 'ID is not found',
                success: false
            })
        } else {
            return res.status(200).json({
                listEditStatus: data
            })
        }
    })
})

router.post('/updateStatus/:id', (req, res) => {
    postStatus.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (err, data) => {
        if (err) {
            return res.status(404).json({
                msg: 'Can not update',
                success: false
            })
        } else {
            return res.status(200).json({
                listStatus: data,
                msg: 'Notices successfully update!',
                success: true
            })
        }
    })
})

module.exports = router