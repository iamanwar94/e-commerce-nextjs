import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Carousal from '../components/Carousal';
import Categories from '../components/Categories';
// import Furniture from "../Furniture/Furniture";
import cardimage from '../components/assets/fur12.jpg';

export default function Home() {
  const Card = () => {
    return (
      <div className="three_card_item">
        <Image src={cardimage} alt="cardimage" />
      </div>
    );
  };

  return (
    <div>
      <Head>
        <title>Furniture ECommerce App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

      </Head>
      <div className="home_wrapper">
        <Carousal />
        <div className="three_cards_wrapper">
          <div className="three_cards_heading">
            <h2>Lorem ipsum dolor sit amet consectetur</h2>
          </div>
          <div className="three_cards">
            <Card />
            <Card />
            <Card />
          </div>
          <div className="three_cards">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <Categories />
      </div>

    </div>
  )
}
