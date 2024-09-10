from tkinter import *
window=Tk()
window.resizable(0,0)
window.geometry('600x700')
window.title('STUDENT REGISTRATION')
window.iconbitmap(default='icon.ico')

main_frame=Frame(window,width=500,height=650,highlightbackground='red',highlightthickness=1)
main_frame.pack(pady=25)

window.mainloop()