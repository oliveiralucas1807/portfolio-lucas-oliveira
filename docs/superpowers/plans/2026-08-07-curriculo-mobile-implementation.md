# Currículo Mobile Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Impedir que a foto profissional seja comprimida ou excessivamente recortada no Currículo Online mobile.

**Architecture:** A correção será isolada no breakpoint móvel do CSS existente. O quadro manterá dimensões e proporção explícitas dentro do contêiner flexível, sem alterar o desktop.

**Tech Stack:** HTML e CSS estáticos, GitHub Pages.

## Global Constraints

- Preservar conteúdo e desenho do currículo.
- Alterar apenas o comportamento móvel da fotografia.
- Validar em largura equivalente ao Samsung S24 FE e em uma largura menor.

---

### Task 1: Fixar a geometria móvel da fotografia

**Files:**
- Modify: `C:/Users/prov1/Documents/CURRICULO/curriculo/curriculo-lucas-oliveira.css`
- Verify mirror: `C:/Users/prov1/Documents/CURRICULO/curriculo/curriculo-lucas-oliveira_files/curriculo-lucas-oliveira.css`

**Interfaces:**
- Consumes: `.hero` flexível e `.photo-frame` com dimensões de `30mm × 40mm`.
- Produces: quadro móvel que não encolhe e preserva proporção 3:4.

- [ ] **Step 1: Registrar a falha visual atual**

Abrir `index.html` em viewport móvel de 412 px e confirmar que a largura renderizada de `.photo-frame` é menor que a largura CSS declarada.

- [ ] **Step 2: Adicionar a correção mínima no breakpoint móvel**

```css
@media screen and (max-width: 860px) {
  .photo-frame {
    flex: 0 0 30mm;
    width: 30mm;
    height: 40mm;
    aspect-ratio: 3 / 4;
  }
}
```

- [ ] **Step 3: Validar o enquadramento**

Confirmar em 412 px e 360 px que a fotografia não está distorcida, que o quadro conserva 3:4 e que o rosto permanece legível. Ajustar `object-position` somente se necessário.

- [ ] **Step 4: Verificar desktop**

Abrir em 1440 px e confirmar que dimensões, alinhamento e conteúdo permanecem iguais.

- [ ] **Step 5: Commit**

```powershell
git add -- curriculo-lucas-oliveira.css curriculo-lucas-oliveira_files/curriculo-lucas-oliveira.css
git commit -m "fix: preserve resume photo ratio on mobile"
```

### Task 2: Publicar e conferir o currículo

**Files:**
- Modify only if required by existing workflow: repository deployment files.

**Interfaces:**
- Consumes: commit da correção CSS.
- Produces: currículo corrigido no GitHub Pages.

- [ ] **Step 1: Inspecionar o fluxo de publicação existente**

Executar `git remote -v`, `git branch -a` e verificar o README antes de enviar qualquer alteração.

- [ ] **Step 2: Publicar pelo fluxo já existente**

Enviar o commit para a branch configurada como fonte do GitHub Pages, sem alterar configurações do repositório.

- [ ] **Step 3: Verificar a versão pública**

Abrir o endereço público com parâmetro de cache e medir novamente `.photo-frame` em viewport móvel. Resultado esperado: proporção 3:4 e ausência de compressão horizontal.

