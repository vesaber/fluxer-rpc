# discord + last.fm to fluxer RPC

| ![](/assets/music.webp) | ![](/assets/vsc.webp) |
| ----------------------- | --------------------- |

## setup

setup environment variables: read [.env.example](./.env.example)

> [!IMPORTANT]  
> uses [this public discord presence api](https://discord-presence-api.johnrich.dev/), follow its instructions to use it

## run

with docker: `docker run -d --env-file .env ghcr.io/letruxux/fluxer-rpc:latest`

with [bun](https://bun.sh): `bun i`, `bun start`
