systemctl --user disable --now sync-text
rm ~/.config/systemd/user/sync-text.service && systemctl --user daemon-reload && systemctl --user status sync-text