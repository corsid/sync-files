## usage

1. linux

delimeter between paths is `//`

```bash
./linux/setup.sh
systemctl --user set-environment FOLDER_PATHS="~/Documents//~/Desktop"
```

restart

```bash
systemctl --user restart sync-files
```

debug

```bash
journalctl --user  -u sync-files -n 30  -f
```

## to do

- [x] simplify init with a bash script

- [x] push changes (websockets)
- [ ] rename to text-sync
- [ ] install android studio
- [ ] pull changes (websockets)
- [ ] only if different
- [ ] Android pull changes in a special folder

### later

- [ ] JSON config?
- [ ] universal node.js path
- [ ] fix duplicate name when replacing / with - on server
- [ ] ws recover from errors
