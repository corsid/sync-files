import type { DefaultEvent, ChangeEvent } from "../eventTypes.d.ts";
import { watch } from "chokidar";
import { EventName } from "chokidar/handler.js";
import { readFile } from "node:fs/promises";
import { homedir } from "node:os";

const pathsEnv = process.env.FOLDER_PATHS;
if (!pathsEnv) throw "FOLDER_PATHS variable is not set";
const paths = pathsEnv.split("//").map((path) => path.replace("~", homedir()));
console.log({ paths });

const ws = new WebSocket("ws://localhost:8080");
ws.addEventListener("open", startWatching);
ws.addEventListener("close", (e) => console.log(e.code, e.reason));
ws.addEventListener("error", console.error);

function startWatching() {
  watch(paths).on("all", (event, path) => {
    if (!path.endsWith(".sf")) return;
    getWsEvent(event, path)
      .then((e) => ws.send(JSON.stringify(e)))
      .catch(console.error);
  });
}

async function getWsEvent(
  type: EventName,
  path: string
): Promise<DefaultEvent | ChangeEvent> {
  if (type === "change") {
    return { type, path, file: await readFile(path) };
  }
  return { type, path };
}
