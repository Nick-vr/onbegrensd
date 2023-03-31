import Image from 'next/image'
import S from './spotlight.module.scss'
// components
// assets
import placeholder from '@/public/placeholder.png'
// styles

const SpotlightItem = (props: { spotlight: any }) => {
  const imageUrl = 'https://onbegrensd-backend.fly.dev/api/files'
  return (
    <>
      {props.spotlight.map((item: any) =>
        item.expand.product_id.image != '' || undefined ? (
          <div className={S.spotlightItem} key={item.product_id}>
            <div className={S.spotlightItemName}>
              {item.expand.product_id.name}
            </div>
            <div className={S.spotlightItemPrice}>
              € {item.expand.product_id.price}
            </div>
            <div className={S.spotlightItemInsideWrapper}>
              <Image
                src={`${imageUrl}/product/${item.expand.product_id.id}/${item.expand.product_id.image}`}
                alt="trui"
                width={229}
                height={306}
              />
              <p className={S.spotlightItemInfo}>{item.info}</p>
              <button
                className={`snipcart-add-item ${S.spotlightItemButton}`}
                data-item-id={item.product_id}
                data-item-name={item.expand.product_id.name}
                data-item-price={item.expand.product_id.price}
                data-item-info={item.info}
              >
                In mijn winkelwagen
              </button>
            </div>
          </div>
        ) : null
      )}
    </>
  )
}

export default SpotlightItem
