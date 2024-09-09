

Blockly.Extensions.register('colours',
function() {
  const options = this.getField('VALUE').getOptions();
  options[options.length - 3][0] += ' ▣';
  options[options.length - 2][0] += ' ▣';
  options[options.length - 1][0] += ' ▣';
});



Blockly.common.defineBlocksWithJsonArray([
   {
      "type": "avancar1",
      "message0": "Avançar 1",
      
      "previousStatement": null,
      "nextStatement": null,
      "colour": 115
   },

   {
    "type": "avancarN",
    "message0": "Avançar",
    
    "previousStatement": null,
    "nextStatement": null,
    "colour": 115
  },

  {
    "type": "avancarSelect",
    "id": "2",
    "message0": "Avançar %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "VALUE",
        "options": [
          ["1", "1"],
          ["2", "11"],
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180
  },

   {
    "type": "virarEsq",
    "message0": "Virar Esquerda",
 
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180
  },

  {
    "type": "virarDir",
    "message0": "Virar Direita",
 
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180
  },

  {
    "type": "virarSelect",
    "message0": "Virar %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "VALUE",
        "options": [
          ["Esquerda", "3"],
          ["Direita", "4"],
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180
  },

  {
    "type": "repita",
    "message0": 'Repita: %1 vezes %2 %3',
    "args0": [
      {
        "type": "field_dropdown",
        "name": "VALUE",
        "options": [
          ["1", "51"],
          ["2", "52"],
          ["3", "53"],
          ["4", "54"],

        ]
      },
      {
        "type": "input_dummy",
      },
      {
        "type": "input_statement",
        "name": "fazer",
      }
    ],
    "previousStatement": null,
    "colour": 220,
    
  },

  {
    "type": "repitaAte",
    "message0": 'Repita até %1 %2 Faça %3',
    "args0": [
      {
        "type": "field_image",
        "src": "../model/src/marker.png",
        "width": 24,
        "height": 20,

        
      },
      {
        "type": "input_dummy",
      },
      {
        "type": "input_statement",
        "name": "fazer",
      },
      {
        "type": "input_value",
        "name": "fazerValor"
      },
    ],
    "previousStatement": null,
    "colour": 220,
    
  },
  {
    "type": "repitaAte_alt",
    "message0": 'Repita até %1 %2 Faça %3',
    "args0": [
      {
        "type": "field_image",
        "src": "../model/src/marker.png",
        "width": 24,
        "height": 20,

        
      },
      {
        "type": "input_dummy",
      },
      {
        "type": "input_statement",
        "name": "fazer",
      }
    ],
    "previousStatement": null,
    "colour": 220,
    
  },
  {
    "type": "if_cor",
    "message0": `Se cor: %1 %2 %3`,
    "args0": [
      {
        "type": "field_dropdown",
        "name": "VALUE",
        "options": [
          ["Branco", "b"],
          ["Vermelho", "v"],
          ["Azul", "a"],

        ]
      },
      {
        "type": "input_dummy",
      },
      {
        "type": "input_statement",
        "name": "fazer",
      },
    ],
    "previousStatement": null,
    
    "colour": 330,
    "extensions": ["colours"],
    
  },

  {
    "type": "if_cor_alt",
    "message0": `Se cor: %1 %2 %3`,
    "args0": [
      {
        "type": "field_dropdown",
        "name": "VALUE",
        "options": [
          ["Roxo", "b"],
          ["Vermelho", "v"],
          ["Azul", "a"],

        ]
      },
      {
        "type": "input_dummy",
      },
      {
        "type": "input_statement",
        "name": "fazer",
      },
    ],
    "previousStatement": null,
    "nextStatement": null,
    
    "colour": 330,
    "extensions": ["colours"],
    
  },

  {
    "type": "if_espinho",
    "message0": `Se espinho: %1 %2 %3`,
    "args0": [
      {
        "type": "field_image",
        "src": "../model/src/espinhoSheet.png",
        "width": 40,
        "height": 40,
      },
      {
        "type": "input_dummy",
      },
      {
        "type": "input_statement",
        "name": "fazer",
      },
    ],
    "previousStatement": null,
    "nextStatement": null,
    
    "colour": 90,
  },

  {
    "type": "esperar",
    "message0": "Esperar um turno",
    
    "previousStatement": null,
    "nextStatement": null,
    "colour": 300,
 },

]);

javascript.javascriptGenerator.forBlock['virarEsq'] = function(block) {
  let op = "3";
  return (op);
};

javascript.javascriptGenerator.forBlock['virarDir'] = function(block) {
  let op = "4";
  return (op);
};

javascript.javascriptGenerator.forBlock['avancar1'] = function(block) {
  let op = "1";
  return (op);
};

javascript.javascriptGenerator.forBlock['avancarN'] = function(block) {
  let op = "2";
  return (op);
};

javascript.javascriptGenerator.forBlock['avancarSelect'] = function(block) {
  let op = block.getFieldValue('VALUE');
  return (op);
};

javascript.javascriptGenerator.forBlock['virarSelect'] = function(block) {
  let op = block.getFieldValue('VALUE');
  return (op);
};

javascript.javascriptGenerator.forBlock['repita'] = function(block) {
  let op = block.getFieldValue('VALUE');
  let branch = Blockly.JavaScript.statementToCode(block, 'fazer');
  let result = "";
  let idRepita = "";
  
  
  switch (op) {
    case "51":
      result = branch;
      idRepita = "!";
      break;
    case "52":
      result = branch+branch;
      idRepita = "@";
      break;
    case "53":
      result = branch+branch+branch
      idRepita = "#";
      break;
    case "54":
      result = branch+branch+branch+branch
      idRepita = "$";
      break;
      
    default:
      break;
  }

  return result;
  
};

javascript.javascriptGenerator.forBlock['repitaAte'] = function(block) {
  let op = 'r';
  let branch = Blockly.JavaScript.statementToCode(block, 'fazer');

  return op+=branch;
};
javascript.javascriptGenerator.forBlock['repitaAte_alt'] = function(block) {
  
  let branch = Blockly.JavaScript.statementToCode(block, 'fazer');
  let result = branch+branch+branch+branch+branch+branch+branch+branch+branch+branch+branch+branch

  return result;
};
javascript.javascriptGenerator.forBlock['if_cor'] = function(block) {
  let op = block.getFieldValue('VALUE');
  let branch = Blockly.JavaScript.statementToCode(block, 'fazer');
  

  op+=branch;
  

  return op;
  
};

javascript.javascriptGenerator.forBlock['if_cor_alt'] = function(block) {
  let op = block.getFieldValue('VALUE');
  let branch = Blockly.JavaScript.statementToCode(block, 'fazer');
  

  op+=branch;
  

  return op;
  
};
javascript.javascriptGenerator.forBlock['if_espinho'] = function(block) {

  let branch = Blockly.JavaScript.statementToCode(block, 'fazer');
  let espId = "e"
  
  return espId+branch;
  
};

javascript.javascriptGenerator.forBlock['esperar'] = function(block) {

  let op = "6";
  
  return op;
  
};


// javascript.javascriptGenerator.forBlock['andar'] = function(block) {

//   var code = block.getinputValue('passos');
   
//   return (code)

  
// };

