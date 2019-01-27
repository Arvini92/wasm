if ('WebAssembly' in window) {
  
var memObj = new WebAssembly.Memory({initial: 256, maximum: 256});
var importObj = { env: { memory: memObj} };

  WebAssembly.instantiateStreaming(fetch('quicksort.wasm'), importObj)
    .then(result => {
      offset = result.instance.exports._getFirstOffset();
      var i;

      var mem = new Uint32Array(memObj.buffer, offset, 16);
      for(i=0; i<16; i++) {
        mem[i] = Math.floor(16 * Math.random());
      }
      

      result.instance.exports._quicksort(0, 15);

      resultString = "";
      for(i=0; i<16; i++) {
        resultString += ' ' + mem[i];
      }

      document.getElementById('wasm').innerHTML =
      'Output: ' + resultString;
    });
}

