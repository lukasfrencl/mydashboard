import { atom } from 'jotai'

import { DetailConfig }  from '~/widgets/types.ts'

export const detailAtom = atom<DetailConfig | undefined>(undefined)
