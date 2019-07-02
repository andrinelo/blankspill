var questions = [
  {
    q:
      "Nå kan man ikke legge til nye todos. Skriv funksjonen addTodo for å fikse det.",
    startValue:
      "var todos = [];\nfunction addTodo(item){\n//skriv din kode her\nreturn todos;\n}",

    test: function test(input) {
      console.log(eval(input + "addTodo('kjøpe katt')"));
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
    q: "Lag en funksjon med navn multiplication som ganger to tall",
    startValue: "//hjelp til oppgave 2",
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
  {
    q: "Alert + variabel",
    test: function test(input) {
      return true;
    },
  },
  { q: "hei" },
];

export default questions;
