cd C:\Program Files (x86)\Android\android-sdk\emulator
emulator -list-avds
emulator -avd Pixel_4_XL_API_30
cd \rnative\git\RNComponents
adb devices
rem npx react-native run-android --deviceId=emulator-5554