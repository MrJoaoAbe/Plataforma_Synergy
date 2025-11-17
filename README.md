# **PLATAFORMA SYNERGY**

A **Plataforma SYNERGY** integra **rede social profissional** com **monitoramento em tempo real via IoT**, ajudando trabalhadores a manterem **produtividade saudável**, reduzindo riscos provenientes do uso prolongado de tecnologias e condições inadequadas de trabalho.

---

# 📌 **Problema**

A chegada acelerada de novas tecnologias ao ambiente corporativo traz benefícios importantes — como automatização e aumento de produtividade — mas também gera desafios sérios:

* Substituição de funções por automação
* Maior carga cognitiva
* Exposição excessiva a telas
* Adoecimento físico e emocional

Assim, o futuro do trabalho exige soluções que equilibrem **eficiência**, **saúde** e **bem-estar**.

---

# 🎯 **Oportunidade Identificada**

O uso intensivo de tecnologia e dispositivos digitais está associado a efeitos como:

* Nomofobia
* Depressão
* Redução de QI
* Estresse elevado

Além disso, variáveis ambientais inadequadas (temperatura, umidade etc.) impactam diretamente a produtividade.

➡️ **A oportunidade**: Criar uma plataforma que conecte profissionais e, simultaneamente, monitore fatores de saúde ocupacional.

---

# 🚀 **Proposta: Plataforma SYNERGY**

A SYNERGY é uma **rede social colaborativa** voltada para trabalhadores, com integração a dispositivos **IoT** para monitoramento em tempo real.

### **Funcionalidades Sociais**

* Postagens e comentários
* Seguir usuários
* Avaliação dos melhores profissionais
* Mensagens diretas

### **Monitoramento IoT**

* 🌡️ **Temperatura**
* 💧 **Umidade**
* ❤️ **Batimentos cardíacos**
* 🖥️ **Tempo de exposição a telas**

A SYNERGY une **conexão profissional + saúde + produtividade**.

---

# 🧭 **Funcionalidades da Plataforma**

### 🔐 **Login & Cadastro**

---

### 🏠 **HOME**

* Visualizar e criar postagens
* Acesso rápido ao perfil
* Filtrar por autor/título
* Listagem dos usuários mais bem avaliados

---

### 👤 **MEU PERFIL**

* Ver todas as informações cadastradas
* Acessar o Dashboard
* Sair da conta

---

### 📊 **DASHBOARD**

Monitora em tempo real:

* Umidade
* Temperatura
* Batimentos cardíacos
* Tempo de tela

---

### 👥 **Funcionários**

* Listar todos os trabalhadores
* Filtrar por nome / área / local
* Ver informações completas
* Enviar mensagens diretas

---

### 📄 **Exibindo (Perfil detalhado)**

* Ver dados completos do usuário
* Seguir
* Avaliar/Estrela
* Enviar mensagens

---

### ⭐ **Seguindo**

* Ver lista de usuários seguidos
* Acessar perfil
* Deixar de seguir

---

### 💬 **Mensagens**

* Visualizar histórico
* Abrir conversas
* Enviar e receber mensagens diretas

---

# 👤 **Usuário de Teste**

```
Email: joaovictorsouzaabe@gmail.com
Senha: 123
```

---

# 🛠️ **Tecnologias Utilizadas**

## **Software**

* Vite + React
* TailwindCSS
* MockAPI
* Wokwi
* Node-RED
* GitHub

## **Hardware**

* ESP32
* DHT22
* Potenciômetro
* HC-SR04

---

# 🌐 **APIs Mock utilizadas**

