from tkinter import *
from tkinter import filedialog
from tkinter import messagebox
from PIL import Image,ImageTk
import mysql.connector
window=Tk()
window.title('STUDENT REGISTRATION')
window.resizable(0,0)
window.geometry('600x700')

def connect_mysql():
    con=mysql.connector.connect(host="localhost",user="root",password="root")
    return con

def create_db_and_table():
    conn=connect_mysql()
    cur=conn.cursor()

    cur.execute("CREATE DATABASE IF NOT EXISTS STUDENT_DATA")
    # messagebox.showinfo('Status','Database create or exists')
    cur.execute("USE STUDENT_DATA")

    table=f"""
        CREATE TABLE IF NOT EXISTS STUDENT(
        STU_ID INT PRIMARY_KEY AUTO_INCREMENT,
        STU_NAME VARCHAR(50),
        STU_CLASS VARCHAR(10),
        STU_ROLL VARCHAR(10),
        STU_GENDER VARCHAR(10),
        STU_MOB TEXT,
        STU_EMAIL TEXT,
        STU_IMG TEXT,
        STU_DOC TEXT

        );
    """


# upload image
def upload_image():
    file_path=filedialog.askopenfilename(filetypes=[('Image files','.jpg;.png;.svg;.gif')])
    # messagebox.showinfo('Status',file_path)
    if file_path:
        stu_image_lable.config(text=file_path)
        img=Image.open(file_path)
        img=img.resize((50,50))
        img=ImageTk.PhotoImage(img)
        stu_image_lable.config(image=img)
        stu_image_lable.image=img
# upload document
def upload_docs():
    file_path=filedialog.askopenfilename(filetypes=[('All files','*.*')])
    # messagebox.showinfo('Status',file_path)
    if file_path:
        stu_docs_lable.config(text=file_path)
        

# add frame to window
main_frame=Frame(window,width=500,height=650,highlightthickness=1,highlightbackground='teal')
main_frame.grid(pady=20,padx=50)
main_frame.pack_propagate(False)
# add label to frame
wtd=Label(main_frame,text='Welcome To Dreamer',fg='red',font=('verdana',15),border=1,relief='sunken',width=20,height=1)
wtd.pack(pady=20)
# add label stu_name to main_frame
form_frame=Frame(main_frame,highlightbackground='black',highlightthickness=0.5)
form_frame.pack(pady=20,padx=50)

# add label stu_name to form_frame
stu_name=Label(form_frame,text='Student Name',font=('verdana',13))
stu_name.grid(padx=1,pady=0,row=0,column=0,sticky='w')
stu_name_entry=Entry(form_frame,width=35,font=('verdana',13))
stu_name_entry.grid(row=1,column=0,pady=4,padx=4,sticky='w')

# add label stu_mobile to form_frame
stu_mobile=Label(form_frame,text='Student Mobile',font=('verdana',13))
stu_mobile.grid(padx=1,pady=0,row=2,column=0,sticky='w')
stu_mobile_entry=Entry(form_frame,width=35,font=('verdana',13))
stu_mobile_entry.grid(row=3,column=0,pady=4,padx=4,sticky='w')

# add label stu_email to form_frame
stu_email=Label(form_frame,text='Student Email',font=('verdana',13))
stu_email.grid(padx=1,pady=0,row=4,column=0,sticky='w')
stu_email_entry=Entry(form_frame,width=35,font=('verdana',13))
stu_email_entry.grid(row=5,column=0,pady=4,padx=4,sticky='w')

# add label stu_roll to form_frame
stu_roll=Label(form_frame,text='Student Roll No',font=('verdana',13))
stu_roll.grid(padx=1,pady=0,row=6,column=0,sticky='w')
stu_roll_entry=Entry(form_frame,width=35,font=('verdana',13))
stu_roll_entry.grid(row=7,column=0,pady=4,padx=4,sticky='w')

# add label stu_class to form_frame
stu_class=Label(form_frame,text='Student Class',font=('verdana',13))
stu_class.grid(padx=1,pady=0,row=8,column=0,sticky='w')
stu_class_entry=Entry(form_frame,width=35,font=('verdana',13))
stu_class_entry.grid(row=9,column=0,pady=4,padx=4,sticky='w')

# add label stu_gender to form_frame
stu_gender=Label(form_frame,text='Student Gender',font=('verdana',13))
stu_gender.grid(padx=1,pady=0,row=10,column=0,sticky='w')

gender_var=StringVar()

stu_male_entry=Radiobutton(form_frame,variable=gender_var,text='Male',value='male',font=('verdana',11))
stu_male_entry.grid(row=10,column=0,pady=4,padx=150,sticky='w')

stu_female_entry=Radiobutton(form_frame,variable=gender_var,text='Female',value='female',font=('verdana',11))
stu_female_entry.grid(row=10,column=0,pady=4,padx=220,sticky='w')

stu_other_entry=Radiobutton(form_frame,variable=gender_var,text='Other',value='other',font=('verdana',11))
stu_other_entry.grid(row=10,column=0,pady=4,padx=310,sticky='w')


# upload button
stu_image=Button(form_frame,text='Upload Image',font=('verdana',13),command=upload_image)
stu_image.grid(padx=1,pady=4,row=11,column=0,sticky='w')

# image label
stu_image_lable=Label(form_frame,text='No Image Selected',font=('verdana',13))
stu_image_lable.grid(padx=150,pady=0,row=11,column=0,sticky='w')

# upload docs
stu_docs=Button(form_frame,text='Upload Docs',font=('verdana',13),width=11,command=upload_docs)
stu_docs.grid(padx=1,pady=4,row=12,column=0,sticky='w')

# docs label
stu_docs_lable=Label(form_frame,text='No Docs Found',font=('verdana',13))
stu_docs_lable.grid(padx=180,pady=0,row=12,column=0,sticky='w')

def connect_mysql():
    mysql_con=mysql.connector.connect(host="localhost",user="root",password="root",database="STUDENT_DATA")
    return mysql_con

def save():
    con=connect_mysql()
    cur=con.cursor()
    stu_name1=stu_name_entry.get()
    stu_mobile1=stu_mobile_entry.get()
    stu_email1=stu_email_entry.get()
    stu_roll1=stu_roll_entry.get()
    stu_class1=stu_class_entry.get()
    stu_gender1=gender_var.get()
    stu_img1=stu_image_lable.cget("text")
    stu_doc1=stu_docs_lable.cget("text")
    print(stu_name1,stu_class1,stu_roll1,stu_mobile1,stu_email1,stu_gender1,stu_img1,stu_doc1)

    try:
        data=f"""
        INSERT INTO STUDENT(STU_NAME,STU_CLASS,STU_ROLL,STU_MOB,STU_EMAIL,STU_GENDER,STU_IMG,STU_DOC)
        VALUES('{stu_name1}',
        '{stu_class1}',
        '{stu_roll1}',
        '{stu_mobile1}',
        '{stu_email1}',
        '{stu_gender1}',
        '{stu_img1}',
        '{stu_doc1}'
        )
        """
        cur.execute(data)
        con.commit()
        messagebox.showinfo('showinfo',"Data Inserted✅")
        window.destroy()
    except Exception as e:
        print(e)

        

    


# SAVE DATA BUTTON
save_data=Button(form_frame,text='Save',font=('verdana',12),width=10,background='green',fg="white",command=save)
save_data.grid(padx=260,pady=40,row=14,column=0,sticky='w')





window.mainloop()