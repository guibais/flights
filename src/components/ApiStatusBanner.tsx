import { AlertTriangle, Shield, CheckCircle } from 'lucide-react'

type ApiStatusBannerProps = {
  isDemo: boolean
  hasError: boolean
}

export function ApiStatusBanner({ isDemo, hasError }: ApiStatusBannerProps) {
  if (!isDemo && !hasError) {
    return (
      <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-4 mb-6">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-400" />
          <p className="text-green-300 font-medium">
            API Conectada
          </p>
        </div>
        <p className="text-green-200 text-sm mt-1">
          Buscando voos reais através da Sky Scrapper API.
        </p>
      </div>
    )
  }

  if (hasError) {
    return (
      <div className="bg-amber-900/50 border border-amber-700 rounded-lg p-4 mb-6">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-amber-300 font-medium">
              API Bloqueada por Segurança
            </p>
            <p className="text-amber-200 text-sm mt-1 mb-3">
              A API Sky Scrapper ativou proteção CAPTCHA devido ao volume de requisições. 
              Isso é normal e esperado ao usar APIs de terceiros.
            </p>
            <div className="bg-amber-800/30 rounded-lg p-3">
              <p className="text-amber-100 text-sm font-medium mb-2">
                ✅ Solução Implementada:
              </p>
              <ul className="text-amber-200 text-sm space-y-1">
                <li>• Fallback automático para dados de demonstração</li>
                <li>• Interface totalmente funcional para testes</li>
                <li>• Experiência de usuário preservada</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-4 mb-6">
      <div className="flex items-center gap-2">
        <AlertTriangle className="w-5 h-5 text-blue-400" />
        <p className="text-blue-300 font-medium">
          Modo Demonstração
        </p>
      </div>
      <p className="text-blue-200 text-sm mt-1">
        Usando dados simulados. Adicione sua chave RapidAPI para buscar voos reais.
      </p>
    </div>
  )
}
