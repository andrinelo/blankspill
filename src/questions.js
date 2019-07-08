var questions = [
  {
    q:
      "Nå kan du ikke legge til nye todos i appen din. Prøv selv ved å skrive inn en todo og se hva som skjer 🚀 For å fikse dette - skriv ferdig funksjonen addTodo. Tips: hjelpefunksjonen push legger til et element i en liste",
    startValue:
      "var todoList = [];\nfunction addTodo(todoItem){\n  //skriv din kode her\n  return todoList;\n}",
    test: function test(input) {
      let a = eval(input + "addTodo('kjøpe katt')");
      if (a.toString) {
        if (
          eval(input + "addTodo('kjøpe katt')").toString() !==
          ["kjøpe katt"].toString()
        ) {
          return false;
        }
        return true;
      }
      return false;
    },
  },
  {
    q:
      "Nå kan man legge til tomme todos, det er ikke helt heldig. Test det selv 🔍 Skriv ferdig metoden checkIfEmpty ved å fullføre en 'if-statement' slik at man kan ikke kan legge til todos uten innhold ",
    startValue:
      "let todoList =[];\nfunction checkIfEmpty(todoItem){\n  if (/*din kode her*/ === /*dine kode her*/){\n        return todoList;\n  }\n  else{\n    todoList.push(todoItem);\n    return todoList;\n  }\n}",
    test: function test(input) {
      let a = eval(input + "checkIfEmpty('bli rik')");
      if (a.toString) {
        if (
          eval(input + "checkIfEmpty('bli rik')").toString() !==
          ["bli rik"].toString()
        ) {
          return false;
        }
        if (eval(input + "checkIfEmpty('')").toString() !== [].toString()) {
          return false;
        }
        if (
          eval(
            input +
              "checkIfEmpty('')\ncheckIfEmpty('dra på fest')\ncheckIfEmpty('')",
          ).toString() !== ["dra på fest"].toString()
        ) {
          return false;
        }
        return true;
      }
      console.log("noo");
      return false;
    },
  },
  {
    q:
      "I JavaScript har man noen innebygde funksjoner man kan bruke til forskjellige ting. Splice() for eksempel kan brukes for å endre en liste. Den tar inn hvilket element man skal slette og hvor mange elementer fra og med det elementet. \n Nå kan man ikke slette todos, prøv selv 🔍 Skriv ferdig deleteTodo for å fikse det",
    startValue:
      "function deleteTodo(todoList, todoItemNumber){\n  //skriv din kode her \n  return todoList;\n}",
    test: function test(input) {
      let testList = [1, 1, 2, 3, 4, 5, 6];
      let testList2 = [1, 1, 2, 3, 4, 5, 6];
      let a = eval(input + "deleteTodo(testList, 0)");
      if (a.toString) {
        if (a.toString() !== [1, 2, 3, 4, 5, 6].toString()) {
          return false;
        }
        if (
          eval(input + "deleteTodo(testList2,4)").toString() !==
          [1, 1, 2, 3, 5, 6].toString()
        ) {
          return false;
        }
        if (
          eval(input + "deleteTodo(testList, 5)").toString() !==
          [1, 2, 3, 4, 5].toString()
        ) {
          return false;
        }
        return true;
      }
      return false;
    },
  },
  { 
    q: "Man kan også gjøre regneoperasjoner. Si du ønsker å vite hvor mye tid det tar å gjøre ferdig alt du skal og du antar at hver oppgave tar 30 minutter. Skriv ferdig koden timeToFinishTodos() for å regne ut et estimat på dette", 
    startValue: "function timeToFinishTodos(numberOfTodos){\n  timeToFinish = numberOfTodos*30;\n return \ntimeToFinish + 'minutter for å gjøre det du skal'\n} ",
    test: function test(input){
      if (eval(input + "timeToFinishTodos(5)" !== "150 minutter for å gjøre det du skal")){

        return false;
        }
      return true;

    },
  },
  {
    q: "Oppgave 5",
    startValue: "//meow",
    test: function test(input){

    },
  },
  {
    q: "Lag en funksjon med navn multiplication som ganger to tall",
    startValue:
      "let todoList =[]\nfunction checkIfEmpty(todoItem){\nif (todoItem === ''){\nalert('Du må skrive en todo først')\n}\nelse{\ntodoList.push(todoItem);\n}\n}",
    test: function test(input) {
      if (eval(input + " multiplication(2,3)") !== 6) {
        return false;
      }
      if (eval(input + "multiplication((-1),5)") !== -5) {
        return false;
      }
      return true;
    },
  },
];

export default questions;
