from flask import *
import pymysql as mysql
app=Flask(__name__)

mydb=mysql.connect(host="localhost",user="root",password="root@123",database="vish_flask")
curr=mydb.cursor()
curr.execute("SHOW DATABASES")
res=curr.fetchall()
print(res)


@app.route('/', methods=['GET','POST'])
def stu_reg():
    if request.method == 'POST':
        name=request.form.get('stu-name')
        email=request.form.get('email')
        password=request.form.get('password')
        try:
            curr.execute("INSERT INTO STUDENT(S_NAME,S_EMAIL,S_PASS) VALUES(%s,%s,%s)",(name,email,password))
            mydb.commit()
            return "Data added to MySql"
        except Exception as e:
            return f"Data unable save in DB :{e}"
        
    else:
        return render_template('stu_reg.html')


@app.route('/all-users')
def show_users():
    user_list=[]
    curr.execute("SELECT * FROM STUDENT")
    for data in curr.fetchall():
        user_list.append(data)
        print(data)
    mydb.close()
    return render_template('all_users.html',users=user_list)


app.run(debug=True)