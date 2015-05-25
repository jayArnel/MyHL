
%{
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
%}

/* lexical grammar */
%lex
%%

\s*\n+                             return 'NEWLINE'
\s+                             /* skip whitespace */

"number"                        return 'NUMBER'
"word"                          return 'WORD'
"use as"                        return 'USE_AS'
"begin vars"                    return 'BEGIN_VARS'
"end vars"                      return 'END_VARS'
"begin statements"              return 'BEGIN_STATEMENTS'
"end statements"                return 'END_STATEMENTS'
"read"                          return 'READ'
"print"                         return 'PRINT'
[a-zA-Z_]?\"(\\.|[^\\"])*\"     return 'STRING'
[0-9]+("."[0-9]+)?\b            return 'NUM'
[a-zA-Z_]([a-zA-Z_]|[0-9])*     return 'IDENTIFIER'
","                             return ','
"*"                             return '*'
"/"                             return '/'
"-"                             return '-'
"+"                             return '+'
"%"                             return '%'
"("                             return '('
")"                             return ')'
"="                             return '='
";"                             return ';'
<<EOF>>                         {variables = []}return 'EOF'
.                               {variables = []}return 'INVALID'

/lex

/* operator associations and precedence */

%left '+' '-'
%left '*' '/' '%'

%start program

%% /* language grammar */

expression
    : e
    ;

e
    : e '+' e
        {$$ = $1+$3;}
    | e '-' e
        {checkOperation($1, $3);$$ = $1-$3;}
    | e '*' e
        {checkOperation($1, $3);$$ = $1*$3;}
    | e '/' e
        {checkOperation($1, $3);$$ = $1/$3;}
    | e '%' e
        {checkOperation($1, $3);$$ = $1%$3;}
    | '(' e ')'
        {$$ = $2;}
    | NUM
        {$$ = Number(yytext);}
    | STRING
    | IDENTIFIER
        {$$ = getVar($1).getVal()}}
    ;

assignment
    : IDENTIFIER '=' expression
        {assign($1, $3)}
    ;

print
    : PRINT IDENTIFIER
        {print($2)}
    | PRINT STRING
        {$('#out').append($2.substring(1, $2.length - 1));}
    | PRINT NUM
        {$('#out').append($2)}
    ;

read
    : READ IDENTIFIER
        {read($2)}
    ;

statement
    : print ';'
    | read ';'
    | assignment ';'
    ;

identifier_list
    : IDENTIFIER
        {$$ = $1}
    | IDENTIFIER ',' identifier_list
        {$$ = $1+','+$3}
    ;

dtype
    : NUMBER
    | WORD
    ;

variable_declaration
    : identifier_list USE_AS dtype ';'
        {process_var($1, $3)}
    ;

vars
    : variable_declaration
    | vars NEWLINE variable_declaration
    | vars variable_declaration
    ;

var_block
    : BEGIN_VARS NEWLINE END_VARS
    | BEGIN_VARS NEWLINE vars NEWLINE END_VARS
    ;

statements
    : statement
    | statements NEWLINE statement
    | statements statement
    ;

prog_block
    : BEGIN_STATEMENTS NEWLINE END_STATEMENTS
    | BEGIN_STATEMENTS NEWLINE statements NEWLINE END_STATEMENTS
    | prog_block NEWLINE
    ;

program
    : var_block NEWLINE prog_block
    | NEWLINE var_block NEWLINE prog_block
    | program EOF
    ;

%%
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
    console.log(variables);
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
    console.log(variables);
    var variable = getVar(identifier);
    if (variable === null) {
        throw new Error( identifier +" variable has not been declared");
    }
    var input = prompt("Enter value for variable"+identifier+": ");
    if (variable.dtype === 'number') {
        input = +input;
        if (isNaN(input)){
            throw new Error("Failure to parse input into a number.");
        }
    }
    variable.setVal(input);
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

var checkOperation = function(arg1, arg2) {
    
}