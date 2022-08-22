function showMessage(from, text) { // аргументы: from, text
    alert(from + ': ' + text);
  }
  
  showMessage('Никита', 'Привет!'); // Никита: Привет! (*)
  showMessage('Никита', "Как дела?"); // Никита: Как дела? (**)