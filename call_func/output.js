if ('WebAssembly' in window) {
  var importObj = {
    env: {
      _print_valule: x =>
      document.getElementById('wasm').innerHTML = 
      'Value: ' + x
    }
  };

  WebAssembly.instantiateStreaming(fetch('call_func.wasm'), importObj)
    .then(result => SpeechRecognitionResult.instance.exports._call_func(9));
}

