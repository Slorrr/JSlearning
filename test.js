describe("pow", function() {

    describe("возводит x в степень 3", function() {

        function makeTest(x) {
          let expected = x * x * x;
          it(`${x} в степени 3 будет ${expected}`, function() {
            assert.equal(pow(x, 3), expected);
          });
        }
    
        for (let x = 1; x <= 5; x++) {
          makeTest(x);
        }
    
      });
    
      describe("возводит x в степень 5", function() {

        function makeTest(x) {
          let expected = x * x * x * x * x;
          it(`${x} в степени 5 будет ${expected}`, function() {
            assert.equal(pow(x, 5), expected);
          });
        }
    
        for (let x = 1; x <= 5; x++) {
          makeTest(x);
        }
    
      });
});

