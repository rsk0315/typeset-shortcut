import { typeset } from "./typeset";
import { fromBase64, toBase64 } from "./base64";

const input = fromBase64("");
const output = typeset(input);
document.write(toBase64(output));
