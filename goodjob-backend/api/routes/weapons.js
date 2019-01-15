const express = require('express');

const router = express.Router();

router.get('/', (req, res, err) => {
    res.status(200).json({
        message: 'Wellcome to the weapons store ...'
    });
});


router.post('/', (req, res, err) => {

    const weapon = {
        name: req.body.name,
        image: req.body.image,
        type: req.body.type,
        describe: req.body.describe
    };

    res.status(201).json({
        message: 'Your new weapon is ready ...',
        newWeapon: weapon
    });
});

router.get('/:weaponId', (req, res, err) => {
    const id = req.params.heroId;
    if (id === 'special') {
        res.status(200).json({
            message: 'Your weapon here dude ...',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'No weapon you need for, just take around again ..'
        });
    }
});

router.patch('/:weaponId', (req, res, err) => {
    res.status(200).json({
        message: 'You have remaked a new weapon, congrate ...'
    });
});

router.delete('/:weaponId', (req, res, err) => {
    res.status(200).json({
        message: 'This weapon is so useless, right ...'
    });
});

module.exports = router;