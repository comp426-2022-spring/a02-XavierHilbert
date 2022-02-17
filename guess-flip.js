import {flipACoin} from "./modules/coin.mjs"
import minimist from "minimist"
const args = minimist(process.argv.slice(2))
const guess = args["call"]
if(guess !== "heads" || guess !== "tails"){
    console.log("Error: no input.")
    console.log("Usage: node guess-flip --call=[heads|tails]")
} else {
    console.log(flipACoin(guess))
}
