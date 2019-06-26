var questions = [
  { q: "Print setningen Javascript er gøy", a: "Javascript er gøy" },
  {
    q: "Lag en funksjon med navn multiplication som ganger to tall",
    test: function test(string) {
      if (eval(string + " multiplication(2,3)") !== 6) {
        return false;
      }
      if (eval(string + "multiplication((-1),5)") !== -5) {
        return false;
      }
      return true;
    },
  },
  { q: "Oppgave 3" },
];

export default questions;
