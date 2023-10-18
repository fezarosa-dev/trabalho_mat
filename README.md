
**Verificação dos Dígitos Verificadores no CPF:**

O CPF é composto por 11 dígitos, sendo os dois últimos dígitos verificadores. A validação dos dígitos verificadores é realizada usando a lógica do módulo 11. Aqui está como funciona:

1. **Primeiro Dígito Verificador:**
   - Multiplique cada um dos 9 dígitos pelos pesos de 10 a 2.
   - Some os resultados das multiplicações.
   - Calcule o resto da divisão dessa soma por 11.
   - Se o resto for igual a 10, o primeiro dígito verificador é 0. Caso contrário, é o próprio resto.

2. **Segundo Dígito Verificador:**
   - Agora, incluindo o primeiro dígito verificador calculado, multiplique cada um dos 10 dígitos pelos pesos de 11 a 2.
   - Siga o mesmo processo de soma, cálculo do resto e atribuição do dígito verificador.

Se ambos os dígitos verificadores forem válidos, o CPF é considerado válido. Caso contrário, ele é inválido.

**Verificação do Dígito Verificador no RG:**

No RG, o dígito verificador, quando calculado, segue uma lógica um pouco diferente, como explicado anteriormente:

- Cada dígito do RG é multiplicado por pesos decrescentes, começando com 9 e diminuindo até 2, da esquerda para a direita.
- A soma ponderada dos dígitos é calculada.
- O dígito verificador é obtido subtraindo-se a soma ponderada do módulo 11.

Por exemplo, considerando o RG "12 345 678":
- Ponderação: 1 x 9 + 2 x 8 + 3 x 7 + 4 x 6 + 5 x 5 + 6 x 4 + 7 x 3 + 8 x 2 = 132
- Cálculo do Dígito Verificador: 11 - (132 % 11) = 11 - 0 = 11

Nesse caso, o dígito verificador é 11, que não é um valor válido, então é corrigido para "X."

Essa é a lógica usada para verificar a validade dos dígitos verificadores tanto no CPF quanto no RG, garantindo a autenticidade e a integridade dos documentos de identificação.