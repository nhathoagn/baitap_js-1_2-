let err = new FormatError("formatting error")
alert( err.message);
alert( err.name);
alert( err.stack);
alert( err instanceof FormatError ); // true
alert( err instanceof SyntaxError );