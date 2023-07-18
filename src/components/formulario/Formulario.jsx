import React, { useState } from 'react';
import "../formulario/formulario.css"

export default function Form() {
  const [ida, setIda] = useState('');
  const [volta, setVolta] = useState('');
  const [quantidadeAdultos, setQuantidadeAdultos] = useState('');
  const [quantidadeCriancas, setQuantidadeCriancas] = useState('');
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verifica se todos os campos estão preenchidos
    if (
      ida.trim() === '' ||
      volta.trim() === '' ||
      quantidadeAdultos.trim() === '' ||
      origem.trim() === '' ||
      destino.trim() === '' ||
      nome.trim() === '' ||
      email.trim() === ''
    ) {
      setErro('Por favor, preencha todos os campos.');
      return;
    }

    // Valida o formato do e-mail usando uma expressão regular simples
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErro('Por favor, insira um e-mail válido.');
      return;
    }

    // Limpa os campos e exibe mensagem de confirmação
    setIda('');
    setVolta('');
    setQuantidadeAdultos('');
    setQuantidadeCriancas('');
    setOrigem('');
    setDestino('');
    setNome('');
    setEmail('');
    setErro('');
    setEnviado(true);

    // Recarrega a página e volta para a home
    setTimeout(() => {
        window.location.reload();
        window.location.href = '/';
    }, 1000);
  };

  return (
    <div className="container">
      {enviado ? (
        <p className='mensagem'>Reserva realizada com sucesso.</p>
      ) : (
        <div className="search">
          <form onSubmit={handleSubmit} className="needs-validation">
            {erro && <p className="error">{erro}</p>}
            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  id="nomeInput"
                  type="text"
                  className="form-control"
                  placeholder="Passageiro Principal"
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  id="emailInput"
                  type="email"
                  className="form-control"
                  placeholder="E-mail do Passageiro Principal"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  id="quantidadeAdultosInput"
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="Adultos"
                  value={quantidadeAdultos}
                  onChange={(event) => setQuantidadeAdultos(event.target.value)}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  id="quantidadeCriancasInput"
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="Crianças"
                  value={quantidadeCriancas}
                  onChange={(event) => setQuantidadeCriancas(event.target.value)}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  id="origemInput"
                  type="text"
                  className="form-control"
                  placeholder="Origem"
                  value={origem}
                  onChange={(event) => setOrigem(event.target.value)}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  id="destinoInput"
                  type="text"
                  className="form-control"
                  placeholder="Destino"
                  value={destino}
                  onChange={(event) => setDestino(event.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  id="idaInput"
                  type="date"
                  className="form-control"
                  value={ida}
                  onChange={(event) => setIda(event.target.value)}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  id="voltaInput"
                  type="date"
                  className="form-control"
                  value={volta}
                  onChange={(event) => setVolta(event.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="button-enviar">
              Enviar
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
