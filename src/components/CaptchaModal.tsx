import { useCallback, useEffect, useRef, useState } from 'react'
import { RefreshCw, X } from 'lucide-react'
import type { CaptchaResponse } from '../types/flight.types'

type CaptchaModalProps = {
  isOpen: boolean
  onClose: () => void
  onSolved: () => void
  captchaData: CaptchaResponse['message']
}

export function CaptchaModal({
  isOpen,
  onClose,
  onSolved,
  captchaData,
}: CaptchaModalProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [captchaHtml, setCaptchaHtml] = useState('')

  const handleClose = useCallback(() => {
    onClose()
    window.location.reload()
  }, [onClose])

  useEffect(() => {
    if (isOpen && captchaData.page) {
      try {
        const decodedHtml = atob(captchaData.page)
        setCaptchaHtml(decodedHtml)
        setIsLoading(false)
      } catch (error) {
        console.error('Error decoding CAPTCHA HTML:', error)
        setIsLoading(false)
      }
    }
  }, [isOpen, captchaData.page])

  useEffect(() => {
    if (!isOpen) return

    const handleMessage = (event: MessageEvent) => {
      if (event.origin === new URL(captchaData.collectorUrl).origin) {
        if (
          event.data?.type === 'captcha_solved' ||
          event.data?.action === 'solved'
        ) {
          console.log('CAPTCHA solved successfully')
          onSolved()
        }
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [isOpen, captchaData.collectorUrl, onSolved])

  const handleRetry = () => {
    setIsLoading(true)
    if (iframeRef.current) {
      iframeRef.current.src = 'about:blank'
      setTimeout(() => {
        if (iframeRef.current) {
          const blob = new Blob([captchaHtml], { type: 'text/html' })
          const url = URL.createObjectURL(blob)
          iframeRef.current.src = url
        }
        setIsLoading(false)
      }, 100)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-white">
              Security Verification
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Please complete the security check to continue
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleRetry}
              className="p-2 text-gray-400 hover:text-white transition-colors"
              title="Retry CAPTCHA"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
            <button
              onClick={handleClose}
              className="p-2 text-gray-400 hover:text-white transition-colors"
              title="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex-1 p-6">
          {isLoading ? (
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
                <p className="text-gray-400">
                  Loading security verification...
                </p>
              </div>
            </div>
          ) : (
            <div className="h-96 border border-gray-600 rounded-lg overflow-hidden">
              <iframe
                ref={iframeRef}
                srcDoc={captchaHtml}
                className="w-full h-full"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                title="Security Verification"
                onLoad={() => setIsLoading(false)}
              />
            </div>
          )}
        </div>

        <div className="p-6 border-t border-gray-700">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-400">
              <p>
                Session ID:{' '}
                <span className="font-mono text-gray-300">
                  {captchaData.uuid}
                </span>
              </p>
              <p className="mt-1">
                This verification helps protect against automated requests
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleClose}
                className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleRetry}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
