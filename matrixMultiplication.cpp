#include<iostream>
using namespace std;
int main(){
    int n1,m1;
    int n2,m2;
    cout<<"Enter number of row and column for 1st Matrix";
    cin>>n1>>m1;
    cout<<"Enter number of row and column for 2nd Matrix";
    cin>>n2>>m2;
        int mat1[n1][m1]; 
        int mat2[n2][m2];
        int resMat[n1][m2];
    if(m1 == n2){
    cout<<"Enter elements in Matrix 1";
    for(int i=0; i<n1; i++){
       for(int j=0; j<m1; j++){ 
       cin>>mat1[i][j];
    }
}
cout<<"Enter elements in Matrix 2";
for(int i=0; i<n2; i++){
       for(int j=0; j<m2; j++){ 
       cin>>mat2[i][j];
    }
}
// matrix multiplication
for(int i=0; i<n1; i++){
       for(int j=0; j<m2; j++){ 
        resMat[i][j] = 0;
        for(int k=0; k<n2; k++){
            resMat [i][j] += mat1[i][k]*mat2[k][j];
        }
    }
}
for(int i=0; i<n1; i++){
    for(int j=0; j<m2; j++){
        cout<<resMat[i][j]<<" ";
    }
    cout<<endl;
}
}
else{
    cout<<"Matrix Multiplication not  possible";
}
return 0;
}