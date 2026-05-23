# Family Home Server / Private Family Cloud — Project Overview

## What I built

I built a private family cloud using a reused laptop as a dedicated home server. The server runs Ubuntu Server as the base operating system and CasaOS as the visual management layer, making it easier to manage storage, apps, and basic services from a browser instead of relying only on the Linux terminal.

The goal was to turn existing hardware into a stable, always-on local server that can centralize family files, simplify access from home devices, and provide a foundation for future services such as private photo storage, shared folders, backups, and secure remote access.

## Why I built it

The project was created to avoid depending only on commercial cloud storage for family files and to make better use of hardware that was already available. Instead of leaving an older laptop unused, I converted it into a practical home infrastructure device.

This also gave the family a private place to organize documents, photos, and shared files while keeping control over where the data lives.

## What problem it solves for my family

The server solves several practical problems:

- Centralizes family files in one private place at home.
- Reduces dependency on multiple disconnected devices or accounts.
- Makes shared folders easier to manage for non-technical family members.
- Provides a base for local backups and future private cloud services.
- Allows secure remote access through a VPN-style connection instead of exposing services directly to the internet.
- Gives the family a visual interface through CasaOS, so the system is easier to understand and maintain.

## Stack used

- Reused laptop as the physical host
- Ubuntu Server as the operating system
- CasaOS as the home server dashboard and app management interface
- Docker-based application layer through CasaOS
- Local storage for family files and service data
- SMB shares for local network file access
- Tailscale for secure remote access
- SSH for server administration
- UFW firewall for basic network protection
- Netplan and systemd-networkd for network configuration
- Broadcom wireless driver configuration for Wi-Fi support

## Key configuration work

The setup included:

- Installing Ubuntu Server without a desktop environment
- Enabling SSH for remote administration
- Installing and accessing CasaOS from the local network
- Configuring Wi-Fi on a Broadcom wireless card
- Resolving Secure Boot blocking the wireless driver
- Setting the Wi-Fi connection to start automatically after reboot
- Verifying service startup after reboot
- Preparing the server to avoid suspension or sleep behavior
- Planning for stable IP addressing through router DHCP reservation
- Keeping sensitive details out of public documentation

## What I learned

This project taught me how to move from a basic Linux installation to a useful home infrastructure setup. I learned how Ubuntu Server handles networking, drivers, services, SSH access, firewall rules, and startup behavior.

I also learned that building a real home server is not only about installing software. It requires thinking about reliability, family usability, access control, backups, privacy, and how non-technical users will interact with the system.

## Current project status

The server is operational as a local private family cloud foundation. CasaOS is accessible from the browser, the system can be managed through SSH, and the Wi-Fi connection is configured to reconnect automatically after reboot.

Sensitive information such as private IP addresses, real usernames, device names, passwords, and family folder names should not be included in public screenshots or repository documentation.
