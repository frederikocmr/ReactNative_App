import Reactotron from 'reactotron-react-native';

// Para emular no Android: ir em Android/Sdk/Platform-tools/
// e executar "adb reverse tcp:9090 tcp:9090"
// E adicionar o host que é o IP da máquina atual.

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.1.5' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
