'use strict';


module.exports = {


before : function (client) {
    client.resizeWindow(1460, 900);
  },
  after : function(client) {
  console.log('Closing down...');
  client.end();
},


'TestCase for summation function of calculator': function (client) {
  var expectedResults ={

     "add postitive inputs" :[
     [55, 55, '55 + 55 = 110']
     ],
     "add negative input": [
     [-12, -12, '-12 + -12 = -24']
     ],
     "add postitive and negative input": [
      [12, -12, '12 + -12 = 0']
     ],
     "add two zero input": [
      [0, 0, '0 + 0 = 0']
     ]

  };
  
  for (var x in expectedResults){
      var values = expectedResults[x];
      for(var i = 0; i < values.length; i++) {
        var inputa = values[i][0];
          var inputb = values[i][1];
         var  text = values[i][2];
}

 var basic = client.page.calculator();
 basic.navigate()
 .assert.containsText('h1', 'AngularJS calculator')
 .waitForElementVisible('@inputa', 3000)
 .clearValue('@inputa')
 .waitForElementVisible('@inputa', 3000)
 .setValue('@inputa', inputa)
 .waitForElementPresent('@inputb', 4000)
 .clearValue('@inputb')
 .setValue('@inputb', inputb)
 .waitForElementVisible('@text', 3000)
 .setValue('@dropdown', '+')
 .waitForElementVisible('@text', 3000)
 .expect.element('@text').text.to.equal(text);
 
 
} 
 
},
'TestCase for subtraction function of calculator': function (client) {
  var expectedResults ={
     "subtract postitive inputs" :[
     [55, 55, '55 - 55 = 0']
     ],
     "subtract negative input": [
     [-12, -12, '-12 - -12 = 0']
     ],
     "subtract postitive and negative input": [
      [12, -12, '12 - -12 = 24']
     ],
     "subtract two zero input": [
      [0, 0, '0 - 0 = 0']

     ]

  };
  
  for (var x in expectedResults){
      var values = expectedResults[x];
      for(var i = 0; i < values.length; i++) {
        var inputa = values[i][0];
          var inputb = values[i][1];
         var  text = values[i][2];
}

 var basic = client.page.calculator();
 basic.navigate()
 .waitForElementVisible('@inputa', 3000)
 .clearValue('@inputa')
 .waitForElementVisible('@inputa', 3000)
 .setValue('@inputa', inputa)
 .waitForElementPresent('@inputb', 4000)
 .clearValue('@inputb')
 .setValue('@inputb', inputb)
 .waitForElementVisible('@text', 3000)
 .setValue('@dropdown', '-')
 .waitForElementVisible('@text', 3000)
 .expect.element('@text').text.to.equal(text);
 
 
} 
 
},

'TestCase for multiplication function of calculator': function (client) {
  var expectedResults ={

     "multiple postitive inputs" :[
     [55, 55, '55 * 55 = 3025']
     ],
     "multiple negative input": [
     [-12, -12, '-12 * -12 = 144']
     ],
     "multiple postitive and negative input": [
      [12, -12, '12 * -12 = -144']
     ],
     "multiple two zero input": [
      [0, 0, '0 * 0 = 0']
     ],
     "multiple any input with zero": [
      [12, 0, '12 * 0 = 0']
     ]

  };
  
  for (var x in expectedResults){
      var values = expectedResults[x];
      for(var i = 0; i < values.length; i++) {
        var inputa = values[i][0];
          var inputb = values[i][1];
         var  text = values[i][2];
}

 var basic = client.page.calculator();
 basic.navigate()
 .waitForElementVisible('@inputa', 3000)
 .clearValue('@inputa')
 .waitForElementVisible('@inputa', 3000)
 .setValue('@inputa', inputa)
 .waitForElementPresent('@inputb', 4000)
 .clearValue('@inputb')
 .setValue('@inputb', inputb)
 .waitForElementVisible('@text', 3000)
 .setValue('@dropdown', '*')
 .waitForElementVisible('@text', 3000)
 .expect.element('@text').text.to.equal(text);
 
 
} 
 
},

'TestCase for division function of calculator': function (client) {
  var expectedResults ={

     "devide postitive inputs" :[
     [55, 55, '55 / 55 = 1']
     ],
     "devide negative input": [
     [-12, -12, '-12 / -12 = 1']
     ],
     "devide postitive and negative input": [
      [12, -12, '12 / -12 = -1']
     ],
     "devide two zero input": [
      [0, 0, '0 / 0 = NaN']
     ],
     "devide any input by zero": [
      [12, 0, '12 / 0 = infinite']
     ],
     "devide zero by any input": [
      [0, 1, '0 / 1 = 0']

     ]

  };
  
  for (var x in expectedResults){
      var values = expectedResults[x];
      for(var i = 0; i < values.length; i++) {
        var inputa = values[i][0];
          var inputb = values[i][1];
         var  text = values[i][2];
}

 var basic = client.page.calculator();
 basic.navigate()
 .waitForElementVisible('@inputa', 3000)
 .clearValue('@inputa')
 .waitForElementVisible('@inputa', 3000)
 .setValue('@inputa', inputa)
 .waitForElementPresent('@inputb', 4000)
 .clearValue('@inputb')
 .setValue('@inputb', inputb)
 .waitForElementVisible('@text', 3000)
 .setValue('@dropdown', '/')
 .waitForElementVisible('@text', 3000)
 .expect.element('@text').text.to.equal(text);
  
} 
 
},

'TestCase for calculator by giving invalid input': function (client) {
  var expectedResults ={

     "devide postitive inputs" :[
     [a, b, 'please enter number or float in the field']
     ],
     "devide negative input": [
     [-12, NaN, 'please enter number or float in the field']
     ],
     "devide postitive and negative input": [
      [12, '@3$%&', 'please enter number or float in the field']
     ]

  };
  
  for (var x in expectedResults){
      var values = expectedResults[x];
      for(var i = 0; i < values.length; i++) {
        var inputa = values[i][0];
          var inputb = values[i][1];
         var  text = values[i][2];
}

 var basic = client.page.calculator();
 basic.navigate()
 .waitForElementVisible('@inputa', 3000)
 .clearValue('@inputa')
 .waitForElementVisible('@inputa', 3000)
 .setValue('@inputa', inputa)
 .waitForElementPresent('@inputb', 4000)
 .clearValue('@inputb')
 .setValue('@inputb', inputb)
 .waitForElementVisible('@text', 3000)
 .setValue('@dropdown', '/')
 .waitForElementVisible('@text', 3000)
 .expect.element('@text').text.to.equal(text);
  
} 
 
}


};