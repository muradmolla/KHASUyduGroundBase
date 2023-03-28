import asyncio
import websockets
from queue import Queue

class SocketServer:
    def __init__(self, data_provider):
        self.data_provider = data_provider

    async def send_data(self, websocket, path):
        data_queue = Queue(maxsize=0)
        self.data_provider.bind_queue(data_queue)
        while not self.killed:

            if (not data_queue.empty()):
                # Get the latest data from the queue
                send = data_queue.get()

                # Send the latest data to the WebSocket client
                await websocket.send(send.to_json())

            else:
                await asyncio.sleep(0)
        self.thread.join()

    # Start the WebSocket server
    async def start_server(self):
        async with websockets.serve(self.send_data, "localhost", 8765):
            await asyncio.Future()  # run forever

    def start(self):
        asyncio.run(self.start_server())

