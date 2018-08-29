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


#def promedios():
#	tprom, hprom, wpprom, pprom = 0
#	samples = db.get_samples()
#	length = len(samples)
#	if(length>0):
#		for s in samples:
#			tprom += s["temperature"]
#			hprom += s["humidity"]
#			wpprom += s["windspeed"]
#			pprom += s["pressure"]
#		tprom = (tprom /length)
#		hprom = (hprom /length)
##		ppprom = (ppprom /length)
#	return render_template ('index.html', samples = samples, tprom = tprom,
#							hprom = hprom, wpprom = wpprom, pprom = pprom)

#@app.route('/info/')
#def ultimos_valores():
#	last_sample = db.get_last_sample()


#	tprom = 0
#	hprom = 0
#	wsprom = 0
#	pprom = 0
#	samples = db.get_samples()
#	length = len(samples)
#	if(length>0):
#		for s in samples:
#			tprom += s["temperature"]
#			hprom += s["humidity"]
#			wsprom += s["windspeed"]
#			pprom += s["pressure"]
#		tprom = (tprom /length)
#		hprom = (hprom /length)
#		pprom = (pprom /length)
#		wsprom = (wsprom /length)


#	return render_template('info.html', last_sample = last_sample, samples = samples, tprom = tprom,
#							hprom = hprom, wsprom = wsprom, pprom = pprom)

@app.route('/info/')
def vivo():
	sample = db.get_last_sample()
	return render_template('info.html',sample = sample) 

@app.route('/last-sample/', methods = ["GET"])
def get_lastsample():
    sample = db.get_last_sample()
    return jsonify(sample)  


