import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <div class="container py-4">
            <div class="p-5 mb-4 bg-light rounded-3">
              <div class="container-fluid py-sm-5">
                <h1 class="display-5 fw-bold text-dark text-sm-start text-center">Мои цели</h1>
                <p class="col-md-8 fs-4 text-dark text-start">
                  Хочу стать полноценным фронт-разработчиком. Самому было тяжко разобраться во всех нюансах Реакта. <br />Не хватало менторов для общего понимая жизненых процессов всей подкапотки.
                </p>
              </div>
            </div>

            <div class="row  align-items-md-stretch">
              <div class="col-lg-6 mb-4">
                <div class="h-100 p-5 text-white bg-dark rounded-3">
                  <h2 class="display-6 fw-bold text-white text-sm-start text-center">Ожидания</h2>
                  <p  class="col-md-8 fs-4 text-white text-start">
                    Уверенный и чистый код typescript. Покрытие тестов. <br /> Перестать исполнять танцы с бубном, при погружении и сопровождении проекта - понимать что за что отвечает (На данный момент FIFTY FIFTY)
                  </p>
                </div>
              </div>
              <div class="col-lg-6 mb-4 ">
                <div class="h-100 p-5 bg-light border rounded-3">
                  <h2 class="display-5 fw-bold text-dark text-sm-start text-center">hard skills</h2>
                  <p class="col-md-8 fs-4 text-dark text-start">
                    Поверхностные знания react, typescript. <br /> (+- более менее - SCSS, CSS, Bootstrap, JS, PostgreSql, Oracle, Java, Spring Framework, Delphi, C#, API)
                  </p>
                </div>
              </div>
            </div>

            <div class="p-5 mb-4  bg-dark rounded-3">
              <div class="container-fluid py-sm-5">
                <h1 class="display-5 fw-bold text-while text-sm-start text-center">Кратко о себе</h1>
                <p class="col-md-8 fs-4 text-while text-start">
                  Пять лет назад фрилансил, делал простые сайты. Захотел что нибудь серьезного. Стал погружаться в Angular своими силами.
                  <br /> Нашёл работу, пришёл на собеседование, но в бухгалтерии что-то напутали и им нужен был бэкендер на java.
                  <br />Компания была отличной на тот момент, поэтому сказал что знаю java.
                  <br />Поменял пару компаний. Сейчас я старший разработчик на Spring Framework.
                  <br />Спустя время понимаю, что хочу всё таки попробывать фронт - мне это более интересно.
                  <br /><b>Помимо работы:</b> Много путешествую, поменял много япоских корыт (брал для себя, ни одна машина в плюс не вышла, так что я такой себе перекуп :D)
                </p>
              </div>
            </div>
            

            <footer class="pt-3 mt-4 text-muted border-top">
            lebovsky/jimolost © 2023
            </footer>
          </div>
        </p>
      </header>
    </div>
  );
}

export default App;
