var questions = [
  {q: "Vi har funksjoner for å lagre logikk. De er på formatet funksjonsnavn(parameter){};. Vi lagrer alle todosene i en liste, hvor hvert element er en todo. Push.todos(todo) brukes i JS for å legge til todo i listen todos. Nå kan man ikke legge til nye todos. Skriv funksjonen addTodo for å fikse det.",
test: function test(input){
  console.log(eval(input + "addTodo('kjøpe katt')"));
  console.log(["lære å programmere", "bli rik", 'kjøpe katt'])
  if(eval(input + "addTodo('kjøpe katt')" !== ["lære å programmere", "bli rik", 'kjøpe katt'])){
    return false;
  }
  return true;
    }
  },
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
      return true;
    },
  },
  { q: "hei" },
];

export default questions;
