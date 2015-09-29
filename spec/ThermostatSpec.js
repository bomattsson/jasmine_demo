describe('Thermostat', function() {

    var thermostat;

    describe('Thermostat sets normal temperature to 20', function(){

        therm = new Thermostat();

        it('sets temp to 20 degrees', function() {
            expect(therm.temp).toEqual(20)
        });

    });


});
