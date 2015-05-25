/* lexical grammar */
%{
function Variable(identifier,dtype) {
    this.identifier = identifier;
    this.dtype = dtype;
    this.val = null;
}

variables = []
%}

%lex
%%

\n+                              return 'NEWLINE'
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
%left '*' '/'
%left '^'
%left UMINUS

%start program

%% /* language grammar */

expression
    : e
    | STRING
    | IDENTIFIER
    ;

e
    : e '+' e
        {$$ = $1+$3;}
    | e '-' e
        {$$ = $1-$3;}
    | e '*' e
        {$$ = $1*$3;}
    | e '/' e
        {$$ = $1/$3;}
    | '(' e ')'
        {$$ = $2;}
    | NUM
        {$$ = Number(yytext);}
    ;

assignment
    : IDENTIFIER '=' expression
        {assign($1, $3)}
    ;

print
    : PRINT IDENTIFIER
        {print($2)}
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
    | IDENTIFIER ',' identifier_list
    ;

dtype
    : NUMBER
    | WORD
    ;

variable_declaration
    : identifier_list USE_AS dtype
        {process_var($1, $3)}
    ;

vars
    : variable_declaration
    | vars NEWLINE variable_declaration
    ;

var_block
    : BEGIN_VARS NEWLINE END_VARS
    | BEGIN_VARS NEWLINE vars NEWLINE END_VARS
    | var_block NEWLINE
    ;

statements
    : statement
    | statement statements
    ;


prog_block
    : BEGIN_STATEMENTS NEWLINE END_STATEMENTS
    | BEGIN_STATEMENTS NEWLINE statements NEWLINE END_STATEMENTS
    | prog_block NEWLINE
    ;

program
    : var_block prog_block
    | program EOF
    ;

%%
var process_var = function(identifier, dtype) {
    if (isAlreadyDeclared(identifier)){
        throw new Error( identifier +" variable already declared");
    } else {
        variables.push(new Variable(identifier, dtype));
    }

    console.log(variables);
}

var print = function(identifier) {
    var variable = getVar(identifier);
    if (variable === null) {
        throw new Error( identifier +" variable has not been declared");
    }
    if (variable.val === null){
        $('#out').append('<span class = "gray">null</span>');
    } else {
        var val = variable.val
        while (val instanceof Variable) {
            val = val.val
            console.log(val);
        }
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
            console.log(val);
            val = val.substring(1, val.length - 1);
            console.log(val);
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