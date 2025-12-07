import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Icons } from './Icons';

interface AdminProps {
  onBack: () => void;
}

export const Admin: React.FC<AdminProps> = ({ onBack }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Acesso seguro ao env
  const adsId = import.meta?.env?.VITE_GOOGLE_ADS_ID;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Senha simples fixa apenas para proteger a visualização básica
    if (password === 'arbo2024') {
      setIsAuthenticated(true);
    } else {
      alert('Senha incorreta');
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Button variant="outline" onClick={onBack} className="mb-8 border-gray-300 text-gray-500 bg-white">
          ← Voltar para o Site
        </Button>

        {!isAuthenticated ? (
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md mx-auto text-center">
            <Icons.Shield className="w-12 h-12 text-deep-forest mx-auto mb-4" />
            <h2 className="text-2xl font-black text-deep-forest mb-6">Acesso Administrativo</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha de acesso"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-hi-vis-orange"
              />
              <Button type="submit" fullWidth>Entrar</Button>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-deep-forest p-6 text-white flex justify-between items-center">
              <h1 className="text-xl font-bold flex items-center gap-2">
                <Icons.Checklist /> Painel de Diagnóstico
              </h1>
              <span className="bg-green-500 text-xs font-bold px-2 py-1 rounded">Sistema Online</span>
            </div>

            <div className="p-8 space-y-8">
              {/* Status do Google Ads */}
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-charcoal mb-4 flex items-center gap-2">
                  <Icons.Zap className="text-hi-vis-orange" />
                  Status do Google Ads
                </h3>
                
                {adsId ? (
                  <div className="bg-green-50 text-green-800 p-4 rounded-lg flex items-start gap-3">
                    <Icons.Check className="w-5 h-5 mt-0.5" />
                    <div>
                      <strong>Configurado com Sucesso!</strong>
                      <p className="text-sm mt-1">ID da Tag detectado: <code className="bg-white px-2 py-0.5 rounded border border-green-200">{adsId}</code></p>
                      <p className="text-xs mt-2 opacity-75">O script está sendo injetado automaticamente em todas as páginas.</p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-red-50 text-red-800 p-4 rounded-lg flex items-start gap-3">
                    <Icons.Alert className="w-5 h-5 mt-0.5" />
                    <div>
                      <strong>Não Configurado</strong>
                      <p className="text-sm mt-1">A variável de ambiente <code>VITE_GOOGLE_ADS_ID</code> não foi encontrada.</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Guia de Configuração */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-charcoal mb-4">Como Configurar na Vercel</h3>
                <ol className="list-decimal pl-5 space-y-3 text-sm text-gray-600">
                  <li>Acesse o painel do seu projeto na <strong>Vercel</strong>.</li>
                  <li>Clique na aba <strong>Settings</strong> (Configurações).</li>
                  <li>No menu lateral, clique em <strong>Environment Variables</strong>.</li>
                  <li>Adicione uma nova variável:
                    <ul className="list-disc pl-5 mt-2 space-y-1 font-mono text-xs bg-gray-200 p-3 rounded">
                      <li>Key: VITE_GOOGLE_ADS_ID</li>
                      <li>Value: AW-SEU-CODIGO-AQUI</li>
                    </ul>
                  </li>
                  <li>Clique em <strong>Save</strong>.</li>
                  <li>Vá na aba <strong>Deployments</strong> e faça um <strong>Redeploy</strong> para aplicar.</li>
                </ol>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};