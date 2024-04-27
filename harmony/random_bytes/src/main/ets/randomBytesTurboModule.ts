import { TurboModule } from '@rnoh/react-native-openharmony/ts';
import { TM } from "@rnoh/react-native-openharmony/generated/ts"
import cryptoFramework from '@ohos.security.cryptoFramework';
import util from '@ohos.util';
import { BusinessError } from '@kit.BasicServicesKit';


export class RandomBytesTurboModule extends TurboModule implements TM.RandomBytesNativeModule.Spec {

  private static base64Helper = new util.Base64Helper();

  public getName(): string {
    return "RNRandomBytes";
  }

  public getConstants(): object {
    return {
      seed: this.getRandomBytes(4096)
    };
  }

  public randomBytes(size: number, cb: (err: string, base64String: string) => void): void {
    try {
      cb(null, this.getRandomBytes(size))
    } catch (err) {
      let e: BusinessError = err;
      cb(`randomBytes error, ${e.code}, ${e.message}`, '');
    }
  }

  private getRandomBytes(size: number): string {
    const { base64Helper } = RandomBytesTurboModule;
    let rand = cryptoFramework.createRandom();
    try {
      const randomData = rand.generateRandomSync(size);
      const base64String = base64Helper.encodeToStringSync(randomData.data);
      return base64String;
    } catch (err) {
      throw err;
    }
  }

}


