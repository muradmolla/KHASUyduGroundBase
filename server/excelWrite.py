import openpyxl
from queue import Queue

class ExcelWrite:
    def __init__(self, data_provider):
        self.wb = openpyxl.Workbook()
        self.sheet = self.wb.active

        self.data_provider = data_provider
        self.data_queue = Queue(maxsize=0)

        self.data_provider.bind_queue(self.data_queue)
        self.data_provider.bind_call(self.write)

        self.start_writing()

    def start_writing(self):
        title = (
            "Paket No",
            "Uydu Statüsü",
            "Hata Kodu",
            "Saat",
            "Basınç 1",
            "Basınç 2",
            "Yükseklik 1",
            "Yükseklik 2",
            "İrtifa Farkı",
            "İniş Hızı",
            "Sıcaklık",
            "Pil Gerilimi",
            "Gps Lat",
            "Gps Lon",
            "Gps Alt",
            "Pitch",
            "Roll",
            "Yaw",
            "Takım Kodu"
        )
        self.sheet.append(title)

    def write(self):
        while not self.data_queue.empty():
            self.sheet.append(self.data_queue.get().to_list())

    def save(self):
        self.wb.save("excel/test.xlsx")