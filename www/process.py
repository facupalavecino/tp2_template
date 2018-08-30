import random
from database import Database
from sqlalchemy.ext.declarative import declarative_base
from models import Samples
import time

db = Database()
session = db.get_session()
sample = Samples()

while (True):
	print("Process working")
	h = random.randint(1,99)
	w = random.randint(0,150)
	t = random.randint(-30,50)
	p = random.randint(1000,1014)
	sample = Samples(temperature=t, humidity=h, windspeed=w, pressure=p)
	session.add(sample)
	session.commit()
	time.sleep(1)