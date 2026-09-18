import { View } from "react-native";
import Markdown from 'react-native-markdown-display';

const apresentacao = `
# Questionador

Este é um app simples que apresenta perguntas de verdadeiro ou falso, a partir de arquivos json.
Este projeto surgiu da necessidade de duas coisas:
- Aprender React Native.
- Criar uma solução para estudar e aprender leis diversas (e outros temas).

A ideia de aprender leis vem da minha intenção de **passar em um concurso público**.
Ainda que eu seja incompetente para isso, espero poder aprender ambos os recursos ao mesmo tempo.

Já a ideia de fazer uso de enunciados de verdadeiro ou falso surge do concurso atual em que estou matriculado, cuja banca responsável se chama Cebraspe, e que é conhecida por aplicar provas com questões fortemente centradas em verdadeiro ou falso.
Notei, então, que a proposta de reduzir o nível de estudos de um determinado tema em proposições lógicas pode ser muito útil, no sentido de compreendê-lo em cada uma de suas partes mais elementares (algo similar a um método de Descartes), de modo que ao mesmo tempo também faz sentido com os estudos de lógica proposicional, me ajudando, inclusive, nas minhas elucubrações e monólogos sobre o tema.

Em resumo, estou assumindo para mim mesmo que, estudar por um questionário estilo Cebraspe é uma das melhores técnicas de estudo não apenas para este concurso, mas para qualquer ocasião.
`;

export default function Sobre(){
    return (
        <View>
            <Markdown>{apresentacao}</Markdown>
        </View>
    );
}