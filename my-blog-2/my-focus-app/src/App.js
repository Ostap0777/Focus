
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import MainCategory from './Components/MainCategory/MainCategory';
import Category from './Components/Category/Category';

import Constraction from './Components/Construction/Constraction';

import Contact from './Components/Contact/Contact';
import VinderInfo from './Components/Vinder/VinderInfo';
import VinderSlider from './Components/Vinder/VinderSlider/VinderSlider';


const firstItems = [
	{ number: '1', 
		name: 'Алюмінієва рама',
		 text: 'Рами виготовлені з високоякісного легкого алюмінію,  є довговічними, а також й естетично привабливі. Легкість рами сприяє простоті монтажу та транспортування, а також дозволяє легко оновлювати текстильні постери, що ідеально підходить для частих маркетингових кампаній.'
		 },
	{ number: '2',
		 name: 'Текстильний постер', 
		 text: 'Виготовлені з екологічно чистих матеріалів, тканинні постери характеризуються високою якістю зображення та відсутністю неприємних запахів, що робить їх ідеальними для внутрішнього використання. Зображення на текстилі виглядає яскраво, природно та реалістично.'
		 },
	{ number: '3',
		 name: 'LED-освітлення',
		  text: 'Новітні технології світлодіодного освітлення забезпечують рівномірне світло, що підкреслює якість зображення і зменшує енергоспоживання.' 
		},
 ];
 
 const secondItems = [
	{ number: '1', 
		name: 'Наповнення',
		 text: 'Брендовані м’які куби виготовленні з щільного поролоному. Що є безпечним для дітей та дозволяє створювати велике рекламне поле за допомогу виставлення кубів один на одного.'
		 },
	{
		number: '2',
		name: 'Зовнішні чохли',
		text: 'Виготовленні з тканини Оксфорд, котра відштовхує воду та не вимагає особливого догляду'
	 },
	 {
		number: '3',
		name: 'Брендування',
		text: 'На рекламному кубі можна розміщувати будь-яке повноколірне зображення на усіх 6-ти гранях, що надає максимальної видимості та ефективності реклами для вашої компанії чи продукту.'
	 }
 ];

 const firstcategoryData ={
	title: '02.Куби',
	description: 'Куби - це є стильний і функціональний акцент для будь-якого заходу, який привертає увагу та запам’ятовується. Сидіння-куби легко адаптується до будь-якого простору і миттєво привертає увагу. Запорукою універсальності та зручності рекламного пуфа - є легкість та мобільність. Максимальна універсальність і зручність завдяки легкості та мобільності рекламного пуфа. Пуфи Cube створені для довготривалого використання з можливістю легкої заміни чохла. Використовуйте всю поверхню сидінь та втілюйте в життя свої креативні ідеї.',
	imageSrc: '/img/kuby/image 2 (1).svg'
 }
 const secondcategoryData ={
	title: '03.Віндер',
	description: 'Віндери - зручний спосіб реклами для привернення уваги ваших клієнтів до бренду та подій.Це мобільні рекламні конструкції у вигляді прапорів на стійкому флагштоку. Вони відрізняються легкістю та зручністю у використанні.',
	imageSrc: '/img/category/image 5.svg'
 }
 
function App() {
  return (
    <div className="wrapper">
		<Header/>
		<Main/>
		<MainCategory/>
		<Constraction
        title="Конструкція Focus Wall"
        imageSrc="/img/construction/image 3 (1).svg"
        items={firstItems}
      />
	 		    <Category
      title={firstcategoryData.title}
      description={firstcategoryData.description}
      imageSrc={firstcategoryData.imageSrc}
    />
		<Constraction
        title="Конструкція Куба"
        imageSrc="/img/construction/Монтажна область 1 1 (1).svg"
        items={secondItems}
      />
      <Category
        title={secondcategoryData.title}
        description={secondcategoryData.description}
        imageSrc={secondcategoryData.imageSrc}
      />
		<VinderInfo/>
		<VinderSlider/>
		<Contact/>
		<Footer/>
    </div>
  );
}

export default App;
