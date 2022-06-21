import useFetch from "../../hooks/useFetch";
import styles from "./featured.module.scss";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8000/api/hotels/countByCity?cities=Berlin,London"
  );
  console.log(data);
  return (
    <div className={styles.featured}>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className={styles.featuredItem}>
          <img
            src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
            alt=""
            className={styles.featuredImg}
          />
          <div className={styles.featuredTitles}>
            <h1>Berlin</h1>
            <h2>{data[0]} properties</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Featured;
