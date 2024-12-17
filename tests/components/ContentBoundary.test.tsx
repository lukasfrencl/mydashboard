import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { ContentBoundary } from '~/components/ContentBoundary'

describe('ContentBoundary', () => {
  it('renders correctly when prop isPending === true is passed', () => {
    render(<ContentBoundary isPending={true} isError={false} error={null} data={undefined} />)
    // screen.debug()
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('renders correctly when props isPending === false and isError === true and Error are passed', () => {
    render(<ContentBoundary isPending={false} isError={true} error={new Error('Something bad happened')} data={undefined} />)
    // screen.debug()
    expect(screen.getByRole('alert')).toBeInTheDocument()
    expect(screen.getByText('Something bad happened')).toBeInTheDocument()
  })

  it('renders correctly when props isPending === false and isError === false and data and children callback are passed', () => {
    const data = { some: null }
    const children = (data: { some: null }) => data.some
    const childrenFnSpy = vi.fn(children)

    render(<ContentBoundary isPending={false} isError={false} error={null} data={data} children={childrenFnSpy} />)

    expect(childrenFnSpy).toBeCalledWith(data)
  })
})
