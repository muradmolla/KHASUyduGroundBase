import asyncio
import websockets
from queue import Queue
import handleSerialData
import telemetryServer
import excelWrite

data_provider = handleSerialData.HandleSerialData("COM3", 9600)
#web_socket = socketServer.SocketServer(data_provider)
excel_write = excelWrite.ExcelWrite(data_provider)


try:
    True
    #web_socket.start()
    while True:
        test = input()
        print(test)
        
except KeyboardInterrupt:
    # Gracefully stop the WebSocket server and terminate the Python process
    data_provider.kill()
    excel_write.save()
    print("Interrupted")
    exit()