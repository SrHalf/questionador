import ecad from './l15211_2025.json';
import eca from './l8069_1990.json';

const questionarios = [
    {
        id: 'eca',
        nome: 'Estatuto da Criança e do Adolescente',
        perguntas: eca
    },
    {
        id: 'ecad',
        nome: 'Estatuto Digital da Criança e do Adolescente',
        perguntas: ecad
    }
];

export default questionarios;