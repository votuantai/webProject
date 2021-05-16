const express = require('express')
const router = express.Router()
const Notification = require('../../model/Notification')

// Get notices
router.get('/getCreateNotices', (req, res) => {
    Notification.find((err, data) => {
        if (err) {
            return res.status(404).json({
                msg: "Notices is not found",
                success: false
            })
        } else {
            return res.json({
                Notices: data
            })
        }
    }).sort([
        ["date", -1]
    ])
})

//Post notices
router.post('/postCreateNotices', (req, res) => {
    Notification.create(req.body, (err, data) => {
        if (err) {
            return res.status(404).json({
                msg: "Notices is not found",
                success: false
            })
        } else {
            return res.status(200).json({
                msg: "OKe",
                success: true
            })
        }
    })
})

//Delete notices
router.delete('/deleteNotices/:id', (req, res) => {
    Notification.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
            return res.status(404).json({
                msg: 'Can not remove',
                success: false
            })
        } else {
            return res.status(200).json({
                Notices: data
            })
        }
    })
})

//Edit notices
router.get('/editNotices/:id', (req, res) => {
    Notification.findById(req.params.id, (err, data) => {
        if (err) {
            return res.status(404).json({
                msg: 'ID is not found',
                success: false
            })
        } else {
            return res.status(200).json({
                Notices: data
            })
        }
    })
})

router.post('/updateNotices/:id', (req, res) => {
    Notification.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (err, data) => {
        if (err) {
            return res.status(404).json({
                msg: 'Can not update',
                success: false
            })
        } else {
            return res.status(200).json({
                Notices: data,
                msg: 'Notices successfully update!',
                success: true
            })
        }
    })
})

module.exports = router