import React from 'react';
import './Main.scss';
import {Form} from '../components/Form/Form';
import {Select} from '../components/Select/Select';
import {Checkbox} from '../components/Checkbox/Checkbox';
import {Adress} from '../components/Adress/Adress';
import {Comment} from '../components/Comment/Comment';
import {Tip} from '../components/Tip/Tip';

export function Main() { 

  return(
    <React.Fragment>
      <header>
        <h1 className="title">FTL: Прямая машина</h1>
      </header>
      <main className="content">
        <section className="section route">
          <p className="subtitle"><span className="number">1</span> Маршрут</p>
          <Form formTitle="Откуда" fullWidth={true}/>
          <Form formTitle="Куда" fullWidth={true}/>
        </section>
        <section className="section transport">
          <p className="subtitle"><span className="number">2</span> Транспорт</p>
          <div className="select__container">
            <Select selectTitle="Грузоподъёмность" fullWidth={false} widthBox={false}/>
            <Select selectTitle="Способ погрузки" fullWidth={false} widthBox={false}/>
          </div>
        </section>
        <section className="section cargo">
          <p className="subtitle"><span className="number">3</span> Груз</p>
          <Select selectTitle="Тип груза" fullWidth={true} widthBox={true}/>
          <div className="cargo__container">
            <Select selectTitle="Класс опасности" fullWidth={false} widthBox={false}/>
            <Form formTitle="Объявленная ценность, ₽" placeHolder="≥ 1" fullWidth={false}/>
          </div>  
          <Checkbox />
        </section>
        <section className="section time">
          <p className="subtitle"><span className="number">4</span> Время</p>
          <div className="adress__container">
            <p className="adress__text">Когда прибыть на точку</p>
            <p className="adress__text">700 км в день</p>
          </div>
          <Adress className="adress"/>
          <Adress className="adress second"/>
        </section>
        <section className="section comments">
          <Comment />
        </section>
        <Tip />
      </main>
    </React.Fragment>
  )
}
