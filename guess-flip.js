import {flipACoin} from "/Users/xavierh/a02-XavierHilbert/modules/coin.mjs"
import minimist from "minimist"
const args = minimist(process.argv.slice(2))
const guess = args["call"] || - 1
if(guess === -1){
    console.log("Error: no input.")
    console.log("Usage: node guess-flip --call=[heads|tails]")
} else {
    console.log(flipACoin(guess))
}
