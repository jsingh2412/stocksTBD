#!/bin/python

from flask import Flask, render_template
#render_template allows us to reference and use an external HTML script/code

import requests #interact with APIs

import json


app = Flask(__name__)


def get_database_info():
    #get database info and return it in some way
    database_name = "placeholder"
    return

def get_website_info():
    #get request from website for some sort of information
    website_request = "placeholder"
    return

@app.route("/")
def index():
    #call get_database_info function with info on how to access database

    #manipulate data in whatever way it needs to be manipulated before sending it off to website
    manipulate = "this is manipulated data"
    return manipulate
    #return render_template("tbd-access.html", information, that, we, want, sent, to, website)


app.run(host="0.0.0.0", port=5001)
