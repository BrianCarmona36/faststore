import { ComponentPropsWithRef } from 'react'
import UINewsletter from 'src/components/ui/Newsletter'
import { NewsletterProps as UINewsletterProps } from 'src/components/ui/Newsletter'
import { SubscribeMessage } from 'src/components/ui/Newsletter/Newsletter'

import Section from '../Section'
import styles from './section.module.scss'

export interface NewsletterProps
  extends Omit<ComponentPropsWithRef<'form'>, 'title' | 'onSubmit'> {
  /**
   * Icon for the section.
   */
  icon: {
    icon: string
    alt: string
  }
  /**
   * Title for the section.
   */
  title: string
  /**
   * A description for the section.
   */
  description?: string
  /**
   * The Privacy Policy disclaimer.
   */
  privacyPolicy?: string
  /**
   * The email input label.
   */
  emailInputLabel?: string
  /**
   * The name input visibility.
   */
  displayNameInput?: boolean
  /**
   * The name input label.
   */
  nameInputLabel?: string
  /**
   * The subscribe button label.
   */
  subscribeButtonLabel?: string
  /**
   * The card Variant
   */
  card: Boolean
  /**
   * Specifies the component's color variant combination.
   */
  colorVariant?: UINewsletterProps['colorVariant']

  toastSubscribe: SubscribeMessage

  toastSubscribeError: SubscribeMessage
}

const Newsletter = function Newsletter({
  icon,
  title,
  description,
  privacyPolicy,
  emailInputLabel,
  displayNameInput,
  nameInputLabel,
  subscribeButtonLabel,
  card,
  toastSubscribe,
  colorVariant = 'main',
  toastSubscribeError,
  ...otherProps
}: NewsletterProps) {
  return (
    <Section className={`${styles.section} section-newsletter layout__section`}>
      <UINewsletter
        icon={icon}
        title={title}
        description={description}
        privacyPolicy={privacyPolicy}
        emailInputLabel={emailInputLabel}
        displayNameInput={displayNameInput}
        nameInputLabel={nameInputLabel}
        subscribeButtonLabel={subscribeButtonLabel}
        toastSubscribe={toastSubscribe}
        toastSubscribeError={toastSubscribeError}
        colorVariant={colorVariant}
        card={card}
        {...otherProps}
      />
    </Section>
  )
}

export default Newsletter
