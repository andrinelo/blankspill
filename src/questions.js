import "./App.css";
import React from "react";

var questions = [
  {
    q:
      "Nå kan du ikke legge til varer i handlelista. Prøv selv ved å skrive inn noe du vil kjøpe og se hva som skjer 🚀 For å fikse dette - skriv ferdig funksjonen 𝘢𝘥𝘥𝘐𝘵𝘦𝘮. Tips: du kan legge til noe i en liste ved å skrive liste.push(item). ",
    startValue:
      "var shoppingList = [];\nfunction addItem(item){\n  //skriv din kode her\n  return shoppingList;\n}",
    test: function test(input) {
      let a = eval(input + "addItem('sitron')");
      if (a.toString) {
        if (
          eval(input + "addItem('sitron')").toString() !== ["sitron"].toString()
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
      "Nå kan man legge til en 'tom vare', det er ikke helt heldig. Test det selv 🔍 Skriv ferdig metoden checkIfEmpty ved å fullføre en 'if-statement' for å rette opp i det.",
    startValue:
      "let shoppingList =[];\nfunction checkIfEmpty(item){\n  if (/*din kode her*/ === /*dine kode her*/){\n        return shoppingList;\n  }\n  else{\n    todoList.push(todoItem);\n    return todoList;\n  }\n}",
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
      "I JavaScript har man noen innebygde funksjoner man kan bruke til forskjellige ting. Splice() til eksempel kan brukes for å endre en liste. KODEBLOKK: tall = [2,4,6,8]; Splice.tall(2,1) gir tall = [2,4,8] \n Nå kan man ikke slette todos, prøv selv 🔍 Skriv ferdig deleteTodo for å fikse det.",
    startValue:
      "function deleteItem(shoppingList, shoppingItem){\n  //skriv din kode her \n  return shoppingList;\n}",
    test: function test(input) {
      let testList = [1, 1, 2, 3, 4, 5, 6];
      let testList2 = [1, 1, 2, 3, 4, 5, 6];
      let a = eval(input + "deleteItem(testList, 0)");
      if (a.toString) {
        if (a.toString() !== [1, 2, 3, 4, 5, 6].toString()) {
          return false;
        }
        if (
          eval(input + "deleteItem(testList2,4)").toString() !==
          [1, 1, 2, 3, 5, 6].toString()
        ) {
          return false;
        }
        if (
          eval(input + "deleteItem(testList, 5)").toString() !==
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
    q:
      "Man kan også gjøre regneoperasjoner. Si du ønsker å vite hvor mye alt på handlelista koster. Vi tar en snarvei og antar at hver vare koster 30kr. Skriv ferdig koden esimatePrice() for å regne ut et estimat på hva du må betale.🧠",
    startValue:
      "function estimatePrice(shoppingListNumber){\n let priceForEachItem = 30;\n let totalCost = /*dine kode her*/;\n return totalCost +\n ' kroner for alt du skal ha';\n} ",
    test: function test(input) {
      let testNum = 5;
      let a = eval(input + "estimatePrice(testNum);");
      if (a !== "150 kroner for alt du skal ha") {
        return false;
      }
      if (
        eval(input + "estimatePrice(1);") !== "30 kroner for alt du skal ha"
      ) {
        return false;
      }
      return true;
    },
  },
  {
    q: "Hvor god har du blitt til å programmere?",
    startValue: "let programmingLevel = 'beginner';/*<<-code here*/\nfunction setEmoji(programmingLevel){\n     if(programmingLevel === 'expert'){\n            return('🚀');\n      }\n      else {\n            return('🍋');\n      }\n}",
      test: function test(input) {
        if (eval(input + "setEmoji(programmingLevel)") !== "🚀"){
          return false;
        }
        if ("programmingLevel"=="expert" && eval(input + "setEmoji(programmingLevel)") == "🍋"){
          return false;
        }
        return true;
      },
  },
  {
    q: "Oppgave 6",
    startValue: "//meow",
    test: function test(input) {},
  },
  {
    q: "Oppgave 7",
    startValue: "//meow",
    test: function test(input) {},
  },
  {
    q: "Oppgave 8",
    startValue: "//meow",
    test: function test(input) {},
  },
  {
    q: "Oppgave 9",
    startValue: "//meow",
    test: function test(input) {},
  },
  {
    q: "<url>",
    startValue: "//meow",
    test: function test(input) {},
  } 

  /* 
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
  }, */,
];

export default questions;
