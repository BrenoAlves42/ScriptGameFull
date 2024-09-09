


export class blocklyToolbox{


  constructor(toolbox){
    this.toolbox = toolbox;
    this.maxBlocks = 4;
}
    
    injetar(toolbox){
      Blockly.inject('blocklyDiv', {
        toolbox: toolbox,
        scrollbars: false,
        maxBlocks: this.maxBlocks,
        renderer: 'zelos',
        trashcan: true,
        grid:
              {spacing: 30,
              length: 3,
              colour: '#ccc',
              snap: true},
        
      });
    }

}
