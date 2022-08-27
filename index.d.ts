export interface LldbWasm {
    //_execute_command(input: [string]): string;
     ccall(string, string, [string], [string]);
     FS;
  }

interface FS {
    writeFile(string, Uint8Array);
}
  
export declare const LldbWasmPromise: Promise<LldbWasm>;
  
export default LldbWasmPromise
