# 🎭 Playwright Web Automation — SauceDemo

Projeto de automação de testes E2E utilizando **Playwright** com **TypeScript**, aplicando o padrão **Page Object Model (POM)** e integração com **CI/CD via GitHub Actions**.

---

## 📋 Sobre o Projeto

Automação dos principais fluxos da aplicação [SauceDemo](https://www.saucedemo.com/), uma loja virtual criada especificamente para prática de testes automatizados.

### Funcionalidades testadas

- ✅ Login (válido, inválido, usuário bloqueado)
- ✅ Listagem e ordenação de produtos
- ✅ Adição e remoção de itens do carrinho
- ✅ Fluxo completo de checkout
- ✅ Logout

---

## 🛠️ Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| [Playwright](https://playwright.dev/) | ^1.44.0 | Framework de automação |
| [TypeScript](https://www.typescriptlang.org/) | ^5.0.0 | Linguagem principal |
| [Node.js](https://nodejs.org/) | >= 18.x | Ambiente de execução |
| [Allure Report](https://allurereport.org/) | ^2.x | Relatório de testes |
| [GitHub Actions](https://github.com/features/actions) | — | Pipeline CI/CD |

---

## 📁 Estrutura do Projeto

```
📦 playwright-saucedemo
├── 📁 .github/
│   └── 📁 workflows/
│       └── ci.yml                  # Pipeline CI/CD
├── 📁 tests/
│   ├── 📁 e2e/
│   │   ├── login.spec.ts
│   │   ├── products.spec.ts
│   │   ├── cart.spec.ts
│   │   └── checkout.spec.ts
│   └── 📁 fixtures/
│       └── index.ts                # Fixtures customizadas
├── 📁 pages/                       # Page Objects
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
├── 📁 utils/
│   └── helpers.ts                  # Funções auxiliares
├── 📁 allure-results/              # Resultados brutos do Allure
├── 📁 allure-report/               # Relatório HTML gerado
├── playwright.config.ts
├── package.json
└── tsconfig.json
```

---

## ⚙️ Pré-requisitos

- Node.js >= 18.x instalado
- npm ou yarn

---

## 🚀 Como Instalar

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/playwright-saucedemo.git
cd playwright-saucedemo

# Instale as dependências
npm install

# Instale os browsers do Playwright
npx playwright install
```

---

## ▶️ Como Executar os Testes

```bash
# Rodar todos os testes
npx playwright test

# Rodar em modo headed (com interface gráfica)
npx playwright test --headed

# Rodar um arquivo específico
npx playwright test tests/e2e/login.spec.ts

# Rodar com tag específica
npx playwright test --grep @smoke

# Rodar em um browser específico
npx playwright test --project=chromium

# Modo debug (passo a passo)
npx playwright test --debug
```

---

## 📊 Relatório de Testes

### Playwright Report (nativo)
```bash
# Após rodar os testes, abra o relatório
npx playwright show-report
```

### Allure Report
```bash
# Rodar testes gerando resultados para o Allure
npx playwright test

# Gerar o relatório HTML
npx allure generate allure-results --clean -o allure-report

# Abrir o relatório no browser
npx allure open allure-report
```

> 📸 **Preview do relatório:**
> *(Adicione aqui um screenshot do seu Allure Report após a primeira execução)*

---

## 🔄 CI/CD — GitHub Actions

O pipeline executa automaticamente a cada **push** ou **pull request** na branch `main`.

O que o pipeline faz:
1. Instala as dependências
2. Instala os browsers do Playwright
3. Executa todos os testes
4. Publica o relatório HTML como artefato
5. (Falha) Notifica se algum teste quebrar

> Veja a configuração completa em [`.github/workflows/ci.yml`](.github/workflows/ci.yml)

---

## 🧩 Exemplo de Page Object

```typescript
// pages/LoginPage.ts
import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
```

---

## 🧪 Exemplo de Teste

```typescript
// tests/e2e/login.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Login', () => {
  test('deve realizar login com sucesso @smoke', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);
  });

  test('deve exibir erro ao logar com usuário bloqueado', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('locked_out_user', 'secret_sauce');

    await expect(loginPage.errorMessage).toBeVisible();
  });
});
```

---

## 👤 Autor

**Seu Nome**
- LinkedIn: [linkedin.com/in/eduarda-moreirasz](https://www.linkedin.com/in/eduarda-moreirasz)
- GitHub: [github.com/eduardamoreiira](https://github.com/eduardamoreiira)

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
