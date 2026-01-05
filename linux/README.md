## usage

1. linux

```bash
cd linux
npm install && npm run build
mv systemd-conf ~/.config/systemd/user/sync-files.service
systemctl --user daemon-reload && systemctl --user start sync-files && systemctl --user enable sync-files
```

- [ ] simplify init with npm package `service-systemd`

api:

- [ ] copy files
- [ ] only if different
- [ ] sync files (Websockets)
