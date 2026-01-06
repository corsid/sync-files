mkdir -p ~/.config/systemd/user && cp sync-text.service $_
systemctl --user daemon-reload && systemctl --user enable --now sync-text && systemctl --user status sync-text