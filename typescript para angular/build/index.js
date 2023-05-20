"use strict";
// variaveis
//variaveis primitivas: boolean, number, string
let ligado = false;
let nome = "lucas";
let idade = 27;
let number = 1.9;
//variaveis especiais: null, undefined
let nulo = null;
let indefinido = undefined;
// tipos abrangentes: any, void
let retorno; // nada (retornos)
let retornoView = ""; // qualquer coisa
//objeto - sem previsibilidade, genérico
let produto = {}; // qualquer objeto
let meuProduto = {
    nome: "Tenia",
    preco: 89.89,
};
//arrays
let dados = ["sdsdf", "sdfgf", "ghjy"];
let dados2 = ["sdsdf", "sdfgf", "ghjy"]; // ???????
let dados3 = ["lucas", 27, "ffgf", 895.71];
//qualquer quantidade, qualquer lugar
//tuplas
let boleto = ["agua conta", 199.9, 64654156];
// respeita padrão, lugares e valores
//arrays métodos
// tudo do js e um pouco mais
//datas
let aniversario = new Date("2022-12-01 05:00");
console.log(aniversario.toDateString());
console.log(aniversario.toString());
//funções
function addNumber(x, y) {
    return x + y;
}
//funções multi valor
function CallToPhone(phone) {
    return phone;
}
//async
async function getDB(id) {
    return "lucas";
}
const bot1 = {
    id: 10,
    name: "asd"
};
const bot2 = {
    id: 15,
    name: "fff",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
class Pessoa {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello, I'm ${this.name}.`;
    }
}
const p = new Pessoa(1, "schiavo");
console.log(p.sayHello());
//classes
class Character {
    name;
    strength;
    skill;
    attack() {
        console.log(`Attack with ${this.strength} points`);
    }
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
}
const p1 = new Character("jorge", 10, 10);
// Subclass
class Mage extends Character {
    magicPoints;
    constructor(name, strength, skill, magicPoints) {
        super(name, strength, number);
        this.magicPoints = magicPoints;
    }
}
const mago1 = new Mage("eu1", 10, 5, 100);
//generics
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [5, 4]);
const strArray = concatArray(["felipe", "lucas"]);
console.log(numArray);
