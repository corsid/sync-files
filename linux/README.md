## usage

1. linux

delimeter between paths is `//`

```bash
./linux/setup.sh
systemctl --user set-environment FOLDER_PATHS="~/Documents//~/Desktop"
```

useful commands

```bash
systemctl --user restart sync-text
journalctl --user -u sync-text -n 30 -f
```

## to do

- [ ] install android studio
- [ ] pull changes on PC (check all differences once an hour, on boot)
- [ ] push changes on shut down on PC
- [ ] only if different
- [ ] pull changes on Android

### later

- [ ] JSON config?
- [ ] universal node.js path
- [ ] change the structure to allow syncing root paths and external drives
- [ ] fix duplicate name when replacing / with - on server (use some sort of hash?)
- [ ] ws recover from errors
