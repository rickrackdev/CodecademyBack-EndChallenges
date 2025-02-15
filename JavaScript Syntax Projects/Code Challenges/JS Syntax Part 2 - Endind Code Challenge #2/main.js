/*
Project Goals
Context: You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. 
The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. 
Your job is to create objects that simulate the DNA of P. aequor for your research team to study.
Look over the starter code. There are two helper functions: returnRandBase() and mockUpStrand()
DNA is comprised of four bases (Adenine, Thymine, Cytosine, and Guanine). When returnRandBase() is called, it will randomly select a base and return the base ('A','T','C', or 'G').
mockUpStrand() is used to generate an array containing 15 bases to represent a single DNA strand with 15 bases.
You’ll use these helper functions later to create your objects that represent P. aequor.
*/

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

/*Since you need to create multiple objects, create a factory function pAequorFactory() that has two parameters:
The first parameter is a number (no two organisms should have the same number).
The second parameter is an array of 15 DNA bases.
pAequorFactory() should return an object that contains the properties specimenNum and dna that correspond to the parameters provided.
Your team wants you to simulate P. aequor‘s high rate of mutation (change in its DNA).
To simulate a mutation, in pAequorFactory()‘s returned object, add the method .mutate().
.mutate() is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. Then .mutate() will return the object’s dna.
Your research team wants to be able to compare the DNA sequences of different P. aequor. You’ll have to add a new method (.compareDNA()) to the returned object of the factory function.
.compareDNA() has one parameter, another pAequor object.
The behavior of .compareDNA() is to compare the current pAequor‘s .dna with the passed in pAequor‘s .dna and compute how many bases are identical and in the same locations. 
.compareDNA() does not return anything, but prints a message that states the percentage of DNA the two objects have in common — use the .specimenNum to identify which pAequor objects are being compared.
ex1 and ex2 only have the 3rd element in common ('T') and therefore, have 25% (1/4) of their DNA in common. The resulting message would read something along the lines of: specimen #1 and specimen #2 have 25% DNA in common.
P. aequor have a likelier chance of survival if their DNA is made up of at least 60% 'C' or 'G' bases. In the returned object of pAequorFactory(), add another method .willLikelySurvive().
.willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise, .willLikelySurvive() returns false.
*/

const pAequorFactory = (specimenNum, dna) => {
  return {
    _specimenNum: specimenNum,
    _dna: dna,
    mutate() {
      let randomNum = Math.floor(Math.random() * 15);
      let newBase;
      do {
        newBase = returnRandBase();
      } while (this._dna[randomNum] === newBase);
      this._dna[randomNum] = newBase;
      return this._dna;
    },
    compareDNA(specimen) {
      let twins = 0;
      for (let i = 0; i < this._dna.length; i++) {
        for (let j = 0; j < specimen._dna.length; j++) {
          if (this._dna[i] === specimen._dna[j] && i === j) {
            twins++;
          }
        }
      }
      console.log(
        `Specimen #${this._specimenNum} and Specimen #${
          specimen._specimenNum
        } have ${Math.floor((twins / 15) * 100)}% DNA in common.`
      );
    },
    willLikelySurvive() {
      let survivor = 0;
      for (let i = 0; i < this._dna.length; i++) {
        if (this._dna[i] === "C" || this._dna[i] === "G") {
          survivor++;
        }
      }
      return Math.floor((survivor / 15) * 100) > 60;
    },
  };
};

let specimenCollection = [];
let id = 0;
do {
  let newSpecimen = pAequorFactory(id, mockUpStrand());
  if (newSpecimen.willLikelySurvive()) {
    specimenCollection.push(newSpecimen);
  }
  id++;
} while (specimenCollection.length < 30);

console.log(specimenCollection);

/* 
Project is done!!!!!
OPTIONAL: 
Create a .complementStrand() method to the factory function’s object that returns the complementary DNA strand. The rules are that 'A's match with 'T's and vice versa. 
Also, 'C's match with 'G's and vice versa.
Use the .compareDNA() to find the two most related instances of pAequor.
*/
