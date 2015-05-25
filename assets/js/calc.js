/* parser generated by jison 0.4.15 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[1,40],$V2=[1,10],$V3=[1,16],$V4=[1,17],$V5=[6,33],$V6=[1,33,40],$V7=[1,32],$V8=[1,30],$V9=[1,31],$Va=[6,18,20,33],$Vb=[1,53],$Vc=[1,54],$Vd=[1,55],$Ve=[1,56],$Vf=[1,57],$Vg=[1,58],$Vh=[1,59],$Vi=[7,8,9,10,11,13,22],$Vj=[7,8,13,22];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expression":3,"e":4,"STRING":5,"IDENTIFIER":6,"+":7,"-":8,"*":9,"/":10,"%":11,"(":12,")":13,"NUM":14,"assignment":15,"=":16,"print":17,"PRINT":18,"read":19,"READ":20,"statement":21,";":22,"identifier_list":23,",":24,"dtype":25,"NUMBER":26,"WORD":27,"variable_declaration":28,"USE_AS":29,"vars":30,"var_block":31,"BEGIN_VARS":32,"NEWLINE":33,"END_VARS":34,"statements":35,"prog_block":36,"BEGIN_STATEMENTS":37,"END_STATEMENTS":38,"program":39,"EOF":40,"$accept":0,"$end":1},
terminals_: {2:"error",5:"STRING",6:"IDENTIFIER",7:"+",8:"-",9:"*",10:"/",11:"%",12:"(",13:")",14:"NUM",16:"=",18:"PRINT",20:"READ",22:";",24:",",26:"NUMBER",27:"WORD",29:"USE_AS",32:"BEGIN_VARS",33:"NEWLINE",34:"END_VARS",37:"BEGIN_STATEMENTS",38:"END_STATEMENTS",40:"EOF"},
productions_: [0,[3,1],[3,1],[3,1],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,1],[15,3],[17,2],[19,2],[21,2],[21,2],[21,2],[23,1],[23,3],[25,1],[25,1],[28,4],[30,1],[30,2],[31,3],[31,5],[35,1],[35,3],[35,2],[36,3],[36,5],[36,2],[39,3],[39,4],[39,2]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 4:
this.$ = $$[$0-2]+$$[$0];
break;
case 5:
this.$ = $$[$0-2]-$$[$0];
break;
case 6:
this.$ = $$[$0-2]*$$[$0];
break;
case 7:
this.$ = $$[$0-2]/$$[$0];
break;
case 8:
this.$ = $$[$0-2]%$$[$0];
break;
case 9:
this.$ = $$[$0-1];
break;
case 10:
this.$ = Number(yytext);
break;
case 11:
assign($$[$0-2], $$[$0])
break;
case 12:
print($$[$0])
break;
case 13:
read($$[$0])
break;
case 17:
this.$ = $$[$0]
break;
case 18:
this.$ = $$[$0-2]+','+$$[$0]
break;
case 21:
process_var($$[$0-3], $$[$0-1])
break;
}
},
table: [{31:2,32:$V0,33:[1,3],39:1},{1:[3],40:[1,5]},{33:[1,6]},{31:7,32:$V0},{33:[1,8]},o($V1,[2,34]),{36:9,37:$V2},{33:[1,11]},{6:$V3,23:15,28:14,30:13,34:[1,12]},o($V1,[2,32],{33:$V4}),{33:[1,18]},{36:19,37:$V2},{33:[2,24]},{6:$V3,23:15,28:21,33:[1,20]},o($V5,[2,22]),{29:[1,22]},{24:[1,23],29:[2,17]},o($V6,[2,31]),{6:$V7,15:29,17:27,18:$V8,19:28,20:$V9,21:26,35:25,38:[1,24]},o($V1,[2,33],{33:$V4}),{34:[1,33]},o($V5,[2,23]),{25:34,26:[1,35],27:[1,36]},{6:$V3,23:37},o($V6,[2,29]),{6:$V7,15:29,17:27,18:$V8,19:28,20:$V9,21:39,33:[1,38]},o($Va,[2,26]),{22:$V1},{22:[1,41]},{22:[1,42]},{6:[1,43]},{6:[1,44]},{16:[1,45]},{33:[2,25]},{22:[1,46]},{22:[2,19]},{22:[2,20]},{29:[2,18]},{6:$V7,15:29,17:27,18:$V8,19:28,20:$V9,21:48,38:[1,47]},o($Va,[2,28]),o($Va,[2,14]),o($Va,[2,15]),o($Va,[2,16]),{22:[2,12]},{22:[2,13]},{3:49,4:50,5:[1,51],6:[1,52],12:$Vb,14:$Vc},o($V5,[2,21]),o($V6,[2,30]),o($Va,[2,27]),{22:[2,11]},{7:$Vd,8:$Ve,9:$Vf,10:$Vg,11:$Vh,22:[2,1]},{22:[2,2]},{22:[2,3]},{4:60,12:$Vb,14:$Vc},o($Vi,[2,10]),{4:61,12:$Vb,14:$Vc},{4:62,12:$Vb,14:$Vc},{4:63,12:$Vb,14:$Vc},{4:64,12:$Vb,14:$Vc},{4:65,12:$Vb,14:$Vc},{7:$Vd,8:$Ve,9:$Vf,10:$Vg,11:$Vh,13:[1,66]},o($Vj,[2,4],{9:$Vf,10:$Vg,11:$Vh}),o($Vj,[2,5],{9:$Vf,10:$Vg,11:$Vh}),o($Vi,[2,6]),o($Vi,[2,7]),o($Vi,[2,8]),o($Vi,[2,9])],
defaultActions: {12:[2,24],33:[2,25],35:[2,19],36:[2,20],37:[2,18],43:[2,12],44:[2,13],49:[2,11],51:[2,2],52:[2,3]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        function lex() {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

function Variable(identifier,dtype) {
    this.identifier = identifier;
    this.dtype = dtype;
    this.val = null;

    this.setVal = function(val) {
        if (val instanceof Variable) {
            if (this.dtype !== val.dtype) {
                throw new Error("Incompatible data type. Storing " +val.dtype+" to a "+ this.dtype +".");
            }
        }
        this.val = val;
    }

    this.getVal = function() {
        if (this.val instanceof Variable){
            return this.val.getVal();
        } else {
            return this.val;
        }
    }
}

variables = []

var process_var = function(identifiers, dtype) {
    var vars = identifiers.split(',');
    for (i in vars){
        var identifier = vars[i];
        if (isAlreadyDeclared(identifier)){
            throw new Error( identifier +" variable already declared");
        } else {
            variables.push(new Variable(identifier, dtype));
        }
    }   
}

var print = function(identifier) {
    var variable = getVar(identifier);
    if (variable === null) {
        throw new Error( identifier +" variable has not been declared");
    }
    var val = variable.getVal();
    if (val === null){
        $('#out').append('<span class = "gray">null</span>');
    } else {
        $('#out').append(val);
    }
}

var read = function(identifier) {
    var variable = getVar(identifier);
    if (variable === null) {
        throw new Error( identifier +" variable has not been declared");
    }
    var input = prompt("Enter value for variable: ");
    if (variable.dtype === 'number') {
        input = +input;
        if (isNaN(input)){
            throw new Error("Failure to parse input into a number.");
        }
    }
    variable.val = input;
}
var isAlreadyDeclared = function(identifier) {
    return getVar(identifier) !== null;
}

var getVar = function(identifier){
    for (i in variables){
        if (variables[i].identifier === identifier) {
            return variables[i];
        }
    }
    return null;
}

var assign = function(identifier, val) {
    var variable = getVar(identifier);
    if (variable === null) {
        throw new Error( identifier +" variable has not been declared");
    }
    if (typeof val === 'string'){
        if (val.match(/^[a-zA-Z_]([a-zA-Z_]|[0-9])*$/g) !== null) {
            //identifier
            identifier = getVar(val);
            if (identifier === null) {
                throw new Error(val +" variable has not been declared");
            } else {
                if (variable.dtype !== identifier.dtype){
                    throw new Error("Incompatible data type. Storing " +identifier.dtype+" to a "+ variable.dtype+".")
                } else {
                    variable.val = identifier;
                }
            }
        } else if (val.match(/^[a-zA-Z_]?\"(\\.|[^\\"])*\"$/g) !== null) {
            if (variable.dtype == 'number') {
                throw new Error("Incompatible data type. Storing string to a number.")
            }
            val = val.substring(1, val.length - 1);
            variable.val = val;            
        }
    }
    if (typeof val === 'number'){
        if (variable.dtype == 'word') {
            throw new Error("Incompatible data type. Storing number to a word.")
        }   

        variable.val = val;
    }
}

/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 33
break;
case 1:/* skip whitespace */
break;
case 2:return 26
break;
case 3:return 27
break;
case 4:return 29
break;
case 5:return 32
break;
case 6:return 34
break;
case 7:return 37
break;
case 8:return 38
break;
case 9:return 20
break;
case 10:return 18
break;
case 11:return 5
break;
case 12:return 14
break;
case 13:return 6
break;
case 14:return 24
break;
case 15:return 9
break;
case 16:return 10
break;
case 17:return 8
break;
case 18:return 7
break;
case 19:return 11
break;
case 20:return 12
break;
case 21:return 13
break;
case 22:return 16
break;
case 23:return 22
break;
case 24:variables = []
break;
case 25:variables = []
break;
}
},
rules: [/^(?:\s*\n+)/,/^(?:\s+)/,/^(?:number\b)/,/^(?:word\b)/,/^(?:use as\b)/,/^(?:begin vars\b)/,/^(?:end vars\b)/,/^(?:begin statements\b)/,/^(?:end statements\b)/,/^(?:read\b)/,/^(?:print\b)/,/^(?:[a-zA-Z_]?"(\\.|[^\\"])*")/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:[a-zA-Z_]([a-zA-Z_]|[0-9])*)/,/^(?:,)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:%)/,/^(?:\()/,/^(?:\))/,/^(?:=)/,/^(?:;)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();