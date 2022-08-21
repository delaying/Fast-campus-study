import _, { get } from "lodash";
import random from "./getRandom";

const a = random();

if (a === 0) {
  console.log("a is 0");
} else {
  console.log("rest...");
}
