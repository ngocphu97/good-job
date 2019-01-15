const express = require('express');
const router = express.Router();

const HeroChar = require('../models/herochar');

router.get('/', (req, res, err) => {
    HeroChar.find()
        .exec()
        .then(doc => {
            if (doc) {
                res.status(200).json({
                    message: 'Your hero is summoned, ...',
                    hero: doc
                });
            } else {
                res.status(404).json({
                    message: 'No hero you want in here, go away ...'
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                message: 'Your hero not here, just go back to his village ...',
            });
        });
});

router.post('/', (req, res, err) => {

    const hero = new HeroChar({
        name: req.body.name,
        weight: req.body.weight,
        height: req.body.height,
        age: req.body.age,
        hobbies: req.body.hobbies,
        avatar: req.body.avatar
    });

    hero.save().then(result => {
        console.log(result);
    });

    res.status(201).json({
        message: 'Here, your new hero, ...',
        newHero: hero
    });
});

router.get('/:heroId', (req, res, err) => {

    const id = req.params.heroId;
    HeroChar.findById(id)
        .exec()
        .then(doc => {
            if (doc) {
                res.status(200).json({
                    message: 'Your hero is summoned, ...',
                    hero: doc
                });
            } else {
                res.status(404).json({
                    message: 'No hero you want in here, go away ...'
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                message: 'Your hero not here, just go back to his village ...',
            });
        });

});

router.patch('/:heroId', (req, res, err) => {
    const id = req.params.heroId;
    const updateOps = {
        name: req.body.name,
        weight: req.body.weight,
        height: req.body.height,
        age: req.body.age,
        hobbies: req.body.hobbies,
        avatar: req.body.avatar
    };

    HeroChar.update({_id: id}, {$set: updateOps})
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.delete('/:heroId', (req, res, err) => {

    const id = req.params.heroId;
    HeroChar.remove({
            _id: id
        })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).json({
                message: 'You will never can kill him, your are too weak ...',
            });
        });
});

module.exports = router;