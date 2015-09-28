describe('Thermostat', function() {

    var thermostat;

    describe('Thermostat sets normal temperature to 20', function(){

        thermostat = new Thermostat();
        it('sets temp to 20 degrees', function() {
        expect(thermostat.temp).toEqual(20)
        });


    });


});





