import React from 'react';
import './style.css';

export default function Contato() {
 return (
  <div>
    <div>
      <div>
        <h1>HORÁRIOS DE ATENDIMENTO</h1>
        <p>Agende uma consulta pelo telefone: (21) 3699 - 9999</p>
      </div>
      <div className='medicos'>
        <div>
          <img src='assets/medico01.png' />
          <h4>Dr. Hélio</h4>
          <p>Segundas, quartas e sextas das 9:00 às 16:00.</p>
        </div>
        <div>
          <img src='assets/medico02.png' />
          <h4>Dr. Carlos</h4>
          <p>Terças e quintas das 13:00 às 18:00.</p>
        </div>
        <div>
          <img src='assets/medico01.png' />
          <h4>Dr. Hélio</h4>
          <p>Terças, quintas e sábados das 08:00 às 12:00.</p>
        </div>
      </div>
    </div>
    {/* fim */}
    <div>
      <div>
        <h1>ONDE ESTAMOS LOCALIZADOS?</h1>
        <p>Av.Ayrton Senna, 3000 - Barra da tijuca, Rio de Janeiro - RJ. CEP:22775-904</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.5069570578335!2d-51.17973018502644!3d-23.33364108479636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb434c82b850fb%3A0x904439933379bff7!2sAv.%20Ayrton%20Senna%20da%20Silva%20-%20Londrina%2C%20PR%2C%2086050-460!5e0!3m2!1spt-PT!2sbr!4v1652987662937!5m2!1spt-PT!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
  );
}