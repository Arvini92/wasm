if ('WebAssembly' in window) {
  
var memObj = new WebAssembly.Memory({initial: 256, maximum: 256});
var importObj = { env: { memory: memObj} };

  WebAssembly.instantiateStreaming(fetch('dot.wasm'), importObj)
    .then(result => {
      offset1 = result.instance.exports._getFirstOffset();
      offset2 = result.instance.exports._getFirstOffset();

      var firstArray = new Uint32Array(memObj.buffer, offset1, 8);
      firstArray.fill(2);
      var secondArray = new Uint32Array(memObj.buffer, offset2, 8);
      secondArray.fill(3);

      product = result.instance.exports._dot_product();
      document.getElementById('wasm').innerHTML =
      'Dot product: ' + product;
    });
}

