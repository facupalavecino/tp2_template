import os
import signal
import subprocess


class Process(object):
    process = None

    """start_process: start process 
    if there isn't any other process started
    
    Returns:
        [int] -- Return the pid (process id) if the process start correctly / None if there is a process started before
    """

    def start_process(self):
        if self.process == None:
            print ("WorkingWorkingWorkingWorkingWorkingWorkingWorkingWorkingWorkingWorkingWorkingWorkingWorkingWorkingWorkingWorkingWorkingWorkingWorkingWorkingWorkingWorkingWorkingWorkingWorkingWorkingWorkingWorkingWorkingWorkingWorking")
            cmd = "python process.py"
            self.process = subprocess.Popen(cmd.split(), preexec_fn=os.setsid)
            return self.process.pid
        return None


    def is_running(self):
        return self.process != None
    