import React, { useState, useEffect } from "react";
import "../blogpost.css";

import Navbar from "../../components/navbar/Navbar";
import NavbarSpacer from "../../components/navbar/NavbarSpacer";
import PageSection from "../../components/pagesection/PageSection";
import Footing from "../../components/footing/Footing";
import Background from "../../components/background/Background";

import { ReactComponent as Calendar } from "../../assets/icons/calendar.svg";
import { ReactComponent as Clock } from "../../assets/icons/clock.svg";
import { ReactComponent as Star } from "../../assets/icons/star.svg";
import { ReactComponent as Wrench } from "../../assets/icons/wrench.svg";

import data from "./index.json";
import heroImage from "./assets/hero.png";

function Quad() {
  const [readingTime, setReadingTime] = useState(null);

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [month, day, year] = dateStr.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  useEffect(() => {
    const blogpostEl = document.querySelector(".blogpost");
    if (!blogpostEl) return;

    let totalWords = 0;

    const walkNodes = (node) => {
      if (
        node.nodeType === Node.ELEMENT_NODE ||
        node.nodeType === Node.DOCUMENT_FRAGMENT_NODE
      ) {
        for (const child of node.childNodes) {
          walkNodes(child);
        }
      } else if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent || "";
        const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
        totalWords += wordCount;
      }
    };

    walkNodes(blogpostEl);

    const estimatedTime = Math.ceil(totalWords / 200);
    setReadingTime(estimatedTime);
  }, []);

  return (
    <div className="blog page">
      <Background />
      <Navbar name="woahCodes">
        <a href="/#about">About</a>
        <a href="/#experience">Experience</a>
        <a href="/blog">Blog</a>
        <a href="/playground">Playground</a>
        <a
          href="https://drive.google.com/file/d/1TQbA8_gKywt2oy38jprAi8jHpJ2YniDi/view"
          target="_blank"
        >
          Resume
        </a>
        <a href="/#contact">Contact</a>
      </Navbar>
      <NavbarSpacer />
      <div className="blogpost">
        <PageSection>
          <img src={heroImage} alt="Quad Consultation" className="blog-hero" />
          <h1 className="blog-title">{data.title}</h1>
          <h2 className="blog-summary">{data.summary}</h2>
          <div className="blog-info">
            <div className="publish-date blog-information">
              <Calendar />
              <time className="blog-date" dateTime={data.publishDate}>
                {formatDate(data.publishDate)}
              </time>
            </div>
            <div className="reading-time blog-information">
              <Clock />
              <p className="blog-time">
                {readingTime !== null
                  ? `${readingTime} minute read`
                  : "[Calculating...]"}
              </p>
            </div>
          </div>
          <h3 className="blog-heading">A bit of background</h3>
          <p className="blog-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            cupiditate dolor deleniti totam tenetur! Quo optio reprehenderit
            laudantium asperiores! Earum doloremque excepturi accusamus
            obcaecati nihil! Excepturi doloribus aliquam voluptates. Nulla omnis
            ratione reprehenderit soluta necessitatibus eligendi, laudantium
            facilis cupiditate ipsam, molestias doloremque iste odit eius. Qui
            incidunt voluptas deleniti nihil iure quidem hic numquam ducimus,
            quibusdam quia magni optio quos odit fugiat eveniet aut nulla iusto?
            Labore quae iure dolore doloremque beatae nulla, totam dolorem modi
            eius quas, architecto placeat? Aspernatur error ad nostrum quaerat
            harum, quae cum libero ipsam officiis ipsum nemo iure. Eligendi
            vitae itaque, ab facilis provident expedita, earum fuga illum
            voluptates nobis fugit incidunt a eius. Omnis laboriosam nihil
            voluptatum sequi ullam doloribus illo ad voluptatibus ipsum corporis
            velit aut ab cumque, ut quis aliquam rem! Eligendi distinctio illo
            quibusdam quisquam provident eveniet neque cum recusandae esse.
            Ullam, error ut magni voluptas ducimus perspiciatis molestiae
            officia iste facere, veniam quaerat praesentium voluptate
            reprehenderit quod deleniti beatae adipisci rem impedit reiciendis a
            provident earum officiis inventore illum! Nemo placeat reiciendis at
            aliquam ipsa neque nesciunt! Facere quas saepe tempore hic
            provident, consequuntur magnam eligendi illo nihil cupiditate
            repellat. Nulla obcaecati molestiae, deleniti eaque dicta est quae?
            Facilis sit eos corrupti alias reprehenderit assumenda dignissimos
            vel culpa nihil voluptate! Soluta dolores illum voluptatem nemo
            doloribus, repellendus beatae aliquam dolorem accusamus non
            excepturi in enim. Iste earum voluptatibus beatae nesciunt? Eligendi
            corrupti unde excepturi tenetur vitae a voluptatem labore rem quia
            nobis, alias quos ad minima, aut quo cum voluptates adipisci fugiat.
            Dolores, omnis in porro vero nobis sequi possimus, delectus veniam
            nihil quos facilis maxime fuga quidem. Sed, cumque dolore,
            explicabo, repellendus recusandae accusantium quos est ratione vitae
            facere eaque natus voluptas soluta optio! Hic voluptas voluptatum
            necessitatibus dolor deserunt obcaecati dignissimos porro, enim,
            ipsa eaque nisi tempore sit deleniti ipsam excepturi aliquam dicta
            odit, quibusdam dolore labore? Nisi placeat laudantium hic tempore
            aspernatur laborum error, aliquid nostrum doloribus tempora
            consectetur inventore eligendi dolorem vero numquam deserunt ratione
            natus! Dolorum voluptatibus quod consequuntur architecto iusto!
            Omnis iure officiis provident et nulla ea harum facere fugiat neque
            doloremque voluptates voluptatum eveniet obcaecati repellendus autem
            cum officia consequatur tenetur, molestiae enim nisi exercitationem
            eius ipsum reprehenderit? Modi vitae blanditiis, expedita molestiae
            cumque alias voluptatibus numquam dolorem exercitationem aliquam in
            odio dicta vel veniam provident! Non voluptatibus culpa sequi
            quaerat minus unde, ex facere aliquid officia fugiat enim quod
            aperiam in. Possimus molestiae maxime voluptate excepturi,
            cupiditate, voluptates quos molestias odit sapiente itaque modi
            architecto, ipsum ratione perferendis vero harum pariatur corporis.
            Iusto ratione odio cupiditate unde vero nulla quia itaque enim a
            iste hic veniam quasi laboriosam nesciunt quas reprehenderit
            temporibus, dolores suscipit expedita saepe, non magnam eum? Quos
            tenetur facere, optio porro ex possimus. Consequatur, illo
            reiciendis eaque esse aspernatur cum. Fugit obcaecati laudantium et
            maiores voluptates! Reiciendis unde, quis assumenda quos, deserunt
            similique numquam veritatis nulla eius laboriosam, veniam voluptates
            repellendus atque hic harum omnis dolorum? Eveniet quam temporibus
            cum ea quos nostrum sequi, consectetur quis? Ea, mollitia.
          </p>
        </PageSection>
      </div>
      <Footing />
    </div>
  );
}

export default Quad;
