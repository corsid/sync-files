mkdir -p ~/.config/systemd/user && cp sync-files.service $_
systemctl --user daemon-reload && systemctl --user enable --now sync-files && systemctl --user status sync-files