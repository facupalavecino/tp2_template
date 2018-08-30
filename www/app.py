# Imports
from flask import Flask
from flask import render_template
from aux_pro import Process
from flask import redirect
from database import Database
from flask import jsonify

app = Flask(__name__)

p = Process()
db = Database()



@app.route('/')
def index():
	if not p.is_running():
		p.start_process()
	else:
		print("Already working")

	return render_template('index.html')

if __name__ == "__main__":
	app.run(host='0.0.0.0', port=9999)


@app.route('/avg/', methods = ["GET"])
def ultimos_valores():
	tempAvg = 0
	humiAvg = 0
	windAvg = 0
	presAvg = 0
	samples = db.get_samples()
	length = len(samples)
	if(length>0):
		for s in samples:
			tempAvg += s["temperature"]
			humiAvg += s["humidity"]
			windAvg += s["windspeed"]
			presAvg += s["pressure"]
		tempAvg = (tempAvg /length)
		humiAvg = (humiAvg /length)
		windAvg = (windAvg /length)
		presAvg = (presAvg /length)		
	return jsonify(samples, tempAvg, humiAvg, windAvg, presAvg)


@app.route('/last/', methods = ["GET"])
def get_lastsample():
    sample = db.get_last_sample()
    return jsonify(sample)



