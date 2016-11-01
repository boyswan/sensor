#include "Particle.h"

SYSTEM_THREAD(ENABLED);
SYSTEM_MODE(MANUAL);

IPAddress SERVER_IP = IPAddress(192, 168, 0, 11);
int SERVER_PORT = 9000;

TCPClient client;

void setup() {
	Serial.begin(9600);
	WiFi.on();
	WiFi.connect();
}

void loop() {

	if (WiFi.ready()) {

		if (!client.connected()) {
      client.connect(SERVER_IP, SERVER_PORT);
    }

		if (client.connected()) {
			char data[256];

			int body = rand() % 65536;

			snprintf(data, sizeof(data), "{\"body\":%d}", body);

			client.printf("%s\n", data);

			Serial.println(data);
		}

	}

    delay(3000);

}
