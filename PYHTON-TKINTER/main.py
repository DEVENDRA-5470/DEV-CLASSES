from tkinter import *
from tkinter import filedialog
from tkinter import messagebox
from PIL import Image,ImageTk
window=Tk()
window.title('STUDENT REGISTRATION')
window.resizable(0,0)
window.geometry('600x700')

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
    file_path=filedialog.askopenfilename(filetypes=[('All files','.')])
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

stu_male_entry=Radiobutton(form_frame,text='Male',font=('verdana',11))
stu_male_entry.grid(row=10,column=0,pady=4,padx=150,sticky='w')

stu_female_entry=Radiobutton(form_frame,text='Female',font=('verdana',11))
stu_female_entry.grid(row=10,column=0,pady=4,padx=220,sticky='w')

stu_other_entry=Radiobutton(form_frame,text='Other',font=('verdana',11))
stu_other_entry.grid(row=10,column=0,pady=4,padx=310,sticky='w')

# upload button
stu_image=Button(form_frame,text='Upload Image',font=('verdana',13),command=upload_image)
stu_image.grid(padx=1,pady=4,row=11,column=0,sticky='w')

# image label
stu_image_lable=Label(form_frame,text='No Image Selected',font=('verdana',13))
stu_image_lable.grid(padx=150,pady=0,row=11,column=0,sticky='w')

# upload docs
stu_docs=Button(form_frame,text='Upload Docs',font=('verdana',13),command=upload_docs)
stu_docs.grid(padx=1,pady=4,row=12,column=0,sticky='w')

# docs label
stu_docs_lable=Label(form_frame,text='No Docs Found',font=('verdana',13))
stu_docs_lable.grid(padx=150,pady=0,row=12,column=0,sticky='w')

window.mainloop()