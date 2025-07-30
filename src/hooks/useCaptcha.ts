import { useCallback, useState } from 'react'
import type { CaptchaResponse } from '../types/flight.types'

type CaptchaState = {
  isOpen: boolean
  captchaData: CaptchaResponse['message'] | null
  pendingRequest: (() => Promise<any>) | null
}

export function useCaptcha() {
  const [state, setState] = useState<CaptchaState>({
    isOpen: false,
    captchaData: null,
    pendingRequest: null,
  })

  const showCaptcha = useCallback(
    (
      captchaData: CaptchaResponse['message'],
      retryRequest: () => Promise<any>,
    ) => {
      setState({
        isOpen: true,
        captchaData,
        pendingRequest: retryRequest,
      })
    },
    [],
  )

  const closeCaptcha = useCallback(() => {
    setState({
      isOpen: false,
      captchaData: null,
      pendingRequest: null,
    })
  }, [])

  const handleCaptchaSolved = useCallback(async () => {
    if (state.pendingRequest) {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000))

        await state.pendingRequest()

        closeCaptcha()
      } catch (error) {
        console.error('Error retrying request after CAPTCHA:', error)
      }
    }
  }, [state.pendingRequest, closeCaptcha])

  return {
    isOpen: state.isOpen,
    captchaData: state.captchaData,
    showCaptcha,
    closeCaptcha,
    handleCaptchaSolved,
  }
}
