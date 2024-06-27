int one_to_ten_do(){
    int i=12;
    do{
        printf("%d\n",i);
        i++;
    }while(i>12);

}

int table(){
    int i=1;
    do{
        int res=i*2;
        printf("2 X %d = %d \n",i,res);
        i++;
    }while(i<=10);
}


int main(){
    table();
    //one_to_ten_do();
    return 0;
}