* [https://6914d5903746c71fe049c8c6.mockapi.io/api/v1/usuarios](https://6914d5903746c71fe049c8c6.mockapi.io/api/v1/usuarios)
* [https://6914d5903746c71fe049c8c6.mockapi.io/api/v1/mensagens](https://6914d5903746c71fe049c8c6.mockapi.io/api/v1/mensagens)

---

# ▶️ **Como executar o projeto**

## 🔽 1. Clonar repositório

```bash
git clone https://github.com/MrJoaoAbe/Plataforma_Synergy.git
```

---

## 📦 2. Instalar dependências

```bash
npm i

npm install react-router-dom
npm install tailwindcss @tailwindcss/vite
npm install chart.js
npm install lucide-react
npm install react-chartjs-2
npm install @fortawesome/free-solid-svg-icons
npm install @fortawesome/react-fontawesome
```

---

## ▶️ 3. Iniciar o projeto

```bash
npm run dev
```

---

# 🔧 **Simulador IoT (WOKWI)**

Simulador:
[https://wokwi.com/projects/447622993547253761](https://wokwi.com/projects/447622993547253761)

### Rede WiFi padrão do Wokwi

```cpp
const char* default_SSID = "Wokwi-GUEST";
const char* default_PASSWORD = "";
```

### Servidor MQTT configurado

```cpp
const char* default_BROKER_MQTT = "44.223.43.74";
const int   default_BROKER_PORT = 1883;
```

### Após configurar → clique em **START THE SIMULATION**

![ResultadoDashboard](./imagensIOT/DashboardIOT.png)

### 📌 **NOTA IMPORTANTE**
Em muitos casos para a API do MOCKAPI funcionar da forma correta é necessário abri-la no navegador

```cp
https://6914d5903746c71fe049c8c6.mockapi.io/api/v1/usuarios
```

---

# 🏗️ **Recriando o Servidor AWS do Zero (EC2)**

### Passos resumidos:

1. Acessar: [https://aws.amazon.com/pt/ec2/](https://aws.amazon.com/pt/ec2/)
2. Criar instância Ubuntu
3. Tipo t3
4. Criar chave **.ppk**
5. Liberar portas:

**1883, 1026, 4041, 8666, 27017 e ICMP IPv4**

![Portas](./imagensIOT/PORTAS_A_SEREM_LIBERADAS_EC2.png)

6. Salvar o IP da instância

---

# 🖥️ **Acessando via PuTTY**

Inserir **IP** e **chave**:

![putty1](./imagensIOT/puTTY%20inicial.png)
![putty2](./imagensIOT/puTTY%20chave.png)

### Comandos necessários

```bash
sudo apt update 
sudo apt-get install net-tools 
ifconfig 
sudo apt install git
sudo apt update
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
sudo apt update
apt-cache policy docker-ce
sudo apt install docker-ce
sudo systemctl status docker
git clone https://github.com/fabiocabrini/fiware
cd fiware
sudo docker compose up -d 
sudo docker stats
```

---

# 📬 **Configuração do Postman**

1. Baixe o JSON:
   [https://github.com/fabiocabrini/fiware/blob/main/FIWARE%20Descomplicado.postman_collection.json](https://github.com/fabiocabrini/fiware/blob/main/FIWARE%20Descomplicado.postman_collection.json)

2. Abra no Postman

3. Substitua a variável **URL** pelo IP da instância

4. Teste os 3 endpoints GET

![postman](./imagensIOT/POSTMAN.png)

---

# 🔀 **Fluxo Node-RED**

![NodeRED](./imagensIOT/NodeRED.png)

**Principais blocos:**

* MQTT IN → topic `/TEF/device009/attrs/p`
* JSON
* WRITE FILE → *monitoramentoSynergy.txt*
* CHANGE → umidade / temperatura / bpMin / presenca
* HTTP IN → `/monitoramentoSynergy`
* READ FILE
* HTTP RESPONSE

---

# 📡 **Tópico MQTT**

O tópico `/TEF/device009/attrs/p` envia:

```json
{"umidade":10,"temperatura":51.1,"bpMin":119,"presenca":"Ausente"}
```

Esses dados alimentam o **Dashboard SYNERGY**.

---

# 📚 **Bibliotecas Arduino**

* `<ArduinoJson.h>`
* `"DHT.h"`
* `<Wire.h>`
* `<WiFi.h>`
* `<PubSubClient.h>`

---

# 🔌 **Montagem do Circuito**

![sensores](./imagensIOT/SensoresIOT.png)

---

# 💻 **Código ESP32 Completo**

````c
//Bibliotecas
#include <ArduinoJson.h> 
#include "DHT.h"
#include <Wire.h>

//Server
#include <WiFi.h>
#include <PubSubClient.h>

/***********************
 * CONFIGURAÇÕES MQTT
 ***********************/
const char* default_SSID = "Wokwi-GUEST";
const char* default_PASSWORD = "";
const char* default_BROKER_MQTT = "44.223.43.74";
const int   default_BROKER_PORT = 1883;

const char* default_TOPICO_SUBSCRIBE = "/TEF/device009/cmd";
const char* default_TOPICO_PUBLISH_1 = "/TEF/device009/attrs";
const char* default_TOPICO_PUBLISH_2 = "/TEF/device009/attrs/p";

const char* default_ID_MQTT = "fiware_009";
const int default_D4 = 2;

const char* topicPrefix = "device009";

// Variáveis editáveis
char* SSID = const_cast<char*>(default_SSID);
char* PASSWORD = const_cast<char*>(default_PASSWORD);
char* BROKER_MQTT = const_cast<char*>(default_BROKER_MQTT);
int   BROKER_PORT = default_BROKER_PORT;
char* TOPICO_SUBSCRIBE = const_cast<char*>(default_TOPICO_SUBSCRIBE);
char* TOPICO_PUBLISH_1 = const_cast<char*>(default_TOPICO_PUBLISH_1);
char* TOPICO_PUBLISH_2 = const_cast<char*>(default_TOPICO_PUBLISH_2);
char* ID_MQTT = const_cast<char*>(default_ID_MQTT);
int   D4 = default_D4;

WiFiClient espClient;
PubSubClient MQTT(espClient);

char EstadoSaida = '0';

// SENSORES 
#define DHTPIN        15
#define DHTTYPE       DHT22
#define SENSOR_CARDIACO_POT 34
const int trigPin = 2;
const int echoPin = 4;

// VARIÁVEIS
int VALOR_BRUTO_SENSOR = 0;
int VALOR_CONVERTIDO_BPM = 0;

float duration, distance;
String presenca = "Ausente";

DHT dht(DHTPIN, DHTTYPE);

// Inicialização
void initSerial() {
  Serial.begin(9600);
}

void reconectWiFi() {
  if (WiFi.status() == WL_CONNECTED) return;

  WiFi.begin(SSID, PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(100);
    Serial.print(".");
  }

  Serial.println("\nConectado ao Wi-Fi. IP: " + WiFi.localIP().toString());
  digitalWrite(D4, LOW);
}

void initWiFi() {
  delay(10);
  Serial.println("------Conexao WI-FI------");
  reconectWiFi();
}

void initMQTT() {
  MQTT.setServer(BROKER_MQTT, BROKER_PORT);
}

void reconnectMQTT() {
  while (!MQTT.connected()) {
    Serial.print("Tentando conectar ao broker...");
    if (MQTT.connect(ID_MQTT)) {
      Serial.println("Conectado!");
      MQTT.subscribe(TOPICO_SUBSCRIBE);
    } else {
      Serial.println("Falha! Tentando em 2s.");
      delay(2000);
    }
  }
}

void VerificaConexoesWiFIEMQTT() {
  if (!MQTT.connected()) reconnectMQTT();
  reconectWiFi();
}

//Setup
void setup() {
  initSerial();

  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);

  initWiFi();
  initMQTT();

  dht.begin();
}

// Loop
void loop() {
  VerificaConexoesWiFIEMQTT();
  MQTT.loop();

// Medições dos Sensores

  // DHT
  float umidade = dht.readHumidity();
  float temperatura = dht.readTemperature();

  // BPM
  VALOR_BRUTO_SENSOR = analogRead(SENSOR_CARDIACO_POT);
  VALOR_CONVERTIDO_BPM = map(VALOR_BRUTO_SENSOR, 0, 4095, 0, 220);

  // ULTRASSOM
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);

  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  duration = pulseIn(echoPin, HIGH);
  distance = (duration * 0.0343) / 2;

  if (distance < 100) presenca = "Presente";
  else presenca = "Ausente";

// JSON PARA MQTT
  StaticJsonDocument<256> doc;
  doc["umidade"] = umidade;
  doc["temperatura"] = temperatura;
  doc["bpMin"] = VALOR_CONVERTIDO_BPM;
  doc["presenca"] = presenca;

  char buffer[256];
  serializeJson(doc, buffer);

  MQTT.publish(TOPICO_PUBLISH_2, buffer);

  Serial.print("JSON enviado: ");
  Serial.println(buffer);

  delay(1000);
}

````

---

# 🔗 **Links Importantes**

* Vídeo explicativo →
* Repositório GitHub →
* Deploy da plataforma →
* Simulação WOKWI →

---

# 👥 **Autores**

* **Henry Andrade Browne – RM: 562622**
* **João Victor de Souza Abe – RM: 561446**
* **Mariana Souza França – RM: 562353**

---
