/* lexical grammar */
%{
    function Variable(id,type) {
        this.id = id;
        this.type = type;
        this.value = null;

        this.setValue = function(value) {
            this.value = value;
        }
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
    | e '^' e
        {$$ = Math.pow($1, $3);}
    | '-' e %prec UMINUS
        {$$ = -$2;}
    | '(' e ')'
        {$$ = $2;}
    | NUM
        {$$ = Number(yytext);}
    ;

assignment
    : IDENTIFIER '=' expression

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
    ;

statements
    : statement
    | statement statements
    ;


prog_block
    : BEGIN_STATEMENTS NEWLINE END_STATEMENTS
    | BEGIN_STATEMENTS NEWLINE statements NEWLINE END_STATEMENTS
    ;

program
    : var_block prog_block
    | program EOF
    ;

%%
var process_var = function(id, type) {
    if (isAlreadyDeclared(id)){
        throw new Error( id +" variable already declared");
    } else {
        variables.push(new Variable(id, type));
    }

    console.log(variables);
}

var print = function(id) {
    variable = getVar(id);
    if (variable === null) {
        throw new Error( id +" variable has not been declared");
    }
    $('#out').append(getVar(id).value);
}
var read = function(id) {
    variable = getVar(id);
    if (variable === null) {
        throw new Error( id +" variable has not been declared");
    }
    variable.value = prompt("Enter value for variable " + id + ": ");
}
var isAlreadyDeclared = function(id) {
    return getVar(id) !== null
}

var getVar = function(id){
    for (i in variables){
        if (variables[i].id === id) {
            return variables[i]
        }
    }
    return null
}