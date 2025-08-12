function transform() {
      let s = Number(document.getElementById('textBox').value);
      const toC = document.getElementById('toc').checked;
      const toF = document.getElementById('tof').checked;
      let result = "";

      if (toC) {
        result = ((s - 32) * 5 / 9).toFixed(2) + " °C";
      } 
      else if (toF) {
        result = ((s * 9 / 5) + 32).toFixed(2) + " °F";
      } 
      else {
        result = "⚠️ Veuillez choisir une option.";
      }

      document.getElementById('result').innerHTML = result;
    }