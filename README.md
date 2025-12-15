# atlasOS

An experimental webOS environment. Made in React, it focuses on extensiblity, modularity, and efficiency. Atlas is sort of my playground for testing new ideas in webOS tech and concepts, while making a viable product.

It will be a while before Atlas is available for public use and stable to build upon. For now, you can just look at the source code or make suggestions either on Discord or in PRs.

## Concepts

These are the concepts I want to implement in Atlas, most of them are new to the webOS space (if that even exists lol) and very well might not be viable, but that's what I'm here to find out:

- Isolated worker threads for different core aspects of the system (networking, file management, etc)
- Modular core services
  - Each services is provided to the component tree by React Context for hotswappability
- Each app runs in its own thread and calls back to the main thread for handling 
- Each app will probably be a tar file with a worker entry file and it can call the Atlas API to render a window with an html file that was inside the tar file
- Each app is a tar file downloaded from the App Store that has:
  - An entrypoint launched inside a worker that acts as its main process
  - Assets like HTML files that can be put in a window rendered by the app's process
- Inter-service communication and actions powered by the native web Events API
  - A dispatcher receives all outgoing events and delivers them to the appropriate service
- x86 subsystem is just another service, with an app that interacts with it just like everything else

## Completed features
None