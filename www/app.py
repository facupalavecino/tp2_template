# Imports
from flask import Flask
from flask import render_template
from aux_pro import Process

p = Process()

app = Flask(__name__)

@app.route('/')
def index():
	if not p.is_running():
		p.start_process()
	else:
		print("Already working")
	return render_template('index.html')

if __name__ == "__main__":
	app.run(host='0.0.0.0', port=9999)