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
<<EOF>>                         return 'EOF'
.                               return 'INVALID'

/lex

/* operator associations and precedence */

%left '+' '-'
%left '*' '/'
%left '^'
%left UMINUS

%start var_block

%% /* language grammar */

expressions
    : e EOF
        {return $1;}
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
    | E
        {$$ = Math.E;}
    | PI
        {$$ = Math.PI;}
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