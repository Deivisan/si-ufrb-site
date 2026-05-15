# 📊 Dataset: Membros dos Grupos de WhatsApp - SI UFRB

> **Extraído em**: 14/05/2026  
> **Total de mensagens analisadas**: ~30.750 mensagens  
> **Grupos**: Diretoria, Alunos FSA, SI UFRB (2026.1)

---

## 👥 Participantes Identificados

### Diretoria 2026

| Nome | Telefone | Função | Mensagens (Diretoria) |
|------|----------|--------|------------------------|
| Lucas Machado Lima | +557591266558 | Presidente | 325 |
| Iris Lopes | +557199914531 | Vice-Presidente | 303 |
| Iury | +557199463003 | 1º Secretário (Feira) | 241 |
| Brunna | +557582551854 | Coord. Divulgação | 147 |
| Luiz & Joenize | +557499893083 | Participante | 65 |
| Deivison Santana | +557581231019 | Coord. T.I | 32 |

### Participantes Adicionais (Alunos)

| Nome | Telefone | Observações |
|------|----------|-------------|
| Lorena Santana | +557591904929 | Tutora |

---

## 📈 Estatísticas dos Chats

### Volume de Mensagens por Grupo

| Grupo | Total de Mensagens | Principais Temas |
|-------|-------------------|------------------|
| D.A. SI UFRB (Diretoria) | 15.362 | Reuniões, decisões, problemas |
| Alunos BSI_UFRB - FSA | 9.478 | Dúvidas, reclamações, avisos |
| SI UFRB (2026.1) | 5.912 | Dúvidas, atividades, networking |

### Tipos de Conteúdo Encontrados

- **Links compartilhados**: Gravações, docs, formulários
- **Problemas técnicos**: AVA, SIGAA, e-mail
- **Prazos e datas**: Atividades, entregas
- **Sugestões de melhoria**: Carga, conteúdo, organização

---

## 🔄 Próximas Extrações

Para atualizar este dataset:

1. Baixar exports via WhatsApp Web
2. `jq` para extrair participantes únicos
3. Atualizar este arquivo ou gerar `membros-chats.json`

```bash
# Extrair participantes únicos
jq -r '[.[] | select(.displayName != "") | {displayName, phoneNum}] | unique' chat.json
```