/**
 * MIT License
 *
 * Copyright (C) 2024 Huawei Device Co., Ltd.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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


