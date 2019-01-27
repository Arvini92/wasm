if ('WebAssembly' in window) {
  WebAssembly.instantiateStreaming(fetch('seven.wasm'))
    .then(result => 
      document.getElementById('wasm').innerHTML = 
      'Output: ' + result.instance.exports._seven()      
  );
}