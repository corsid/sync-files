systemctl --user disable --now sync-files
rm ~/.config/systemd/user/sync-files.service && systemctl --user daemon-reload && systemctl --user status sync-files