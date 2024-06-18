import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  BenefitsContainer,
} from './styles'

import heroImage from '../../../../assets/hero-image.png'
import { RegularText } from '../../../../components/Typography'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function Hero() {
  const { colors } = useTheme()

  return (
    <HeroContainer>
      <HeroContent className="container">
        <div>
          <section>
            <HeroTitle size="xl">
              Discover your inner lion, with lion beer.
            </HeroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              With Lion Delivery you can receive your lion beer wherever you are, anytime.
            </RegularText>
          </section>

          <BenefitsContainer>
            <InfoWithIcon
              iconColor={colors['brand-yellow-dark']}
              icon={<ShoppingCart weight="fill" />}
              text="Simple and secure purchase"
            />
            <InfoWithIcon
              iconColor={colors['base-text']}
              icon={<Package weight="fill" />}
              text="Packaging keeps the beer intact"
            />
            <InfoWithIcon
              iconColor={colors['brand-yellow']}
              icon={<Timer weight="fill" />}
              text="Fast and tracked delivery"
            />
            <InfoWithIcon
              iconColor={colors['brand-purple']}
              icon={<Coffee weight="fill" />}
              text="The beer arrives at your door"
            />
          </BenefitsContainer>
        </div>

        <div className="imageContainer">
          <img src={heroImage} alt="" />
        </div>
      </HeroContent>
    </HeroContainer>
  )
}
