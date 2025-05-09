from flask import Flask, render_template, redirect, url_for, flash
import sqlite3
import easy_db

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/jelentkezes")
def jelentkezes():
    
    return render_template("jelentkezes.html")

@app.route("/bead")
def bead():
    db = easy_db.sqlite(db_name="db/main.db", debug_mode=True)
    db.init_db()


if __name__ == '__main__':
    app.run(debug=True, port=8000)