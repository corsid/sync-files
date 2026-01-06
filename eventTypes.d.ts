export interface DefaultEvent {
  type:
    | "error"
    | "ready"
    | "raw"
    | "all"
    | "add"
    | "addDir"
    | "unlink"
    | "unlinkDir";
  path: string;
}

export interface ChangeEvent extends DefaultEvent {
  type: "change";
  file: Buffer<ArrayBufferLike>;
}
