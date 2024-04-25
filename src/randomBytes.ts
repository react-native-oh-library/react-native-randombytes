import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';
import { TurboModuleRegistry } from 'react-native';

interface Constants {
    seed: string
}
 
export interface Spec extends TurboModule {
    readonly randomBytes: (len: number, cb: (err: string, base64String: string)=> void) => void
    readonly getConstants: () => Object
    readonly getName: () => string
} 
 
export default TurboModuleRegistry.get<Spec>('RandomBytesNativeModule') as Spec | null;