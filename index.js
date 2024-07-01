import { randomBytes as randomBytesAndroidIos, seedSJCL } from 'react-native-randombytes';
import { Platform } from 'react-native';
import { randomBytes as randomBytesHarmony } from './index.harmony';

const isHarmony = Platform.OS === 'harmony';

export const randomBytes = isHarmony ? randomBytesHarmony : randomBytesAndroidIos;
export { seedSJCL } from './index.harmony';
