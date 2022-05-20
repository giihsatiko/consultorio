import React from 'react';
import './style.css';

export default function Conteudo() {
  return (
    <div className='conteudo'>
      <div className='container'>
        <div className='texto'>
          <h1>OS MELHORES <b>APARELHOS DENTÁRIOS</b>!</h1>
          <p>Confira abaixo todas as especialidades odontológicas que temos à sua disposição!</p>
        </div>
        <div className='vantagens'>
          <div>
            <img src='/assets/dente.png' />
            <p>Pré-avaliação</p>
          </div>
          <div>
            <img src='/assets/dente.png' />
            <p>Aparelhos Dentários</p>
          </div>
          <div>
            <img src='/assets/dente.png' />
            <p>Raio-X digital</p>
          </div>
          <div>
            <img src='/assets/dente.png' />
            <p>Clareamento dental</p>
          </div>
        </div>
      </div>
      {/* fim container */}
      <div className='container2'>
        <div>
          <h1>POR QUE USAR <b>APARELHO</b>?</h1>
          <img src='assets/aparelho.png'/>
        </div>
        <div className='beneficios'>
          <div>
            <h3>Dentes alinhados</h3>
            <p>Dentes desalinhados causam problemas nos dentes podendo afetar a digestão dis alimentos e respiração.</p>
          </div>
          <div>
            <h3>Melhora a dicção e a higiene dentária</h3>
            <p>Muitas pessoas não conseguem nem usar o fio dental devido à posição da sua dentição. Contudo, a correção possibilita o cuidado com a saúde bucal de forma bem mais ampla.</p>
          </div>
          <div>
            <h3>Corrige o espaço entre os dentes</h3>
            <p>Uma dentição desalinhada e com espaços significativos incomodam muitas pessoas. Usar aparelho nos dentes é uma das formas mais eficientes para que esses problemas possam ser corrigidos.</p>
          </div>
        </div>
      </div>
      {/* fim container 2 */}
      <div>
        <div><h1>VEJA O QUE NOSSOS <b>CLIENTES</b> ESTÃO FALANDO</h1></div>
        <div className='clientes'>
          <div>
            <img src='assets/cliente01.png' />
            <h4>Alberto</h4>
            <p>Usei aparelho por 2 anos e agora posso sorrir novamente.</p>
          </div>
          <div>
            <img src='assets/cliente02.png' />
            <h4>Eliana</h4>
            <p>Meus dentes eram espaçados e depois de 1 ano estão no lugar certo.</p>
          </div>
          <div>
            <img src='assets/cliente03.png' />
            <h4>Carla</h4>
            <p>Comecei a usar ano passado e já estou notando a diferença.</p>
          </div>
        </div>
        <div className='btn'>
          <a href='#contato'>ENTRAR EM CONTATO</a>
        </div>
      </div>
    </div>
  );
}