import random
from database import Database
from sqlalchemy.ext.declarative import declarative_base
from models import Samples
import time

db = Database()
session = db.get_session()
sample = Samples()
Base = declarative_base()
while (True):	
	sample.humidity = random.randint(1,30)
	sample.windspeed = random.randint(1,30)
	sample.temperature = random.randint(1,30)
	sample.pressure = random.randint(1,30)
	session.add(sample)
	session.commit()
	time.sleep(1)