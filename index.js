import { lldbModule } from "./lldb.js";

const wasm = lldbModule({
  locateFile(path) {
    console.log("PATH: ", path);
    if (path.endsWith(`.wasm`)) {
      return 'http://0.0.0.0:8001/lldb.wasm';
    }
    return path;
  },
});

export default wasm;
