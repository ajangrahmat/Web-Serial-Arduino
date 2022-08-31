#include <SoftwareSerial.h>
SoftwareSerial bluetooth(10, 11); // RX | TX

void setup() {
  Serial.begin(9600);
  bluetooth.begin(9600);
}

void loop() {
  if (bluetooth.available()) {
    String data = bluetooth.readString();
    Serial.println(data);
  }
}
