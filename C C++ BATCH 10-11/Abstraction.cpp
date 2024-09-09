#include<iostream>
using namespace std;

class Shape{
public :
    virtual void draw()=0;
};

class Circle : public Shape{
public :
    void draw() override {
        cout << "Drawing Circle " << endl;
    }
};

class Square : public Shape{
public :
    void draw() override {
        cout << "Drawing Square " << endl;
    }
};

void render(Shape* shape){
    shape->draw();
}

int main(){
    Shape* circle =new Circle();
    Shape* square =new Square();

    render(circle);
    render(square);
    return 0;
}
