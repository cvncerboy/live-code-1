/*
Step 1: buat class constructor Pokemon yang menerima argument
name
hp
attack
defense

Step 2: buat method di dalam class Pokemon.
showPokemon yang mereturn.
contoh:
      Pokemon: bulbasaur

      Hp: 40

      attack: 50

      defense: 70

Step 3: buat class Pokedex yang menerima argument
object {player1, attackOfPlayer1, defenseOfPlayer1, player2, attackOfPlayer2, defenseOfPlayer2}

Step 4: buat method play dalam class Pokedex dengan kondisi sebagai berikut
Jika attackOfPlayer1 lebih dari defenseOfPlayer2 maka
player1 menang
Jika attackOfPlayer2 lebih dari defenseOfPlayer1 maka
player2 menang
*/

class Pokemon {
  constructor(name, hp, attack, defense) {
    this.showPokemon = () => {
      return {
        name: name,
        hp: hp,
        attack: attack,
        defense: defense
      }
    }
  }
}

class Pokedex {
  constructor(
    {
      player1,
      attackOfPlayer1,
      defenseOfPlayer1,
      player2,
      attackOfPlayer2,
      defenseOfPlayer2
    }) {
    this.play = () => {
        if(attackOfPlayer1 > defenseOfPlayer2) {
          return `${player1} win`
        } else if(attackOfPlayer2 > defenseOfPlayer1){
          return `${player2} win`
        }
      }
    }
  }


const bulbasaur = new Pokemon('bulbasaur', 40, 50, 70);
const pikachu = new Pokemon('pikachu', 60, 40, 30);
const battle1 = new Pokedex({
  player1: bulbasaur.showPokemon().name,
  attackOfPlayer1: bulbasaur.showPokemon().attack,
  defenseOfPlayer1: bulbasaur.showPokemon().defense,
  player2: pikachu.showPokemon().name,
  attackOfPlayer2: pikachu.showPokemon().attack,
  defenseOfPlayer2: pikachu.showPokemon().defense
})

console.log(battle1.play())  // bulbasaur win

