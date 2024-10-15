function interpret() {
  var code = String(editor.getValue()); //gets code
  var lines= code.split("\n"); //declares separate line
  window.alert(lines)
  
  var lexer = function (c) {//defines lexer function
    var tokens = [];
    //checking each token (character) and classifying
    var isOperator = function (c) { return /[+\-*\/\^%=(),]/.test(c); },
      digit = function (c) { return /[0-9]/.test(c); },
      whiteSpace = function (c) { return /\s/.test(c); },
      identifier = function (c) { return typeof c === "string" && !isOperator(c) && !isDigit(c) && !isWhiteSpace(c); };
    var tokens = [], c, i = 0;
    var advance = function () { return c = input[++i]; };//defining commands for list of tokens
    var addToken = function (type, value) {
      tokens.push({
        type: type,
        value: value
      });
    };
    while (i < input.length) {
      c = input[i];
      if (isWhiteSpace(c)) advance();//declares to ignore whitespace
      else if (isOperator(c)) { //adding the operator token
        addToken(c);
        advance();
      }

      else if (isDigit(c)) { //defines numbers as collections of digits
        var num = c;
        while (isDigit(advance())) num += c;
        if (c === ".") {
          do num += c; while (isDigit(advance()));
        }
        num = parseFloat(num);
        if (!isFinite(num)) throw "Number is too large or too small for a 64-bit double.";
        addToken("number", num);
      }

      else if (isIdentifier(c)) { //every other character is identifier
        var idn = c;
        while (isIdentifier(advance())) idn += c;
        addToken("identifier", idn);
      }
      addToken("(end)")

      return tokens;
    }
    

    return tokens;
  };
  for (item in lines) {
    let line = lines[item];
    window.alert(line);
    }
  
};
