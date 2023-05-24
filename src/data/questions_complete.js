const data = [
    {
        category: 'Mapas',
        questions: [
            {
                question: 'Qual tag cria um parágrafo?',
                options: ['<p>', '<h1>', '<text>', '<ul>'],
                answer: '<p>',
                tip: 'É uma tag de uma letra apenas',
            },
            {
                question: 'Qual atributo adiciona um link para a tag a?',
                options: ['alt', 'href', 'src', 'link'],
                answer: 'href',
                tip: 'Hyperlink Reference',
            },
            {
                question: 'As listas não ordenadas tem a tag de:',
                options: ['<ol>', '<ul>', '<li>', '<list>'],
                answer: '<ul>',
            },
            {
                question: 'Qual atributo deixa o input obrigatório?',
                options: ['placeholder', 'value', 'required', 'maxlength'],
                answer: 'required',
            },
            {
                question: 'A tag semântica indicada para rodapés é a:',
                options: ['div', 'main', 'section', 'footer'],
                answer: 'footer',
            },
        ],
    },
    {
        category: 'Competitivo',
        questions: [
            {
                question: 'Qual equipe tem mais titulos de major?',
                options: ['Astralis', 'SK Gaming', 'G2 Esports', 'Faze'],
                answer: 'Astralis',
                tip: 'Estrela',
            },
            {
                question:
                    'Qual jogador esteve por mais tempo entre o Top 10 melhores do mundo?',
                options: ['coldzera', 'device', 's1mple', 'NiKo'],
                answer: 's1mple',
            },
            {
                question:
                    'Qual foi o primeiro jogador/equipe a ter um grafite em sua homenagem?',
                options: ['coldzera', 'S1mple', 'olofmeister', 'Fnatic'],
                answer: 'olofmeister',
            },
        ],
    },
    {
        category: 'Armas',
        questions: [
            {
                question: 'O que é Vanilla JavaScript?',
                options: [
                    'JavaScript puro',
                    'Uma biblioteca JavaScript',
                    'Um framework JavaScript',
                    'Um compilador de JavaScript',
                ],
                answer: 'JavaScript puro',
            },
            {
                question:
                    'Com qual instrução declaramos uma constante em JavaScript?',
                options: ['const', 'let', 'var', 'define'],
                answer: 'const',
            },
            {
                question:
                    'Qual dos tipos de dado a seguir não existe em JavaScript?',
                options: ['string', 'number', 'boolean', 'float'],
                answer: 'float',
            },
            {
                question: 'Qual dos métodos a seguir seleciona um elemento?',
                options: ['querySelector', 'parseInt', 'sort', 'reduce'],
                answer: 'querySelector',
            },
            {
                question:
                    'Qual destas propriedades da a quantidade de elementos de um array?',
                options: ['qty', 'length', 'items', 'index'],
                answer: 'length',
            },
        ],
    },
];

export default data;
