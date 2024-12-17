/*
 * Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { randomBytes as randomBytesAndroidIos, seedSJCL } from 'react-native-randombytes';
import { Platform } from 'react-native';
import { randomBytes as randomBytesHarmony } from './index.harmony';

const isHarmony = Platform.OS === 'harmony';

export const randomBytes = isHarmony ? randomBytesHarmony : randomBytesAndroidIos;
export { seedSJCL } from './index.harmony';
