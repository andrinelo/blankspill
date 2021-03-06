import "./App.css";
import React from "react";

var questions = [
  {
    q:
      "Nå kan du ikke legge til varer i handlelista. Prøv selv ved å skrive inn noe du vil kjøpe og se hva som skjer 🚀 For å fikse dette må vi skrive ferdig funksjonen addItem. Hvis du trenger hjelp kan du trykke på lyspæren for å få et tips.",
    hint:
      "Tips: Vi ønsker å legge til elementet som funksjonen tar inn i listen shoppingList. Du kan legge til noe i en liste ved å skrive ListensNavn.push(ListeelementetsNavn).",
    startValue:
      "var shoppingList = [];\nfunction addItem(item){\n  /*skriv din kode under her*/\n  return shoppingList;\n}",
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
    hint: "Tips: Et tomt item er en tom string",
    startValue:
      "var shoppingList =[];\nfunction checkIfEmpty(item){\n  if (/*din kode her*/ === /*din kode her*/){\n    return shoppingList;\n  }\n  else{\n    shoppingList.push(item);\n    return shoppingList;\n  }\n}",
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
      "I JavaScript har man noen innebygde funksjoner man kan bruke til forskjellige ting. splice() til eksempel kan brukes for å endre en liste.\n Nå kan man ikke slette todos, prøv selv 🔍 Skriv ferdig deleteItem for å fikse det.",
    hint: "Tips: tall = [2,4,6,8]; tall.splice(2,1) gir tall = [2,4,8]",
    startValue:
      "function deleteItem(shoppingList, shoppingItem){\n  /*skriv din kode under her*/ \n  return shoppingList;\n}",
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
      "Si at du ønsker å vite hvor mange varer du har i handlelisten din, da må vi lage en funksjon for det! Vi har skrevet en for løkke som går igjennom listen og skal telle hvor mange varer det finnes i den, kan du fullføre den?",
    hint:
      "Tips: For å plusse et tall med 1 kan man enten skrive tall = tall +1, eller tall += 1.",
    startValue:
      "function showNumberOfItems(shoppingList){\n  var i=0;\n  var numberOfItems = 0;\n  for (i = 0; i < shoppingList.length; i++){\n    numberOfItems /*din kode her*/;\n  }\n  return numberOfItems + ' varer i handlelisten';\n}",
    test: function test(input) {
      let testList = ["melon", "agurk", "paprika"];
      if (
        eval(input + "showNumberOfItems(testList)") !== "3 varer i handlelisten"
      ) {
        return false;
      }
      return true;
    },
  },
  {
    q:
      "Nå vil du endre sitronen som står bak 'Handleliste' til å bli en rakett, klarer du det?",
    hint: "Hvor god har du blitt til å programmere?",
    startValue:
      "var programmingLevel = 'beginner';/*<<-endre koden*/\nfunction setEmoji(programmingLevel){\n  if(programmingLevel === 'expert'){\n    return('🚀');\n  }\n  else {\n    return('🍋');\n  }\n}",
    test: function test(input) {
      if (eval(input + "setEmoji(programmingLevel)") !== "🚀") {
        return false;
      }
      if (
        "programmingLevel" == "expert" &&
        eval(input + "setEmoji(programmingLevel)") == "🍋"
      ) {
        return false;
      }
      return true;
    },
  },
  {
    q:
      "Nå kan man legge til uendelig mange varer i handlelisten vår, prøv selv. Nå ønsker vi å begrense antall varer i handlelisten til maks 25(til og med 25). Skriv ferdig funksjonen for å legge til funksjonalitet for dette.",
    hint:
      "Tips: x < y betyr x er mindre enn y \n x <= y betyr x er mindre eller lik y\n x > y betyr x er større enn y\n x >= y betyr x er større eller lik y\n x != y betyr x er ikke lik y",
    startValue:
      "function addItem (shoppingList, item){\n  if (shoppingList.length /*din kode her*/ 25) {\n    return shoppingList;\n  } else {\n    shoppingList.push(item);\n    return shoppingList;\n  }\n}",
    test: function test(input) {
      console.log("hei");
      let testList = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
      ];
      let testList2 = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
      ];
      let testList3 = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
      ];
      let a = eval(input + "addItem(testList, 25)");
      if (a.toString() !== testList2.toString()) {
        return false;
      }
      let b = eval(input + "addItem(testList2, 26)");
      if (b.toString() !== testList2.toString()) {
        return false;
      }
      let c = eval(input + "addItem(testList3, 27)");
      if (c.toString() !== testList3.toString()) {
        return false;
      }
      return true;
    },
  },
  {
    q:
      "I oppgave 4 lagde vi en funksjon som skulle telle antall varer du har i handlelisten. Der tok vi ikke hensyn til at de som man har huket av fra listen ikke burde være med i tellingen lenger. Det skal vi fikse nå! For å få til det skal vi kun telle de varene som ikke er handlet inn. Fullfør if-setningen for å oppnå dette",
    hint:
      "Tips:1) Vi løser oppgaven ved å summere alle varer hvor completed === false.\n 2) I JavaScript er disse to utsagnene ekvivalente\n counter+=1;\ncounter=counter+1;",

    startValue:
      "function showNumberOfItems(shoppingList){\n  var i=0;\n  var numberOfItems = 0;\n  for (i = 0; i < shoppingList.length; i++){\n    if(shoppingList[i].completed === false) {\n      /*skriv din kode under her*/\n    }\n  }\n  return numberOfItems + ' varer i handlelisten';\n}",
    test: function test(input) {
      var testList = [
        { name: "annanas", completed: true },
        { name: "apple", completed: false },
        { name: "orange", completed: true },
      ];
      var testList2 = [
        { name: "annanas", completed: false },
        { name: "apple", completed: false },
        { name: "orange", completed: false },
      ];
      if (
        eval(input + "showNumberOfItems(testList)") !== "1 varer i handlelisten"
      ) {
        return false;
      }
      if (
        eval(input + "showNumberOfItems(testList2)") !==
        "3 varer i handlelisten"
      ) {
        return false;
      }
      return true;
    },
  },
  {
    q:
      "Gratulerer!! Du har nå lagt til funksjonalitet på handlelisten og er klar til å jobbe videre på egenhånd🚀🚀",
    hint: "",
    startValue: "//meow",
    test: function test(input) {},
  },
];

export default questions;
