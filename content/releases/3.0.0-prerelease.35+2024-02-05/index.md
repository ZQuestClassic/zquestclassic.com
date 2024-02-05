---
title: 3.0 Prerelease 35 2024-02-05
description: 
date: 2024-02-05T09:49:48Z
assets: 
  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.35%2B2024-02-05/3.0.0-prerelease.35%2B2024-02-05-linux.tar.gz
    name: 3.0.0-prerelease.35+2024-02-05-linux.tar.gz
    platform: linux

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.35%2B2024-02-05/3.0.0-prerelease.35%2B2024-02-05-mac.dmg
    name: 3.0.0-prerelease.35+2024-02-05-mac.dmg
    platform: mac

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.35%2B2024-02-05/3.0.0-prerelease.35%2B2024-02-05-windows-x64.zip
    name: 3.0.0-prerelease.35+2024-02-05-windows-x64.zip
    platform: windows-x64

  - url: https://github.com/ZQuestClassic/ZQuestClassic/releases/download/3.0.0-prerelease.35%2B2024-02-05/3.0.0-prerelease.35%2B2024-02-05-windows-x86.zip
    name: 3.0.0-prerelease.35+2024-02-05-windows-x86.zip
    platform: windows-win32
prerelease: true
id: 139885679
tag_name: '3.0.0-prerelease.35+2024-02-05'
channel: '3'
tags:
  - releases
---




# Features

### ZScript

- allow enums of non-int pre-existing types (ex. `long`) [`9ca034ea1`](https://github.com/ZQuestClassic/ZQuestClassic/commit/9ca034ea19eabc29b42d713893c4c4e38684a364)
- add networking via websockets [`41c3622a4`](https://github.com/ZQuestClassic/ZQuestClassic/commit/41c3622a4397c61be69566d77a2901e3d79db9e2)
   &nbsp;
   >WebSockets allow for scripts to communicate with an external WebSocket server. This introduces an official way to use the network in ZScript.  
   >
   >The following example script communicates to a freely hosted WebSocket server, which simply responds back with the messages it receives.  
   >
   >To make your own WebSocket server, Python is a good option. Some example libraries:  
   >
   >- https://github.com/Pithikos/python-websocket-server
   >- https://websockets.readthedocs.io/en/stable/
   >
   >
   >&nbsp;
   >
   >```c
   >#include "std.zh"
   >
   >generic script WebSocketScript
   >{
   >    void run()
   >    {
   >        printf("Connecting to websocket.\n");
   >        websocket ws = Game->LoadWebSocket("ws://ws.ifelse.io");
   >        ws->Own();
   >        bool hasSentMessage = false;
   >
   >        while (true)
   >        {
   >            if (ws->State == WEBSOCKET_STATE_CONNECTING)
   >            {
   >                Waitframe();
   >                continue;
   >            }
   >            else if (ws->State == WEBSOCKET_STATE_CLOSED)
   >            {
   >                char32 error[0];
   >                ws->GetError(error);
   >                printf("Failed to connect: %s\n", error);
   >                break;
   >            }
   >
   >            if (ws->State != WEBSOCKET_STATE_OPEN)
   >            {
   >                printf("Failed to connect: %l\n", ws->State);
   >                break;
   >            }
   >
   >            if (!hasSentMessage)
   >            {
   >                printf("Connected!\n");
   >                ws->Send("hello world!");
   >                ws->Send("domo arigato!", WEBSOCKET_MESSAGE_TYPE_BINARY);
   >                hasSentMessage = true;
   >            }
   >
   >            while (ws->HasMessage)
   >            {
   >                int message_ptr = ws->Receive();
   >                int type = ws->MessageType;
   >                if (type == WEBSOCKET_MESSAGE_TYPE_TEXT)
   >                    printf("got text message: %s\n", message_ptr);
   >                else if (type == WEBSOCKET_MESSAGE_TYPE_BINARY)
   >                {
   >                    int len = SizeOfArray(message_ptr);
   >                    printf("got binary message of length: %d\n", len);
   >                    for (int i = 0; i < len; ++i)
   >                        printf("%d: %l\n", i, message_ptr[i]);
   >                }
   >                else
   >                    printf("got message, but with unknown type: %l\n", type);
   >            }
   >
   >            Waitframe();
   >        }
   >    }
   >}
   >```
   >

# Bug Fixes

### Player

- reset global variables on continue game for replays [`eec8456ce`](https://github.com/ZQuestClassic/ZQuestClassic/commit/eec8456ce2efaed6b0a78a693c76fc55e65eecf3)

### Editor

- combo animations not resetting after using combo selector in dialogs [`96e0752b3`](https://github.com/ZQuestClassic/ZQuestClassic/commit/96e0752b324d33004df4067170a2f58ccc93f067)

# Tests

- add dinus.zplay [`f7de776de`](https://github.com/ZQuestClassic/ZQuestClassic/commit/f7de776de4c8a002e7f527a761d2cf672bb8f8d5)
- add grassland_attack.zplay [`b08c36d99`](https://github.com/ZQuestClassic/ZQuestClassic/commit/b08c36d99bdcb66dd70ebafb8cfb1e1d9fe58279)
