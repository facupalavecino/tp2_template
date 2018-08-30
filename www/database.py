from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.exc import StatementError
from models import Samples

import os

class Database(object):
    #session = None
    db_user = os.getenv("DB_USER") if os.getenv("DB_USER") != None else "1234"
    db_pass = os.getenv("DB_PASS") if os.getenv("DB_PASS") != None else "1234"
    db_host = os.getenv("DB_HOST") if os.getenv("DB_HOST") != None else "db"
    db_name = os.getenv("DB_NAME") if os.getenv("DB_NAME") != None else "tp2"
    db_port = os.getenv("DB_PORT") if os.getenv("DB_PORT") != None else "3306"
    Base = declarative_base()
    
    def get_session(self):
      """Singleton of db connection

      Returns:
      [db connection] -- [Singleton of db connection]
      """
      #if self.session == None:
      connection = 'mysql+mysqlconnector://%s:%s@%s:%s/%s' % (self.db_user,self.db_pass,self.db_host,self.db_port,self.db_name)
      engine = create_engine(connection,echo=True)
      connection = engine.connect()
      Session = sessionmaker(bind=engine)
      self.session = Session()
      self.Base.metadata.create_all(engine)
      return self.session

      #Query que devuelve la última muestra
    def get_last_sample(self):
        #b1 = True;
        #while b1:
        #try:
        session = self.get_session()
        sample = session.query(Samples).order_by(Samples.id.desc()).first()
        #b1 = False
        #break
        #except StatementError:
        #session.rollback()
        session.close()
        if (sample):
            return sample.serialize()

    # Query que devuelve las últimas 10 muestras
    def get_samples(self):
        #b2 = True;
        #while b2:
        #try:
        session = self.get_session()
        samples = session.query(Samples).order_by(Samples.id.desc()).limit(10).all()
        #b2 = False
        #break
        #except StatementError:
        #session.rollback()
        session.close()
        return [s.serialize() for s in samples]

    