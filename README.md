### Validação de CPF (Cadastro de Pessoa Física)

A validação do CPF envolve dois aspectos principais: formato e dígitos verificadores. Vamos dar uma olhada em cada um deles:

1. **Formato do CPF**: O CPF é um número composto por 11 dígitos, geralmente apresentado no formato "XXX.XXX.XXX-YY", onde "X" é qualquer dígito de 0 a 9 e "Y" é um dígito de verificação. O formato é importante para garantir que os caracteres estejam corretos.

2. **Dígitos Verificadores**: O último dígito do CPF é chamado de dígito verificador. Para verificar se um CPF é válido, calculamos esses dígitos da seguinte maneira:
   - Primeiro Dígito Verificador (YY): Utiliza-se uma fórmula que multiplica os nove primeiros dígitos do CPF por pesos específicos e, em seguida, realiza uma soma. O resultado dessa soma é usado para calcular o primeiro dígito verificador. Se o resultado for igual ao dígito existente no CPF, ele é válido.
   - Segundo Dígito Verificador: O procedimento é semelhante ao do primeiro dígito verificador, mas agora inclui o primeiro dígito verificador calculado. O resultado é usado para calcular o segundo dígito verificador.

Se os dígitos verificadores calculados correspondem aos dígitos reais no CPF, então o CPF é considerado válido.

### Validação de RG (Registro Geral)

A validação do RG também envolve um formato específico e dígitos verificadores:

1. **Formato do RG**: O RG é um documento de identificação que contém um número com um formato específico. Ele normalmente é apresentado no formato "XX.XXX.XXX-Y", onde "X" representa dígitos numéricos e "Y" é um dígito de verificação. O formato é importante para garantir que os caracteres estejam corretos.

2. **Dígito Verificador do RG**: O dígito verificador do RG é usado para verificar a validade do número do documento. Para calcular o dígito verificador, multiplicamos os sete primeiros dígitos do RG por pesos específicos e, em seguida, somamos esses produtos. O resultado é submetido a um cálculo adicional para determinar o dígito verificador. Se o dígito verificador calculado corresponder ao dígito real no RG, o número é considerado válido.

Em ambas as validações, o objetivo é garantir que os documentos estejam no formato correto e que os dígitos verificadores correspondam aos valores esperados. Esses métodos são usados para evitar erros de digitação e falsificações, garantindo a integridade dos documentos de identificação.