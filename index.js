JScriptCodeDom.CodeParseException: Unexcepted Token : Identity: , Requires Semicolon , Line 59, Char 30 ---> System.Exception: Unexcepted Token : Identity: , Requires Semicolon
   at JScriptCodeDom.CodeParser.ReadAndCheckToken(CodeTokenType equalto)
   at JScriptCodeDom.CodeParser.ParseForStatement()
   at JScriptCodeDom.CodeParser.InternalParseStatementCore()
   at JScriptCodeDom.CodeParser.InternalParseStatement()
   at JScriptCodeDom.CodeParser.ParseStatement()
   at JScriptCodeDom.CodeParser.ParseBlock()
   at JScriptCodeDom.CodeParser.ParseFunctionForQuoteStart(CodeFunctionExpression func)
   at JScriptCodeDom.CodeParser.ParseFunctionExpression()
   at JScriptCodeDom.CodeParser.ParseLazyExpressionCore(Boolean bthrowerr)
   at JScriptCodeDom.CodeParser.ParseLazyExpression(Boolean bthrowerr)
   at JScriptCodeDom.CodeParser.InternalParseStatementCore()
   at JScriptCodeDom.CodeParser.InternalParseStatement()
   at JScriptCodeDom.CodeParser.ParseStatement()
   at JScriptCodeDom.CodeParser.ParseBlock()
   at JScriptCodeDom.CodeParser.ParseFunctionForQuoteStart(CodeFunctionExpression func)
   at JScriptCodeDom.CodeParser.ParseFunctionExpression()
   at JScriptCodeDom.CodeParser.ParseLazyExpressionCore(Boolean bthrowerr)
   at JScriptCodeDom.CodeParser.ParseLazyExpression(Boolean bthrowerr)
   at JScriptCodeDom.CodeParser.InternalParseStatementCore()
   at JScriptCodeDom.CodeParser.InternalParseStatement()
   at JScriptCodeDom.CodeParser.ParseStatement()
   at JScriptCodeDom.CodeParser.ParseBlock()
   at JScriptCodeDom.CodeParser.Parse(String code, String filename, Int32 lineoffset, Boolean keeplinenum)
   --- End of inner exception stack trace ---
   at JScriptCodeDom.CodeParser.Parse(String code, String filename, Int32 lineoffset, Boolean keeplinenum)
   at ProtectorV1.Protect(String[] codes)
   at ProtectorV1.Protect(String code)
   at ASP.javascript_obfuscator_aspx.Button1_Click(Object sender, EventArgs e)
