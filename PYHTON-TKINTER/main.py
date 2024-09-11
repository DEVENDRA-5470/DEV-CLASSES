from tkinter import *
window=Tk()
window.title('STUDENT REGISTRATION')
window.resizable(0,0)
window.geometry('600x700')
# add frame to window
main_frame=Frame(window,width=500,height=650,highlightthickness=1,highlightbackground='teal')
main_frame.grid(pady=20,padx=50)
main_frame.pack_propagate(False)
# add label to frame
wtd=Label(main_frame,text='Welcome To Dreamer',fg='red',font=('verdana',15),border=1,relief='sunken',width=20,height=1)
wtd.pack(pady=20)
# add label stu_name to main_frame
form_frame=Frame(main_frame,highlightbackground='black',highlightthickness=0.5,)
form_frame.pack(pady=20,padx=50,fill='x')

# add label stu_name to form_frame
stu_name=Label(form_frame,text='Student Name',font=('verdana',13))
stu_name.grid(padx=1,pady=0,row=0,column=0,sticky='w')
stu_name_entry=Entry(form_frame,width=35,font=('verdana',13))
stu_name_entry.grid(row=1,column=0,pady=4,padx=4)

# add label stu_mobile to form_frame
stu_mobile=Label(form_frame,text='Student Mobile',font=('verdana',13))
stu_mobile.grid(padx=1,pady=0,row=2,column=0,sticky='w')
stu_mobile_entry=Entry(form_frame,width=35,font=('verdana',13))
stu_mobile_entry.grid(row=3,column=0,pady=4,padx=4)

# add label stu_email to form_frame
stu_email=Label(form_frame,text='Student Email',font=('verdana',13))
stu_email.grid(padx=1,pady=0,row=4,column=0,sticky='w')
stu_email_entry=Entry(form_frame,width=35,font=('verdana',13))
stu_email_entry.grid(row=5,column=0,pady=4,padx=4)



window.mainloop()