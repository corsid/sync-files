import { homedir } from "node:os";
import type { DefaultEvent, ChangeEvent } from "../eventTypes.d.ts";
import { WebSocketServer } from "ws";
import { mkdir, unlink, writeFile } from "node:fs/promises";

function getServerPath(path: string) {
  return `${homedir()}/sync-text-storage/${path.slice(1).replaceAll("/", "-")}`;
}

try {
  await mkdir(`${homedir()}/sync-text-storage`);
} catch (e) {
  if ((e as NodeJS.ErrnoException).code !== "EEXIST") {
    throw e;
  }
}

const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", (ws) => {
  ws.on("error", console.error);
  ws.on("message", (data) => {
    const event = JSON.parse(data.toString()) as DefaultEvent | ChangeEvent;
    const serverPath = getServerPath(event.path);
    console.log(event, serverPath);
    switch (event.type) {
      case "add":
        updateFile(serverPath, "");
        break;
      case "change":
        updateFile(serverPath, Buffer.from(event.file));
        break;
      case "unlink":
        deleteFile(serverPath);
        break;
    }
  });

  async function updateFile(path: string, data: Buffer<ArrayBuffer> | string) {
    try {
      writeFile(path, data);
    } catch (e) {
      console.error(e);
      ws.send(JSON.stringify(e));
    }
  }

  async function deleteFile(path: string) {
    try {
      await unlink(path);
    } catch (e) {
      console.error(e);
      ws.send(JSON.stringify(e));
    }
  }
});
