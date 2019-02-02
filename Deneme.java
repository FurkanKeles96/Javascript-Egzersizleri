public class Main{
public static void main(String[] args){
for( int i = 0; i < 4; i++ ){
printLetterJ(i);
printLetterA(i);
printLetterV(i);
printLetterA(i);
System.out.println();
}
}
public static void printLetterA(int rowIndex){
int startIndex = 3 - rowIndex;
int endIndex = 3 + rowIndex;
boolean printwhatsBetween = false;
if( rowIndex == 2 ){
printwhatsBetween = true;
}

for( int j = 0; j < 7; j++ ){
if( j == startIndex || j == endIndex || ( j > startIndex && j < endIndex && printwhatsBetween ) ){
System.out.print( "a" );
}
else{
System.out.print(" ");
}
}
}
public static void printLetterV( int rowIndex ){
int startIndex = rowIndex;
int endIndex = 6 - rowIndex;
for( int j = 0; j < 7; j++ ){
if( j == startIndex || j == endIndex ){
System.out.print("v");
}
else{
System.out.print(" ");
}
}
}
public static void printLetterJ( int rowIndex ){
char[][] jArray = {{' ',' ', ' ', 'J'},
{' ',' ', ' ', 'J'},
{'J',' ', ' ', 'J'},
{' ','J', 'J', ' '}};
for( int j=0; j < 4; j++ ){
System.out.print(jArray[rowIndex][j]);
}
System.out.print(" ");
}
}