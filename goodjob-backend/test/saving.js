const assert = require('assert');
const HeroChar = require('../api/models/herochar');

// decribe tests
describe('Saving records', function () {

    it('Saves a record to the db', function(done) {
       const char = new HeroChar({
        name: 'Dr.Coyle',
        weight: 105,
        height: 101,
        age: 30,
        hobbies: 'None, only has time for ARMS',
        avatar: 'https://cdn.vox-cdn.com/thumbor/Hx3gFwvNyR9sYX0K93X7yoE1z5A=/0x113:1440x867/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/9915265/drcoyle.jpg'
       });

       char.save().then(() => {
            assert(!char.isNew);
            done();
       });
    });

});