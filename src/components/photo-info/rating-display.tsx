import { Rating as ReactRating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useTranslations } from 'next-intl'
import Star from '~/assets/images/svg/star.svg'

interface RatingDisplayProps {
  rating: number
  setRating: (rating: number) => void
  resolvedTheme: string
}

export const RatingDisplay = ({
  rating,
  setRating,
  resolvedTheme,
}: RatingDisplayProps) => {
  const t = useTranslations('PhotoInfo')

  return (
    <div className='hidden cursor-pointer flex-col items-center justify-center gap-2 rounded-md px-4 py-2 hover:bg-gray-100 md:flex dark:hover:bg-[rgba(36,36,36,0.6)]/60'>
      <div className='whitespace-nowrap text-xs md:text-sm'>{t('score')}</div>
      <ReactRating
        style={{ maxWidth: 150, width: '100%', minWidth: 120 }}
        value={rating}
        onChange={setRating}
        spaceBetween='medium'
        className='flex-shrink-0'
        itemStyles={{
          itemShapes: <Star />,
          activeFillColor: resolvedTheme === 'dark' ? '#fff' : '#242424',
          inactiveFillColor: resolvedTheme === 'dark' ? '#4A4A4A' : '#D3D3D3',
        }}
      />
    </div>
  )
}
