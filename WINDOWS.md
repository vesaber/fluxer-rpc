# EXPERIMENTAL! Windows support

> [!WARNING]
> Windows is UNTESTED! Only tested at time of implementation, so it might not work in later updates.

## Get the exe

### From releases

I often also upload the `.exe`s on the [releases page](https://github.com/letruxux/fluxer-rpc/releases)

### Build it yourself

Must have [bun](https://bun.sh) installed

```sh
bun i
bun exe
```

## Run at startup

Windows allows you to run any file at startup by adding it to `shell:startup`, so just move `fluxer-rpc.exe` there.

## Edit config

The config is at (use `Win+R` and paste to open the folder):

```sh
%LOCALAPPDATA%/fluxer-rpc/.env
```

Change variables there, then the exe will run in the tray (no icon yet, it's transparent but i'm sure you can find it!!!)
