import { watch } from "chokidar";
import { homedir } from "node:os";

const pathsEnv = process.env.FOLDER_PATHS;
if (!pathsEnv) throw "FOLDER_PATHS variable is not set";
const paths = pathsEnv.split("//").map((path) => path.replace("~", homedir()));
console.log({ paths });

watch(paths).on("all", (event, path) => {
  if (!path.endsWith(".sf")) return;
  console.log(event, path);
});
