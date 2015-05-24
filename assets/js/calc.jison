/* lexical grammar */
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
<<EOF>>                         return 'EOF'
.                               return 'INVALID'

/lex

/* operator associations and precedence */

%left '+' '-'
%left '*' '/'
%left '^'
%left UMINUS

%start prog_block

%% /* language grammar */

expression
    : e
        {return $1;}
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
    ;

read
    : READ IDENTIFIER
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
    ;

vars
    : variable_declaration
    | vars NEWLINE variable_declaration
    ;

var_block
    : BEGIN_VARS NEWLINE END_VARS
    | BEGIN_VARS NEWLINE vars NEWLINE END_VARS
    | var_block EOF
    ;

statements
    : statement
    | statement NEWLINE statements
    ;


prog_block
    : BEGIN_STATEMENTS NEWLINE END_STATEMENTS
    | BEGIN_STATEMENTS NEWLINE statements NEWLINE END_STATEMENTS
    | prog_block EOF
    ;

program
    : var_block prog_block
    | program EOF
    ;