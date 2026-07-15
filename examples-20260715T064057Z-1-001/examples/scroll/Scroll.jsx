import React, { useEffect } from "react";
import "./Scroll.css";
const Scroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".slide-in");
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scrollContainer">
      <div className="site-wrap">
        <h1>Slide in on Scroll</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          maiores adipisci quibusdam repudiandae dolor vero placeat esse sit!
          Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil
          voluptatibus expedita quia vero perferendis, deserunt et incidunt
          eveniet temporibus doloremque possimus facilis. Possimus labore,
          officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt
          laudantium blanditiis eum explicabo placeat reiciendis labore iste
          sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum
          facilis eligendi. Asperiores laudantium, rerum ratione consequatur,
          culpa consectetur possimus atque ab tempore illum non dolor nesciunt.
          Neque, rerum.
        </p>
        <p>
          Neque, rerum. A vel non incidunt, quod doloremque dignissimos
          necessitatibus aliquid laboriosam architecto at cupiditate commodi
          expedita in, quae blanditiis. Deserunt labore sequi, repellat
          laboriosam est, doloremque culpa reiciendis tempore excepturi. Enim
          nostrum fugit itaque vel corporis ullam sed tenetur ipsa qui rem quam
          error sint, libero. Laboriosam rem, ratione. Autem blanditiis laborum
          neque repudiandae quam, cumque, voluptate veritatis itaque, placeat
          veniam ad nisi. Expedita, laborum reprehenderit ratione soluta velit
          natus, odit mollitia. Corporis rerum minima fugiat in nostrum.
          Assumenda natus cupiditate hic quidem ex, quas, amet ipsum esse dolore
          facilis beatae maxime qui inventore, iste?
        </p>
        <img
          src="http://unsplash.it/400/400"
          className="align-left slide-in"
          alt="Example"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          maiores adipisci quibusdam repudiandae dolor vero placeat esse sit!
          Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil
          voluptatibus expedita quia vero perferendis, deserunt et incidunt
          eveniet temporibus doloremque possimus facilis. Possimus labore,
          officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt
          laudantium blanditiis eum explicabo placeat reiciendis labore iste
          sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum
          facilis eligendi. Asperiores laudantium, rerum ratione consequatur,
          culpa consectetur possimus atque ab tempore illum non dolor nesciunt.
          Neque, rerum. A vel non incidunt, quod doloremque dignissimos
          necessitatibus aliquid laboriosam architecto at cupiditate commodi
          expedita in, quae blanditiis. Deserunt labore sequi, repellat
          laboriosam est, doloremque culpa reiciendis tempore excepturi. Enim
          nostrum fugit itaque vel corporis ullam sed tenetur ipsa qui rem quam
          error sint, libero. Laboriosam rem, ratione. Autem blanditiis laborum
          neque repudiandae quam, cumque, voluptate veritatis itaque, placeat
          veniam ad nisi. Expedita, laborum reprehenderit ratione soluta velit
          natus, odit mollitia. Corporis rerum minima fugiat in nostrum.
          Assumenda natus cupiditate hic quidem ex, quas, amet ipsum esse dolore
          facilis beatae maxime qui inventore, iste? Maiores dignissimos dolore
          culpa debitis voluptatem harum, excepturi enim reiciendis, tempora ab
          ipsam illum aspernatur quasi qui porro saepe iure sunt eligendi
          tenetur quaerat ducimus quas sequi omnis aperiam suscipit! Molestiae
          obcaecati officiis quo, ratione eveniet, provident pariatur.
        </p>
        <img
          src="http://unsplash.it/400/401"
          className="align-right slide-in"
          alt="Example"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          maiores adipisci quibusdam repudiandae dolor vero placeat esse sit!
          Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil
          voluptatibus expedita quia vero perferendis, deserunt et incidunt
          eveniet temporibus doloremque possimus facilis. Possimus labore,
          officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt
          laudantium blanditiis eum explicabo placeat reiciendis labore iste
          sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum
          facilis eligendi. Asperiores laudantium, rerum ratione consequatur,
          culpa consectetur possimus atque ab tempore illum non dolor nesciunt.
          Neque, rerum. A vel non incidunt, quod doloremque dignissimos
          necessitatibus aliquid laboriosam architecto at cupiditate commodi
          expedita in, quae blanditiis. Deserunt labore sequi, repellat
          laboriosam est, doloremque culpa reiciendis tempore excepturi. Enim
          nostrum fugit itaque vel corporis ullam sed tenetur ipsa qui rem quam
          error sint, libero. Laboriosam rem, ratione. Autem blanditiis laborum
          neque repudiandae quam, cumque, voluptate veritatis itaque, placeat
          veniam ad nisi. Expedita, laborum reprehenderit ratione soluta velit
          natus, odit mollitia. Corporis rerum minima fugiat in nostrum.
          Assumenda natus cupiditate hic quidem ex, quas, amet ipsum esse dolore
          facilis beatae maxime qui inventore, iste?
        </p>
        <img
          src="http://unsplash.it/200/500"
          className="align-left slide-in"
          alt="Example"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          maiores adipisci quibusdam repudiandae dolor vero placeat esse sit!
          Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil
          voluptatibus expedita quia vero perferendis, deserunt et incidunt
          eveniet temporibus doloremque possimus facilis. Possimus labore,
          officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt
          laudantium blanditiis eum explicabo placeat reiciendis labore iste
          sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum
          facilis eligendi. Asperiores laudantium, rerum ratione consequatur,
          culpa consectetur possimus atque ab tempore illum non dolor nesciunt.
          Neque, rerum. A vel non incidunt, quod doloremque dignissimos
          necessitatibus aliquid laboriosam architecto at cupiditate commodi
          expedita in, quae blanditiis. Deserunt labore sequi, repellat
          laboriosam est, doloremque culpa reiciendis tempore excepturi.
        </p>
        <img
          src="http://unsplash.it/200/200"
          className="align-right slide-in"
          alt="Example"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          maiores adipisci quibusdam repudiandae dolor vero placeat esse sit!
          Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil
          voluptatibus expedita quia vero perferendis, deserunt et incidunt
          eveniet temporibus doloremque possimus facilis. Possimus labore,
          officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt
          laudantium blanditiis eum explicabo placeat reiciendis labore iste
          sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum
          facilis eligendi. Asperiores laudantium, rerum ratione consequatur,
          culpa consectetur possimus atque ab tempore illum non dolor nesciunt.
          Neque, rerum. A vel non incidunt, quod doloremque dignissimos
          necessitatibus aliquid laboriosam architecto at cupiditate commodi
          expedita in, quae blanditiis. Deserunt labore sequi, repellat
          laboriosam est, doloremque culpa reiciendis tempore excepturi. Enim
          nostrum fugit itaque vel corporis ullam sed tenetur ipsa qui rem quam
          error sint, libero. Laboriosam rem, ratione. Autem blanditiis laborum
          neque repudiandae quam, cumque, voluptate veritatis itaque, placeat
          veniam ad nisi. Expedita, laborum reprehenderit ratione soluta velit
          natus, odit mollitia. Corporis rerum minima fugiat in nostrum.
          Assumenda natus cupiditate hic quidem ex, quas, amet ipsum esse dolore
          facilis beatae maxime qui inventore, iste? Maiores dignissimos dolore
          culpa debitis voluptatem harum, excepturi enim reiciendis, tempora ab
          ipsam illum aspernatur quasi qui porro saepe iure sunt eligendi
          tenetur quaerat ducimus quas sequi omnis aperiam suscipit! Molestiae
          obcaecati officiis quo, ratione eveniet, provident pariatur.
        </p>
        {/* <img
          src="http://unsplash.it/400/400"
          className="align-right slide-in"
          alt="Example"
        /> */}
      </div>
    </div>
  );
};

export default Scroll;
