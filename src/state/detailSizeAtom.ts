import { atom } from 'jotai'

import { DetailConfig }  from '~/widgets/types.ts'

export const detailSizeAtom = atom<DetailConfig['size']>(undefined)
