# peer.ai

# Table of Contents
  * [Chapter 1 - About](#chapter-1)
  * [Chapter 2 - Setup](#chapter-2)
  * [Chapter 3 - Troubleshooting](#chapter-3)

## Chapter 1 - About <a id="chapter-1"></a>

* About
    * peer.ai is a Proof of Concept hybrid app being built with React Native on the [peerism](http://peerism.org/) protocol.

* Resources
    * Waffle board: [https://waffle.io/peerism/peer.ai/join](https://waffle.io/peerism/peer.ai/join)
    * Trello: [https://trello.com/peerism](https://trello.com/peerism)
    * Discord: [https://discord.me/peerism](https://discord.me/peerism)

* Technology stack:
    * [React Native](https://facebook.github.io/react-native/docs/getting-started.html)
    * [React Native CLI](https://facebook.github.io/react-native/docs/understanding-cli.html)
    * [Homebrew](https://brew.sh/)
    * [Node Version Manager](https://github.com/creationix/nvm)
    * [Yarn](https://yarnpkg.com/en/)
    * [Node.js](https://nodejs.org/en/) - JavaScript runtime to build JavaScript code.
    * [Watchman](https://facebook.github.io/watchman/)
    * [Xcode and Xcode Command Line Tools (CLT)](https://facebook.github.io/react-native/docs/getting-started.html)
    * [Android Studio](https://developer.android.com/studio/index.html)

## Chapter 2 - Setup <a id="chapter-2"></a>

* Bash (Unix shell) on macOS
    * Install dependencies
        * [Install Node Version Manager (NVM)](https://github.com/creationix/nvm)
        * Install latest stable version of Node.js using NVM (includes NPM), switch to using, and check where installed
            ```
            nvm install v8.0.0; nvm use v8.0.0; nvm list; which node;
            ```
        * Update PATH by appending Node Package Manager (NPM) binary to end of Bash Profile config and reset shell environment
            ```
            echo 'export PATH="/usr/local/share/npm/bin:$PATH"' >> ~/.bash_profile; source ~/.bash_profile
            ```
        * Install Watchman
            ```
            brew install watchman; brew upgrade watchman; which watchman
            ```
        * Install React Native CLI globally and update package.json
            ```
            cd PeerAI; yarn add global react-native-cli; yarn add react-native
            ```
        * Install Yarn and NPM dependencies
            ```
            cd PeerAI; yarn install --verbose; npm install --verbose
            ```

    * Simulation
        * iOS
            * Install [Xcode and Xcode Command Line Tools (CLT)](https://facebook.github.io/react-native/docs/getting-started.html)
            * Show React Native iOS Emulation Help
                ```
                react-native run-ios --help
                ```
            * Check that you are in the PeerAI app root directory:
                ```
                cd PeerAI
                ```
            * Create/select iOS Simulator Devices within Xcode
                ```
                open ios/PeerAI.xcodeproj
                ```
            * List iOS Simulator Device Types
                ```
                ios-sim showdevicetypes
                ```
            * Run Emulator (within PeerAI root directory) in iOS Simulator.
                ```
                react-native run-ios
                ```

                ![alt tag](https://raw.githubusercontent.com/ltfschoen/peer.ai/master/screenshots/demo_animated.gif)

        * Android
            * Install [Android Studio](https://developer.android.com/studio/index.html)
            * Check that you are in the PeerAI app root directory:
                ```
                cd PeerAI
                ```
            * Install Android Target Platforms using Android SDK Manager
                ```
                android
                android --help
                ```
            * List Available Targets
                ```
                android list targets
                ```
            * Create Android Virtual Device image using a target that had a Tag
            (i.e. `android create avd -n <name> -t <target> --abi default/x86_64`).
            Note: Devices stored in `~/.android/avd/.android/avd/`
                ```
                android create avd -n "react" -t "android-N" --abi default/x86_64
                ```
            * Show list of Android Virtual Devices
                ```
                android list avd
                ```
            * Configure Virtual Device details using Android Virtual Device (AVD) Manager
                ```
                android avd
                ```
            * Open and perform in Terminal Window #2
                * Boot of Android Device using configured Platform (i.e. `emulator -avd <name>`)
                    ```
                    emulator -avd "react"
                    ```
            * List Devices
                ```
                react-native run-android --help
                adb devices
                ```
                * Sample output:
                    ```
                    $ adb devices
                    List of devices attached
                    emulator-5554	device
                    ```
            * Delete previous build
                ```
                rm android/app/build/outputs/apk/app-debug.apk
                ```
            * Run React Native app using the Emulator you have already booted up (within PeerAI root directory)
                ```
                react-native run-android --deviceId "emulator-5554"
                ```

                ![alt tag](https://raw.githubusercontent.com/ltfschoen/peer.ai/master/screenshots/avd_boilerplate.png)

    * Debugging
        * Common
            * https://facebook.github.io/react-native/docs/debugging.html
            * Chrome Browser
                ```
                open http://localhost:8081/debugger-ui
                ```
        * iOS
            * (CMD + Shift + K) Hardware > Connect Hardware Keyboard
            * (CMD + D) In-App Developer Menu
        * Android
            * (CMD + M) In-App Developer Menu

## Chapter 3 - Troubleshooting <a id="chapter-3"></a>

* Troubleshooting
    * http://facebook.github.io/react-native/releases/0.19/docs/troubleshooting.html

* Remediation Measures
    * Kill React Native server on default port of 8081
        ```
        kill $(lsof -t -i:8081)
        ```
        OR
        ```
        sudo lsof -n -i4TCP:8081 | grep LISTEN
        kill -9 <cma process id>
        ```
    * Remove iOS and/or Android build directory, then rebuild
        ```
        cd PeerAI
        rm -rf ios/build/
        rm -rf android/build/
        ```