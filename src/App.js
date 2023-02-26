import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Places from './components/Places';

function App() {
  return (
   <div>
    <Header/>
    <Places img="./place6.png" name="Ram Mandir" loc="India" date="22 Mar, 2021 - 28 Mar, 2021" about="Ram Mandir is a Hindu temple that is being built in Ayodhya, Uttar Pradesh, India, at the site of Ram Janmabhoomi, according to the Ramayana the birthplace of Rama, a principal deity of Hinduism.Ram Mandir in india is one of the most awaited place for hindus in India"/>
    <Places img="./place1.png" name="Mount Abu" loc="Japan" date="12 Jan, 2021 - 24 Jan, 2021" about="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."/>
    <Places img="./place2.png" name="Sydney Opera House" loc="Australia" date="27 May, 2021 - 8 Jun, 2021" about="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings"/>
    <Places img="./place3.png" name="Geirangerfjord" loc="Norway" date="01 Oct, 2021 - 18 Nov, 2021" about="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."/>
   </div>
  );
}

export default App;
