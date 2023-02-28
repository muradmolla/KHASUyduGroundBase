#include <TimeLib.h>
#define TAKIM_NO 196712

struct Telemetri_Paketi {
  unsigned int paket_no = 1;  //BUNU KONUŞALIM RASPİ'DEN SAYILMASI LAZIM
  bool statu[3] = { 0, 0, 0 };
  bool hata_kodu[5];
  unsigned long saat;
  float a_basinc;
  float t_basinc;
  float a_yukseklik;
  float t_yukseklik;
  float irtifa_farki;
  float inis_hizi;
  float sicaklik;
  float pil_gerilimi;
  float gps_enlem;
  float gps_boylam;
  float gps_yukseklik;
  float pitch;
  float roll;
  float yaw;
} telemetri;

void setup() {
  setTime(17,19,0,28,2,2023);
  Serial.begin(9600);
  randomSeed(analogRead(0));
}

void loop() {
  telemetry_Randomizer(telemetri);
  printTelemetry(telemetri);
  delay(1000);
  telemetri.paket_no++;
}

void telemetry_Randomizer(Telemetri_Paketi& telemetry) {

  telemetry.statu[0] = random(0,10) < 1 ? 1 : 0;
  telemetry.statu[1] = random(0,10) < 1 ? 1 : 0;
  telemetry.statu[2] = random(0,10) < 1 ? 1 : 0;

  telemetry.hata_kodu[0] = random(0,30) < 1 ? 1 : 0;
  telemetry.hata_kodu[1] = random(0,30) < 1 ? 1 : 0;
  telemetry.hata_kodu[2] = random(0,30) < 1 ? 1 : 0;
  telemetry.hata_kodu[3] = random(0,30) < 1 ? 1 : 0;
  telemetry.hata_kodu[4] = random(0,30) < 1 ? 1 : 0;

  telemetry.saat = now();
  telemetry.a_basinc = ((float)random(3200,4500))/3.0;
  telemetry.t_basinc = ((float)random(3200,4500))/3.0;


  telemetry.a_yukseklik = ((float)random(0,2250))/3.0;
  telemetry.t_yukseklik = ((float)random(0,2250))/3.0;


  telemetry.irtifa_farki = abs(telemetry.a_yukseklik - telemetry.t_yukseklik);

  telemetry.inis_hizi = ((float)random(0,42))/3.0;


  telemetry.sicaklik = ((float)random(30,90))/3.0;

  telemetry.pil_gerilimi = ((float)random(9,15))/3.0;

  telemetry.gps_enlem = ((float)random(0,100000000))/1000000.0;
  telemetry.gps_boylam = ((float)random(0,100000000))/1000000.0;
  telemetry.gps_yukseklik = ((float)random(0,2250))/3.0;

  telemetry.pitch = ((float)random(0,360))/2.0;
  telemetry.roll = ((float)random(0,360))/2.0;
  telemetry.yaw = ((float)random(0,360))/2.0;
}

void printTelemetry(Telemetri_Paketi telemetry) {
  Serial.print(telemetry.paket_no);
  Serial.print(',');
  //
  Serial.print(bit_to_string(telemetry.statu, 3));
  Serial.print(',');
  //
  Serial.print(bit_to_string(telemetry.hata_kodu,5));
  Serial.print(',');
  //
  Serial.print(telemetry.saat);
  Serial.print(',');
  //
  Serial.print(telemetry.a_basinc);
  Serial.print(',');
  //
  Serial.print(telemetry.t_basinc);
  Serial.print(',');
  //
  Serial.print(telemetry.a_yukseklik);
  Serial.print(',');
  //
  Serial.print(telemetry.t_yukseklik);
  Serial.print(',');
  //
  Serial.print(telemetry.irtifa_farki);
  Serial.print(',');
  //
  Serial.print(telemetry.inis_hizi);
  Serial.print(',');
  //
  Serial.print(telemetry.sicaklik);
  Serial.print(',');
  //
  Serial.print(telemetry.pil_gerilimi);
  Serial.print(',');
  //
  Serial.print(telemetry.gps_enlem);
  Serial.print(',');
  //
  Serial.print(telemetry.gps_boylam);
  Serial.print(',');
  //
  Serial.print(telemetry.gps_yukseklik);
  Serial.print(',');
  //
  Serial.print(telemetry.pitch);
  Serial.print(',');
  //
  Serial.print(telemetry.roll);
  Serial.print(',');
  //
  Serial.print(telemetry.yaw);
  Serial.print(',');
  //
  Serial.println(TAKIM_NO);
}

String bit_to_string(bool bits[], int size) {
  String str = "";
  for (int i = 0; i < size; i++) {
    str += bits[i] ? "1" : "0";
  }
  return str;
}
