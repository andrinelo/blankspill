var questions = [
  { q: "Print setningen Javascript er gøy", a: "Javascript er gøy" },
  {
    q: "Lag en funksjon med navn multiplication som ganger to tall",
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
      return false;
    },
  },
  { q: "hei" },
];

export default questions;
