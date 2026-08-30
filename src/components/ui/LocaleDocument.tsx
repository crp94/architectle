'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { resolveLocale } from '@/lib/locale';

/** Keeps the document language truthful after query-param locale navigation. */
export function LocaleDocument() {
  const searchParams = useSearchParams();
  const locale = resolveLocale(searchParams.get('lang'));

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
