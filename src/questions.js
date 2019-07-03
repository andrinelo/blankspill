var questions = [
  {
    q:
      "Nå kan man ikke legge til nye todos. Skriv funksjonen addTodo for å fikse det.",
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
      "Nå kan man legge til tomme todos,vi ønsker ikke at det skal være mulig. Skriv metoden checkIfEmpty for å unngå det.",
    startValue:
      "let todoList =[];\nfunction checkIfEmpty(todoItem){\n  if (todoItem === ''){\n    alert('Du må skrive en todo først');\n    return todoList;\n  }\n  else{\n    todoList.push(todoItem);\n    return todoList;\n  }\n}",
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
      "splice() er en innebygd funksjon i JavaScript som kan brukes for å endre en liste. Den tar inn hvilket element man skal slette og hvor mange. Nå kan man ikke slette todos. Skriv todoArray.splice(index,1); for å fikse det.",
    startValue:
      "function deleteTodo(todoList, index){\n  todoList.splice(index, 1);\n  return todoList;\n}",
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
  { q: "Oppgave 4", startValue: "//hjelp til oppgave 4" },
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
