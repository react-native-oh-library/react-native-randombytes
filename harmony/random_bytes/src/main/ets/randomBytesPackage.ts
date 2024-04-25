import { RNPackage, TurboModulesFactory } from '@rnoh/react-native-openharmony/ts';
import type {
  TurboModule,
  TurboModuleContext,
} from '@rnoh/react-native-openharmony/ts';
import { TM, RNC } from "@rnoh/react-native-openharmony/generated/ts"
import { RandomBytesTurboModule } from './randomBytesTurboModule';


class RandomBytesTurboModuleFactory extends TurboModulesFactory {
  createTurboModule(name: string): TurboModule | null {
    if (this.hasTurboModule(name)) {
      return new RandomBytesTurboModule(this.ctx);
    }
    return null;
  }

  hasTurboModule(name: string): boolean {
    return name === TM.RandomBytesNativeModule.NAME;
  }
}

export class RandomBytesPackage extends RNPackage {
  createTurboModulesFactory(ctx: TurboModuleContext): TurboModulesFactory {
    return new RandomBytesTurboModuleFactory(ctx);
  }
}
