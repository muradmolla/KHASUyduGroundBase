import serial
import threading
import json

class HandleSerialData:
    def __init__(self, port, baud):
        self.port = port
        self.baud = baud
        self.ser = serial.Serial(port, baud)
        print("Connection established with device in port", port, "with", baud, "baud rate.")
        self.data = []
        self.packet_loss = 0
        self.killed = False
        # Start the thread that reads data from the Arduin
        self.thread = threading.Thread(target=self.read_data_from_arduino)
        self.thread.start()
        self.binders_queue =[]
        self.binders_call = []

    def read_data_from_arduino(self):
        while not self.killed:
            # Put the latest data into the queue
            data = SerialData(self.ser.readline())
            if (data.lost_packet):
                self.packet_loss += 1
                print("Packet loss: ", self.packet_loss)
            else:
                self.new_data(data)

    def bind_queue(self, queue):
        #We any queue given to us to our queue array
        self.binders_queue.append(queue)
        #We provide the previous data to the binder
        for i in self.data:
            queue.put(i)

    def new_data(self, data):
        self.data.append(data)
        #broadcast new data to the all binders
        for binder in self.binders_queue:
            binder.put(data)
        for call in self.binders_call:
            call()

    def bind_call(self, fnc):
        self.binders_call.append(fnc)

    def kill(self):
        self.killed = True
        self.thread.join()

class SerialData:
    def __init__(self, data):
        self._raw_data = data
        self.lost_packet = False
        self.interpret()

    def interpret(self):
        try:
            data = self._raw_data.decode("utf-8").strip().split(',')
            self.data = {
                "packet": data[0],
                "status": data[1],
                "error_code": data[2],
                "time": data[3],
                "a_pressure": data[4],
                "t_pressure": data[5],
                "a_height": data[6],
                "t_height": data[7],
                "height_difference": data[8],
                "descend_speed": data[9],
                "temperature": data[10],
                "voltage": data[11],
                "gps_latitude": data[12],
                "gps_longitude": data[13],
                "gps_height": data[14],
                "pitch": data[15],
                "roll": data[16],
                "yaw": data[17],
                "team_no": data[18]
            }

                
        except UnicodeDecodeError:
            self.lost_packet = True
        
    def to_json(self):
        return json.dumps(self.data)
    
    def to_list(self):
        return [v for k, v in self.data.items()]

