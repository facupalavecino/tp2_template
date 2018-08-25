import random
from database import Database
import time

db = Database()
session = db.get_session()
while (True):
	print (random.randint(1,101))
	temperature= random.randint(1,30)
	humidity= random.randint(50,90)
	windspeed= random.randint(5,35)
	pressure= random.randint(1,50) #cambiar los valores a valores correspondientes
	session.add(temperature)
	session.add(humidity)
	session.add(windspeed)
	session.add(pressure)
	session.commit()
	time.sleep(1)