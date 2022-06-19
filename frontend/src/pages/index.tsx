import Featured from "../components/featured/Featured";
import FeaturedProperties from "../components/featuredProperties/FeaturedProperties";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MailList from "../components/mailList/MailList";
import Navbar from "../components/navbar/Navbar";
import PropertyList from "../components/propertyList/PropertyList";
import styles from "../../styles/home.module.scss";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className={styles.homeContainer}>
        <Featured/>
        <h1 className={styles.homeTitle}>Browse by property type</h1>
        <PropertyList/>
        <h1 className={styles.homeTitle}>Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
