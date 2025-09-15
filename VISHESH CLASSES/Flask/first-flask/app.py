from flask import Flask,render_template
app=Flask(__name__)

@app.route("/")
def Home():
    s=""
    for i in range(1,11):
        s+=f"<li>2 x {i} = {2*i}</li>"
    return f" {s} "

@app.route("/img")
def Image():
    return render_template("Home.html")

app.run()