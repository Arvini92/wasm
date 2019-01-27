if ('WebAssembly' in window) {

  // Create the import object
  var memObj = new WebAssembly.Memory({initial: 256, maximum: 256});  
  var importObj = { 
    env: { 
      memory: memObj,
      STACKTOP: 0
    } 
  };
  WebAssembly.instantiateStreaming(fetch('matrix_ops.wasm'), importObj)
  .then(result => {

    // Obtain the array address
    offset = result.instance.exports._getOffset();

    // Create a typed array for each matrix and vector
    var matA = new Float32Array(memObj.buffer, offset, 16);
    var matB = new Float32Array(memObj.buffer, offset+64, 16);
    var vec = new Float32Array(memObj.buffer, offset+192, 4);
    var out = new Float32Array(memObj.buffer, offset+208, 4);

    // Initialize values
    var k = 9.0;
    matA.fill(2.0);
    matB.fill(3.0);
    vec.fill(4.0);

    // Perform the multiplication operations
    result.instance.exports._scalarMult(0, k, 0);
    result.instance.exports._matrixMult(0, 16, 32);
    result.instance.exports._vectorMult(32, 48, 52);

    // Display the results
    resultString = "";
    for(i=0; i<4; i++) {
        resultString += ' ' + out[i];
    }
    document.getElementById('wasm').innerHTML = 'Output:' + resultString;
  });
}







