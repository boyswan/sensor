UDP Udp;

unsigned char TxMsg[12] = { 1, 254, 1, 254, 1, 254, 43, 212, 71, 184, 3, 252 };

void setup() {
    Udp.begin(9000);
}

void loop() {
	if (WiFi.ready()) {
		Udp.beginPacket(IPAddress(10,0,0,3), 9000);
		// manipulate TxMsg array here
		// or put together your own array here
		Udp.write(TxMsg, 12);
		Udp.endPacket();
	}
}
