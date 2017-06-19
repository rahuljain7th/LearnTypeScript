// dont use require if you want to use types definition for autocompletion use import * from
//const _= require('loadash');
import * as _ from 'lodash';

const colors = ["Red","Green"]
const firstcolors = _.first(colors)

console.log("First Color",firstcolors)