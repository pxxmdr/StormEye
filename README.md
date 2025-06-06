# StormEye Mobile

## 📌 Descrição da Solução

Em um mundo cada vez mais impactado por eventos climáticos extremos, **estar preparado para enfrentar catástrofes naturais deixou de ser uma opção — tornou-se uma necessidade**. Pensando nisso, desenvolvemos o **StormEye**, um aplicativo mobile com o propósito de **informar, alertar e salvar vidas**.

A proposta nasceu da percepção de uma **lacuna na comunicação de risco**: muitas pessoas não sabem como agir diante de situações como **tornados, enchentes, terremotos, tempestades severas** e diversas outras catástrofes. O StormEye surge como uma **ferramenta acessível e intuitiva** que une **alertas em tempo real** a **guias de sobrevivência detalhados**, garantindo que os usuários saibam exatamente o que fazer **antes, durante e depois** de um desastre.

Mais do que um app, o StormEye é um **aliado na proteção da vida**. Por meio de uma **interface clara**, **navegação simplificada** e **conteúdo educativo cuidadosamente estruturado**, buscamos oferecer **segurança, autonomia e informação confiável** a qualquer pessoa que esteja em uma zona de risco — **mesmo sem conexão com a internet**.

Nosso objetivo é **simples e urgente**: **minimizar danos, preservar vidas e democratizar o acesso à preparação diante do imprevisível**.


## 🌐 Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) (simula login local)
- [React Navigation](https://reactnavigation.org/)
- [Expo Linear Gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/) (visual)

## 👤 Autenticação simulada

- **Usuário: admin / Senha: 123** → acesso ao painel administrativo para gerenciar catástrofes
- **Usuário: cliente / Senha: 123** → acesso às telas de consulta de alertas e informações

## 🔍 Funcionalidades principais

### 🔐 Login / Logout
- Acesso baseado no tipo de usuário (admin ou cliente)
- Autenticação local com `AsyncStorage`

### ⚖️ Admin
- Cadastro de novas catástrofes
- Atualização e remoção por ID
- Redirecionamento automático para tela de alertas após operações

### ⚡ Cliente
- Consulta de alertas em tempo real (GET na API)
- Visualização em cards responsivos
- Acesso a cartilhas educativas sobre cada tipo de catástrofe

## 📁 Estrutura de pastas

```
StormEye (mobile)
├── assets/                # Imagens e logos
├── components/            # NavBars e AlertCards reutilizáveis
├── screens/               # Telas principais (Login, Register, AlertScreen, etc)
├── styles/                # Arquivo colors.ts
├── App.tsx                # Navegação principal
```

## 🚀 Como executar localmente

### 📦 Front-end (React-Native)
1. Clone o repositório:
```bash
git clone https://github.com/pxxmdr/StormEye.git
cd StormEye
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npx expo start
```

4. Escaneie o QR Code com o aplicativo Expo Go

### 📦 Backend (Spring Boot)
```bash
# Clone o repositório
git clone https://github.com/ThamiresRC/StormEye.git

# Acesse a pasta e rode o backend
cd StormEye
./mvnw spring-boot:run
```

## 📚 Comunicando com a API

- O front faz requisições `fetch` para a API em Java (ver backend)
- Endpoints utilizados:
  - `GET /catastrofes`  → lista todos os alertas
  - `POST /catastrofes` → cria novo alerta (admin)
  - `PUT /catastrofes/{id}` → atualiza alerta (admin)
  - `DELETE /catastrofes/{id}` → remove alerta (admin)

> ✅ Obs: a base da URL da API está definida em cada tela, como por exemplo:
> ```ts
> const API_BASE = 'http://<ip_local>:8080';
> ```
> Lembre-se de substituir com o IP correto da máquina onde a API estiver rodando.

---

## 💼 Integrantes

- Pedro Henrique Martins dos Reis (RM555306)
- Thamires Ribeiro Cruz (RM558128)
- Adonay Rodrigues da Rocha (RM558782)
