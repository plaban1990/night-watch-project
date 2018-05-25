'use strict';

module.exports = {
  url: 'http://www.globalsqa.com/angularJs-protractor/SimpleCalculator/',
  elements: {
    inputa: { 
      selector: '/html/body/div/table/tbody/tr[1]/td[2]/input',
      locateStrategy: 'xpath' 
    },
    inputb: { 
      selector: '/html/body/div/table/tbody/tr[2]/td[2]/input',
      locateStrategy: 'xpath'
       
    },
    dropdown: {
     selector: '/html/body/div/table/tbody/tr[3]/td[2]/select',
     locateStrategy: 'xpath'

    },
    text: {
      selector: '/html/body/div/b',
      locateStrategy: 'xpath'

    }

   } 
};