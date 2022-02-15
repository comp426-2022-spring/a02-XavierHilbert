import {coinFlips, countFlips} from "/Users/xavierh/a02-XavierHilbert/modules/coin.mjs"
import minimist from "minimist"
const args = minimist(process.argv.slice(2))
const numOfRolls = args["number"] || 1
let flips = coinFlips(numOfRolls)
console.log(flips)
console.log(countFlips(flips))