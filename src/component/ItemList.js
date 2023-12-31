import { Grid } from "semantic-ui-react";
import Link from "next/link";
import styles from "./ItemList.module.css";

export default function ItemList({ list }) {
  return (
    <div>
      {/* Grid는 시맨틱 UI 리액트에서 불러옴 */}
      <Grid columns={3}>
        <Grid.Row>
          {list.map((item) => (
            <Grid.Column key={item.id}>
              <Link href="/detail/[id]" as={`/detail/${item.id}`}>
                  <div className={styles.wrap}>
                    <img
                      src={item.image_link}
                      alt={item.name}
                      className={styles.img_item}
                    />
                    <strong className={styles.tit_item}>{item.name}</strong>
                    <span className={styles.txt_info}>
                      {item.category} {item.product_type}
                    </span>
                    <strong className={styles.num_price}>${item.price}</strong>
                  </div>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}
