'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import React from 'react'
import { TbArrowUpRight } from 'react-icons/tb'

import { urlForImage } from '~/lib/sanity.image'
import type { Portfolio } from '~/schemas/documents/portfolio'

export function PortfolioPage({ portfolio }: { portfolio: Portfolio }) {
  const t = useTranslations('Portfolios')

  return (
    <>
      <Image
        className="mt-0 h-14 w-14"
        src={urlForImage(portfolio.logo).size(200, 200).url()}
        alt="Logo"
        width={200}
        height={200}
      />
      <h1>{portfolio.title}</h1>
      {portfolio.website && (
        <Link
          href={portfolio.website}
          target="_blank"
          className="flex items-center font-bold text-current no-underline hover:underline"
        >
          <span>{t('Card.VisitCTA')}</span>
          <TbArrowUpRight className="h-4 w-4" />
        </Link>
      )}
    </>
  )
}