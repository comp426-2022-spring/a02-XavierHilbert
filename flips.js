import {coinFlips, countFlips, coinFlip} from "./modules/coin.mjs"
import minimist from "minimist"
const args = minimist(process.argv.slice(2))
const numOfRolls = args["number"] || 1
if(numOfRolls === 1){
    console.log(coinFlip())
} else {
    let flips = coinFlips(numOfRolls)
    console.log(flips)
    console.log(countFlips(flips))
}