int led1 = D0;
int led2 = D7;

int int_val;
int i = 0;

void setup() {
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  Particle.variable("int_val", &int_value, INT);
  Particle.function("int_fun",int_function);
}


void loop() {
  int_value = i;
  i = i + 1;

  digitalWrite(led1, HIGH);
  digitalWrite(led2, HIGH);

  delay(500);

  digitalWrite(led1, LOW);
  digitalWrite(led2, LOW);

  delay(500);

}

int int_function() {
  return 1000;
}
