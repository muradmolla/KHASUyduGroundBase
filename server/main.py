import asyncio
import websockets
import serial

ser = serial.Serial("COM3", 9600)

async def receive_data(websocket, path):
    while True:
        # Read data from the Arduino
        data = read_data_from_arduino()

        # Send the data to the WebSocket client
        await websocket.send(data)

# Define a function to read data from the Arduino
def read_data_from_arduino():
    # Implement your code to read data from the Arduino here
    line = ser.readline()
    return line

# Start the WebSocket server
start_server = websockets.serve(receive_data, "localhost", 8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()