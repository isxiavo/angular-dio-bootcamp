// variaveis

//variaveis primitivas: boolean, number, string
let ligado: boolean = false;
let nome: string = "lucas";
let idade: number = 27;
let number: number = 1.9;

//variaveis especiais: null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

// tipos abrangentes: any, void
let retorno: void; // nada (retornos)
let retornoView: any = ""; // qualquer coisa

//objeto - sem previsibilidade, genérico
let produto: object = {}; // qualquer objeto

//objeto - com previsibilidade (tipado)
type ProdutoLoja = {
  nome: string;
  preco: number;
};
let meuProduto: ProdutoLoja = {
  nome: "Tenia",
  preco: 89.89,
};

//arrays
let dados: string[] = ["sdsdf", "sdfgf", "ghjy"];
let dados2: Array<string> = ["sdsdf", "sdfgf", "ghjy"]; // ???????
let dados3: (string | number)[] = ["lucas", 27, "ffgf", 895.71];
//qualquer quantidade, qualquer lugar

//tuplas
let boleto: [string, number, number] = ["agua conta", 199.9, 64654156];
// respeita padrão, lugares e valores

//arrays métodos
// tudo do js e um pouco mais

//datas
let aniversario: Date = new Date("2022-12-01 05:00");
console.log(aniversario.toDateString());
console.log(aniversario.toString());

//funções
function addNumber(x: number, y: number) {
  return x + y;
}

//funções multi valor
function CallToPhone(phone: number | string): number | string {
  return phone;
}

//async
async function getDB(id: number): Promise<string> {
  return "lucas";
}

// types e interface
type robot1 = {
  readonly id: number | string;
  name: string;
};
interface robot2 {
  readonly id: number | string;
  name: string;
  sayHello(): string;
}
const bot1: robot1 = {
  id: 10,
  name: "asd",
};
const bot2: robot2 = {
  id: 15,
  name: "fff",
  sayHello: function (): string {
    throw new Error("Function not implemented.");
  },
};

class Pessoa implements robot2 {
  id: string | number;
  name: string;

  constructor(id: string | number, name: string) {
    this.id = id;
    this.name = name;
  }
  sayHello(): string {
    return `Hello, I'm ${this.name}.`;
  }
}
const p = new Pessoa(1, "schiavo");
console.log(p.sayHello());

//classes
class Character {
  private name: string;
  public strength: number;
  protected skill: number;

  attack(): void {
    console.log(`Attack with ${this.strength} points`);
  }

  constructor(name: string, strength: number, skill: number) {
    this.name = name;
    this.strength = strength;
    this.skill = skill;
  }
}

const p1 = new Character("jorge", 10, 10);

// Subclass
class Mage extends Character {
  magicPoints: number;

  constructor(
    name: string,
    strength: number,
    skill: number,
    magicPoints: number
  ) {
    super(name, strength, number);
    this.magicPoints = magicPoints;
  }
}

const mago1 = new Mage("eu1", 10, 5, 100);

//generics
function concatArray<T>(...itens: T[]): T[] {
  return new Array().concat(...itens);
}
const numArray = concatArray<number[]>([1, 5], [5, 4]);
const strArray = concatArray<string[]>(["felipe", "lucas"]);
console.log(numArray);
console.log(strArray);

//decorators

function apiVersion(version: string) {
  return (target: any) => {
    Object.assign(target.prototype, { __version: version });
  };
}

@apiVersion("1.10")
class Api {}

const api = new Api();
console.log(api.__version);

//attribute decorator
function minLength(length: number) {
  return (target: any, key: string) => {
    let _value = target[key];

    const getter = () => _value;
    const setter = (value: string) => {
      if (value.length < length) {
        throw new Error("Tamanho menor do que " + length);
      } else {
        _value = value;
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}

class Api1 {
  @minLength(3)
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const api1 = new Api1("produtos");
console.log(api1.name)