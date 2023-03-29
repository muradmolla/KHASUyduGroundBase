import asyncio
import websockets
from queue import Queue
import handleSerialData
import telemetryServer
import excelWrite

data_provider = handleSerialData.HandleSerialData("COM3", 9600)
web_socket = telemetryServer.SocketServer(data_provider)
excel_write = excelWrite.ExcelWrite(data_provider)


try:
    web_socket.start()
        
except KeyboardInterrupt:
    data_provider.kill()
    excel_write.save()
    print("Server Terminated by the user.")
    exit()