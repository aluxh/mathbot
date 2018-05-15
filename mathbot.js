const ApiAiAssistant = require('actions-on-google').ApiAiAssistant;

function add(assistant) {
  var left = parseInt(assistant.getArgument("left"));
  var right = parseInt(assistant.getArgument("right"));
  var answer = left + right;
 
  assistant.setContext("result", 15, {"result": answer});
  assistant.tell('The result of ' + left +' plus '+ right +' is '+ answer);
  
}

function minus(assistant) {
  var left = parseInt(assistant.getArgument("left"));
  var right = parseInt(assistant.getArgument("right"));
  var answer = left - right;
 
  assistant.setContext("result", 15, {"result": answer});
  assistant.ask(`The result of ${left} minus ${right} is ${answer}`);
}

function multiply(assistant) {
  var left = parseInt(assistant.getArgument("left"));
  var right = parseInt(assistant.getArgument("right"));
  var answer = left * right;
  
  assistant.setContext("result", 15, {"result": answer});
  assistant.ask(`The result of ${left} multiply ${right} is ${answer}`);
}

function divide(assistant) {
  var left = parseInt(assistant.getArgument("left"));
  var right = parseInt(assistant.getArgument("right"));
  var answer = left / right;
  
  assistant.setContext("result", 15, {"result": answer}); 
  assistant.ask(`The result of ${left} divided by ${right} is ${answer}`);
}

exports.adder = function(request, response) {
    var assistant = new ApiAiAssistant({request: request, response: response});
    var actionMap = new Map();
    actionMap.set("input.plus", add);
    actionMap.set("input.minus", minus);
  	actionMap.set("input.multiply", multiply);
    actionMap.set("input.divide", divide);
    assistant.handleRequest(actionMap);
};
